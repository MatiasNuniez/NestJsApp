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