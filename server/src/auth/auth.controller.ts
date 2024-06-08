import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post('Register')
    register() {
        return this.authService.register()
    }

    @Post('login')
    login(
        @Body() 
        loginDto: LoginDto) {
        console.log(loginDto);
        return this.authService.login(loginDto)
    }
}
