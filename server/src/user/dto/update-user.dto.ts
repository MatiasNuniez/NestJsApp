import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    readonly name: string;

    @IsEmail()
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    readonly email: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    readonly phone: string;
}
