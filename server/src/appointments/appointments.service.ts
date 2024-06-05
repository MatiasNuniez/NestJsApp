import { Injectable } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointment } from './entities/appointment.entity';

@Injectable()
export class AppointmentsService {


  constructor(@InjectRepository(Appointment)
  private readonly appointmentRepository: Repository<Appointment>) { }

  async create(createAppointmentDto: CreateAppointmentDto) {
    try {
      const appo = this.appointmentRepository.create(createAppointmentDto)
      return await this.appointmentRepository.save(appo)
    } catch (error) {
      return await error
    }
  }

  findAll() {
    return `This action returns all turnos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} turno`;
  }

  update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    return `This action updates a #${id} turno`;
  }

  remove(id: number) {
    return `This action removes a #${id} turno`;
  }
}
