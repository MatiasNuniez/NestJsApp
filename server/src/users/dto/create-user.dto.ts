import { IsString, IsEmail, IsNotEmpty, MinLength, IsBoolean, IsEnum, IsOptional, MaxLength, isNotEmpty } from "class-validator";
import { UserRole } from "src/enums/userRole";
import { Transform } from "class-transformer";


export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    readonly name:string;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    @MaxLength(10)
    readonly phone:string;

    @IsEmail()
    @IsNotEmpty()
    readonly email:string;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    readonly password:string;

    @IsEnum(UserRole)
    @IsNotEmpty()
    role?:UserRole.USER

    @IsOptional()
    @IsBoolean()
    readonly status?:boolean
}
