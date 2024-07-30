import React, { useState, useEffect } from 'react'
import { Card } from './Card'
import { Profile } from './Profile'
import { alertSwal } from '../utils/Utils'
import { Appointments, Status } from './appointments.inteface'
import { useNavigate } from 'react-router-dom'

const Index = () => {

  const [databack, setData] = useState<Appointments>([]);
  const [select, setSelect] = useState<Status>(Status.VIGENTE)
  const navigate = useNavigate()

  const getData = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API}appointments`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      const data = await res.json()
      setData(data);
    } catch (error) {
      alertSwal({ title: 'Error!', text: 'Verificacion de datos incorrecta', icon: 'error', confirmButtonText: 'Ok' })
    }
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
  }, [databack])


  return (


    <div>
      <div className='flex align-center justify-center gap-4'>
      <div className='text-center mt-5'>
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => navigate('/Nuevo_Turno')}>Nuevo paciente</button>
      </div>
      <div className='text-center mt-5'>
          <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => navigate ('/verifyEmail')}>Nueva cita</button>
      </div>
      </div>
      {/* Boton para dirigirnos a cualquier ruta de agregacion de nuevo turno/cita */}

      <div className='h-full grid grid-cols-4 w-10/12'>

        {/* Mapeamos los datos del doctor */}
        <div className='flex max-w-sm min-w-min col-span-1 border-1 mx-12 my-4 bg-slate-100 rounded-md max-h-96 shadow-xl'>
          <Profile />
        </div>
        {/* Fin datos doctor */}

        {/* Mapeo de todos los turnos x doctor */}
        <div className='my-4 py-4 rounded-md min-h-96 text-center min-w-max shadow-2xl col-span-3'>
          <div className="grid grid-cols-3 gap-2">
            {databack.map((item) => (
              <Card key={item.id} appo={item} />
            ))}
          </div>
        </div>
      {/* Fin de todos los turnos */}

      </div>
    </div>
  )
}

export default Index
