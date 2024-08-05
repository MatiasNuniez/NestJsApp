import React from 'react'
import { Appointment } from './appointments.inteface'

interface CardProps {
  appo: Appointment;
}

export const Card: React.FC<CardProps> = ({ appo }) => {

  return (
    <div className='grid rows-3 gap-1 m-3 py-4 rounded-md min-h-24 max-h-52 max-w-52 drop-shadow-xl bg-green-300 hover:bg-green-200'>
      <h1 className='rows-span-1'>{appo.userName}</h1>
      <p className='rows-span-1'>{appo.fecha.split('T')[0]}</p>
      <span className='rows-span-1'>{appo.hora}</span>
    </div>
  )
}
