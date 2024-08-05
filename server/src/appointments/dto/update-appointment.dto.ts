import { IsDateString, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { statusAppo } from "src/enums/userRole";

export class UpdateAppointmentDto {

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    readonly name: string
    
    @IsDateString()
    @IsNotEmpty()
    @IsOptional()
    readonly fecha: Date;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    readonly detalles: string;

    @IsInt()
    @IsNotEmpty()
    @IsOptional()
    readonly user_id: number;

    @IsInt()
    @IsNotEmpty()
    @IsOptional()
    readonly doctor_id: number;

    @IsEnum(statusAppo)
    @IsNotEmpty()
    @IsOptional()
    readonly status: statusAppo;
}