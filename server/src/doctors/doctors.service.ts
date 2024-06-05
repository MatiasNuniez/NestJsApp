import { Injectable } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Doctor } from './entities/doctor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DoctorsService {

  constructor(@InjectRepository(Doctor)
  private readonly doctorRepository: Repository<Doctor>) { }

  async create(createDoctorDto: CreateDoctorDto) {
    try {
      const user = this.doctorRepository.create(createDoctorDto)
      return await this.doctorRepository.save(user)
    } catch (error) {
      return await error
    }
  }

  findAll() {
    return `This action returns all doctors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} doctor`;
  }

  update(id: number, updateDoctorDto: UpdateDoctorDto) {
    return `This action updates a #${id} doctor`;
  }

  remove(id: number) {
    return `This action removes a #${id} doctor`;
  }
}
