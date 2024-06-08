import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { DoctorsService } from 'src/doctors/doctors.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserOrDoctorDto } from './auth.controller';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UsersService, private readonly doctorService: DoctorsService) { }

    async register(createUserOrDoctor: CreateUserOrDoctorDto) {
            if (createUserOrDoctor.role === 'doctor') {
                try {
                    const res = await this.doctorService.create(createUserOrDoctor)
                    return res
                } catch (error) {
                    throw new Error('Error al doctor')
                }

            }else{
                try {
                    const res = await this.userService.create(createUserOrDoctor)
                    return res
                } catch (error) {
                    throw new Error('Error al registrar usuario')
                }
            }
        }

    async login(loginDto: LoginDto) {
        try {
            const user = await this.userService.findOneByEmail(loginDto.email);
            if (user.res.status === true && user.res.password === loginDto.password) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            throw new Error('Error al iniciar sesión');
        }
    }

}
