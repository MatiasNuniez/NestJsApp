import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateDoctorDto } from 'src/doctors/dto/create-doctor.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';


export type CreateUserOrDoctorDto = CreateDoctorDto | CreateUserDto;

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post('Register')
    register(
        @Body()
        userOrDoctor: CreateUserOrDoctorDto) {
        return this.authService.register(userOrDoctor)
    }

    @Post('login')
    login(
        @Body() 
        loginDto: LoginDto) {
        return this.authService.login(loginDto)
    }
}
