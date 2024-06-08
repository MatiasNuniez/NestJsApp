import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User)
  private readonly userRepository: Repository<User>) { }

  async create(createUserDto: CreateUserDto) {
    try {
      const user = this.userRepository.create(createUserDto)
      return await this.userRepository.save(user)
    } catch (error) {
      return await error
    }
  }

  async findAll() {
    try {
      return await this.userRepository.find();
    } catch (error) {
      return await error
    }

  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findOneByEmail(email: string) {
    try {
        const res = await this.userRepository.findOne({ where: { email }})
        if (res) {
            return {
                status: true,
                password: res.password
            };
        } else {
            throw new Error('Usuario no encontrado');
        }
    } catch (error) {
        throw new Error('Error al buscar el usuario por correo electrónico');
    }
}

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    try {
      this.userRepository.delete(id);
    } catch (error) {
      return await error
    }
  }
}
