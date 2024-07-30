import React from 'react'
import { Appointment } from './appointments.inteface'

interface CardProps {
  appo: Appointment;
}

export const Card: React.FC<CardProps> = ({ appo }) => {

  return (
    <div className='grid rows-3 gap-1 m-3 rounded-md min-h-48 max-h-52 drop-shadow-xl backdrop-blur-xl bg-white/50 hover:bg-white/80'>
      <h1>{appo.fecha.split('T')[0]}</h1>
      <p>{appo.detalles}</p>
      <span>{appo.status}</span>
    </div>
  )
}
