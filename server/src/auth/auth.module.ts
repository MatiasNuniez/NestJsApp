import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { DoctorsModule } from 'src/doctors/doctors.module';

@Module({
  imports: [
    UsersModule,
    DoctorsModule,
    JwtModule.register({
      global: true,
      secret:'secre_key',
      signOptions: { expiresIn: '12h' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
