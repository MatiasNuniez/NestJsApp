import { Transform } from 'class-transformer';
import { IsString, IsOptional, IsNotEmpty, IsEmail, MinLength, IsEnum, IsBoolean, MaxLength } from 'class-validator';
import { EspecialidadDoctors, UserRole } from 'src/enums/userRole';

export class UpdateUserDto {

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    readonly name:string;
    
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    @MaxLength(10)
    readonly phone:string;

    @IsOptional()
    @IsEmail()
    @IsNotEmpty()
    readonly email:string;
   
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    readonly password:string;

    @IsOptional()
    @IsEnum(UserRole)
    @IsNotEmpty()
    role?:UserRole.USER

    @IsOptional()
    @IsBoolean()
    readonly status?:boolean
}
