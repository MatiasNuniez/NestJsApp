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
    private readonly userService: UserService
  ) { }

  async create(createAppointmentDto: CreateAppointmentDto) {

    return {msj:'hola'}
    // const { doctor_id, email, ...rest } = createAppointmentDto

    // const userExist = await this.userService.findOneByEmail(email)
    // const doctor = await this.doctorRepository.findOne({ where: { id: doctor_id } })

    // if(!doctor){
    //   throw new NotFoundException('Doctor not found')
    // }

    // if (userExist.status === true) {
    //   const user = await this.userRepository.findOne({ where: { id: userExist.id } })
    //   const appointment = this.appointmentRepository.create({
    //     ...rest,
    //       user,
    //       doctor,
    //     });
    //   return await this.appointmentRepository.save(appointment);
    // }else{
    //   const user = this.userRepository.create()
    //   const appointment = this.appointmentRepository.create({
    //     ...rest,
    //       user,
    //       doctor,
    //     });
    //   return await this.appointmentRepository.save(appointment);
    // }
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
