import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {


  constructor(@InjectRepository(User)
  private readonly userRepository: Repository<User>) { }

  create(createUserDto: CreateUserDto) {
    try {
      const user = this.userRepository.create(createUserDto)
      return this.userRepository.save(user)
    } catch (error) {
      return error
    }
  }

  async findOneByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      try {
        return { status: false }
      } catch (error) {
        return error
      }
    }else{
      return user
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
