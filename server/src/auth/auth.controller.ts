import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateDoctorDto } from 'src/doctors/dto/create-doctor.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post('Register')
    register(
        @Body()
        Doctor: CreateDoctorDto) {
        return this.authService.register(Doctor)
    }

    @Post('login')
    async login(
        @Body() 
        loginDto: LoginDto) {
        return await this.authService.login(loginDto)
    }


}
