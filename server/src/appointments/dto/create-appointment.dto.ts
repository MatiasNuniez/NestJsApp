import { IsDateString, IsEmail, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { statusAppo } from "src/enums/userRole";

export class CreateAppointmentDto {

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    readonly name: string

    @IsDateString()
    @IsNotEmpty()
    readonly fecha: Date;

    @IsString()
    @IsNotEmpty()
    readonly detalles: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    readonly hora: string

    @IsEnum(statusAppo)
    @IsNotEmpty()
    @IsOptional()
    readonly status?: statusAppo.VIGENTE;

    @IsInt()
    @IsNotEmpty()
    readonly user_id: number;

    @IsInt()
    @IsNotEmpty()
    readonly doctor_id: number;

}
