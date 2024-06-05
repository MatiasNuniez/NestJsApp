import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { EspecialidadDoctors, UserRole } from "src/enums/userRole";

export class CreateDoctorDto {

    @IsString()
    @IsNotEmpty()
    readonly name:string;

    @IsEmail()
    @IsNotEmpty()
    readonly email:string;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    readonly password:string;

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    @MaxLength(10)
    readonly phone:string;

    @IsNotEmpty()
    @IsEnum(EspecialidadDoctors)
    readonly especialidad:EspecialidadDoctors

    @IsNotEmpty()
    @IsEnum(UserRole)
    readonly role?:UserRole.DOCTOR

    @IsOptional()
    @IsBoolean()
    readonly status?:boolean
    
}
