import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointment } from './entities/appointment.entity';
import { User } from 'src/user/entities/user.entity';
import { Doctor } from 'src/doctors/entities/doctor.entity';
import { AppointmentsService } from './appointments.service';
import { AppointmentsController } from './appointments.controller';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([Appointment, User, Doctor])],
  providers: [AppointmentsService, UserService],
  controllers: [AppointmentsController],
})
export class AppointmentsModule {}
