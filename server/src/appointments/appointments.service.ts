import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointment } from './entities/appointment.entity';
import { User } from 'src/users/entities/user.entity';
import { Doctor } from 'src/doctors/entities/doctor.entity';

@Injectable()
export class AppointmentsService {

  constructor(
    @InjectRepository(Appointment)
    private readonly appointmentRepository: Repository<Appointment>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,
  ) { }

  async create(createAppointmentDto: CreateAppointmentDto) {
    const { user_id, doctor_id, ...rest } = createAppointmentDto;
    
    const user = await this.userRepository.findOne({ where: { id: user_id } });
    const doctor = await this.doctorRepository.findOne({ where: { id: doctor_id } });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (!doctor) {
      throw new NotFoundException('Doctor not found');
    }

    const appointment = this.appointmentRepository.create({
      ...rest,
      user,
      doctor,
    });

    return await this.appointmentRepository.save(appointment);
  }

  async findAll() {
    return await this.appointmentRepository.find({})
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
