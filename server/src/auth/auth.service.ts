import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { DoctorsService } from 'src/doctors/doctors.service';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { CreateDoctorDto } from 'src/doctors/dto/create-doctor.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {

    constructor(private readonly doctorService: DoctorsService, private readonly jwtService: JwtService) { }

    async register(Doctor: CreateDoctorDto) {

        const userExist = await this.doctorService.findOneByEmail(Doctor.email)
        if (userExist) {
            return { Message: 'El usuario con ese email ya existe' }
        } else {
            try {
                const salt = await bcrypt.genSalt();
                const hashedPassword = await bcrypt.hash(Doctor.password, salt);
                const newUser = await this.doctorService.create({
                    ...Doctor,
                    password: hashedPassword,
                });
                console.log(newUser);

                return { status: true, data: newUser };
            } catch (error) {
                throw new Error('Error al registrar doctor')
            }
        }
    }


    async login(loginDto: LoginDto) {
        const user = await this.doctorService.findOneByEmail(loginDto.email);
        try {
            if (user && user.status) {
                const isMatch = await bcrypt.compare(loginDto.password, user.password);
                console.log(isMatch);
                if (isMatch) {
                    const payload = { sub: user.id, username: user.name };
                    console.log(payload);
                    return {
                        userData: {
                            name: user.name,
                            phone: user.phone,
                            email: user.email,
                            especialidad: user.especialidad,
                            id:user.id,
                            status: user.status
                        },
                        access_token: await this.jwtService.signAsync(payload)
                    };
                } else {
                    throw new UnauthorizedException('Credenciales inválidas');
                }
            } else {
                throw new UnauthorizedException('Credenciales inválidas');
            }
        } catch (error) {
            console.error('Error durante el logeo:', error);
            throw new InternalServerErrorException('Error al iniciar sesión');
        }
    }
}