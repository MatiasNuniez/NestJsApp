export interface Appointment {
    userName:string
    id: number;
    fecha: string;
    status: string;
    detalles: string;
    hora:string
  }
  
export type Appointments = Appointment[];

export enum Status{ 
  VIGENTE = 'Vigente',
  FINALIZADO = 'Finalizado'
}

export interface userData { 
  id:number;
  name:string;
  email:string;
  phone:string;
  role:string;
  status:Boolean;
  especialidad:string;
}

export interface Client {
  user_id:number;
  email:string;
}