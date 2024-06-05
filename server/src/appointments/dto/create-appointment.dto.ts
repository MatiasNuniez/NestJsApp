import { IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { statusAppo } from "src/enums/userRole";

export class CreateAppointmentDto {

    @IsDateString()
    @IsNotEmpty()
    readonly fecha: Date;

    @IsString()
    @IsNotEmpty()
    readonly detalles: string;

    @IsEnum(statusAppo)
    @IsNotEmpty()
    @IsOptional()
    readonly status: statusAppo.VIGENTE;
}
