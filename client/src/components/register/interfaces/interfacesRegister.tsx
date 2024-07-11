import { userOrDoc, EspecialidadDoctors } from "../enum/enums"


export interface User {
    name: string,
    phone: string,
    email: string,
    password: string,
    role:userOrDoc.user
}

export interface Doctor {
    name: string,
    phone: string,
    email: string,
    password: string,
    role:userOrDoc.doctor,
    especialidad:EspecialidadDoctors.GENERAL
}

export interface RegisterProps {
    typeUser: string
}