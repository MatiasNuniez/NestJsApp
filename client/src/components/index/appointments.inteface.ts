export interface Appointment {
    id: number;
    fecha: string;
    status: string;
    detalles: string;
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