import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { DoctorsService } from 'src/doctors/doctors.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UsersService, private readonly doctorService: DoctorsService) { }

    register() {
        return 'Register'
    }

    async login(loginDto: LoginDto) {
        try {
            const user = await this.userService.findOneByEmail(loginDto.email);
            if (user.status === true && user.password === loginDto.password) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            throw new Error('Error al iniciar sesión');
        }
    }

}
