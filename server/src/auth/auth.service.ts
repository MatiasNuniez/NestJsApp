import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { DoctorsService } from 'src/doctors/doctors.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserOrDoctorDto } from './auth.controller';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UsersService, private readonly doctorService: DoctorsService, private readonly jwtService: JwtService) { }

    async register(createUserOrDoctor: CreateUserOrDoctorDto) {
        if (createUserOrDoctor.role === 'doctor') {
            try {
                const salt = await bcrypt.genSalt();
                const hashedPassword = await bcrypt.hash(createUserOrDoctor.password, salt);
                const newUser = await this.doctorService.create({
                    ...createUserOrDoctor,
                    password: hashedPassword,
                });
                return newUser;
            } catch (error) {
                throw new Error('Error al doctor')
            }

        } else {
            try {
                const salt = await bcrypt.genSalt();
                const hashedPassword = await bcrypt.hash(createUserOrDoctor.password, salt);
                const newUser = await this.userService.create({
                    ...createUserOrDoctor,
                    password: hashedPassword,
                });
                return newUser;
            } catch (error) {
                throw new Error('Error al registrar usuario')
            }
        }
    }


    async login(loginDto: LoginDto) {
        try {
            const user = await this.userService.findOneByEmail(loginDto.email);
            
            if (user && user.status && await bcrypt.compare(loginDto.password, user.password)) {
                const payload = { sub: user.id, username: user.name };
                console.log(payload);
                const token = this.jwtService.sign(payload)
                console.log(token);
                return {
                    hola:'hola'
                    // access_token: await this.jwtService.signAsync(payload)
                };
            } else {
                throw new UnauthorizedException('Credenciales inválidas');
            }
        } catch (error) {
            throw new InternalServerErrorException('Error al iniciar sesión');
        }
    }

}
