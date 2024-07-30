import { IsDateString, IsEmail, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { statusAppo } from "src/enums/userRole";

export class CreateAppointmentDto {

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
