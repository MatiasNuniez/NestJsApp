import React, { useState, useEffect } from 'react'
import { Card } from './Card'
import { Profile } from './Profile'
import { alertSwal } from '../utils/Utils'
import { Appointments, Status } from './appointments.inteface'

const Index = () => {

  const [databack, setData] = useState<Appointments>([]);
  const [select, setSelect] = useState<Status>(Status.VIGENTE)

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

      <div className='h-full grid grid-cols-2 w-9/12'>

        <div className='flex max-w-sm min-w-min border-1 mx-12 my-4 bg-green-100 rounded-md max-h-96'>
          <Profile profileData/>
        </div>

        <div className='border-2 my-4 py-4 bg-green-300 rounded-md min-h-96 text-center min-w-max'>
          <button className={select === 'Vigente' ? 'border-1 rounded-md mr-2 p-1 bg-green-200 py-2 shadow-xl' : 'border-2 rounded-md mr-2 p-1'} onClick={() => setSelect(Status.VIGENTE)}>Vigentes</button>
          <button className={select === 'Finalizado' ? 'border-1 rounded-md mr-2 p-1 bg-green-200 py-2 shadow-xl' : 'border-2 rounded-md mr-2 p-1'} onClick={() => setSelect(Status.FINALIZADO)}>Finalizado</button>
          <div className="grid grid-cols-3 gap-2">
            {databack.map((item) => (
              <Card key={item.id} appo={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
