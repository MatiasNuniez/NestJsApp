import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointment } from './entities/appointment.entity';
import { Doctor } from 'src/doctors/entities/doctor.entity';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AppointmentsService {

  constructor(
    @InjectRepository(Appointment)
    private readonly appointmentRepository: Repository<Appointment>,
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async create(createAppointmentDto: CreateAppointmentDto) {

    const user = await this.userRepository.findOne({ where: { id: createAppointmentDto.user_id } })
    const doctor = await this.doctorRepository.findOne({ where: { id: createAppointmentDto.doctor_id } })

    if (!doctor) {
      throw new NotFoundException('Doctor not found')
    }
    if (!user) {
      throw new NotFoundException('User not found')
    }

    try {
      const appo = this.appointmentRepository.create({
        fecha: createAppointmentDto.fecha,
        detalles: createAppointmentDto.detalles,
        hora: createAppointmentDto.hora,
        status: createAppointmentDto.status,
        doctor: doctor,
        user: user,
        userName: user.name
      });
      await this.appointmentRepository.save(appo)
      return { appo: appo, status: true }
    } catch (error) {
      return { error: error, status: false }
    }

  }

  findAll() {
    return this.appointmentRepository.find()
  }

  findOne(id: number) {
    return this.appointmentRepository.query(`SELECT * FROM appointment where doctor_id = ${id}`);
  }

  update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    return `This action updates a #${id} turno`;
  }

  remove(id: number) {
    return `This action removes a #${id} turno`;
  }
}
