import { EspecialidadDoctors } from "../components/register/enum/enums";

export interface ProfileUser { 
    name: string;
    phone: string;
    email: string;
    password: string;
    role: string;
    status: boolean;
}

export interface ProfileDoctor { 
    name: string;
    phone: string;
    email: string;
    password: string;
    especialidad: EspecialidadDoctors;
    role: string;
    status: boolean;
}