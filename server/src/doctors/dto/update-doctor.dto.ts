import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { EspecialidadDoctors, UserRole } from "src/enums/userRole";

export class UpdateDoctorDto {
   
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    readonly name:string;

    @IsEmail()
    @IsNotEmpty()
    readonly email:string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    readonly password:string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    @MaxLength(10)
    readonly phone:string;

    @IsOptional()
    @IsNotEmpty()
    @IsEnum(EspecialidadDoctors)
    readonly especialidad:EspecialidadDoctors

    @IsOptional()
    @IsNotEmpty()
    @IsEnum(UserRole)
    readonly role?:UserRole.DOCTOR

    @IsOptional()
    @IsBoolean()
    readonly status?:boolean
}
