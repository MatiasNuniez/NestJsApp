import { IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { statusAppo } from "src/enums/userRole";

export class UpdateAppointmentDto {
    @IsDateString()
    @IsNotEmpty()
    @IsOptional()
    readonly fecha: Date;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    readonly detalles: string;

    @IsEnum(statusAppo)
    @IsNotEmpty()
    @IsOptional()
    readonly status: statusAppo;
}