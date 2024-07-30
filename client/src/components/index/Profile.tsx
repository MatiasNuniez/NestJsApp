import React, { useEffect, useState } from 'react'
import { userData } from './appointments.inteface'

export const Profile: React.FC = () => {

  const [userData, setUserData] = useState<userData>()

  useEffect(() => {
    const user = localStorage.getItem('user')
    console.log(user);
    
    if (user){
      setUserData(JSON.parse(user))
    }
  }, [])
  

  return (

    <div className='grid grid-rows-2 m-auto gap-y-12 max-w-2/4'>
      <div className='grid grid-rows-1 max-w-32 m-auto'>
        <img className="rounded-full" src="https://png.pngtree.com/png-vector/20191021/ourmid/pngtree-vector-doctor-icon-png-image_1834402.jpg" alt="Doctor" />
      </div>
      <div className='flex flex-col space-y-2 text-center'>
        <h1 className="whitespace-normal">Doctor: {userData?.name}</h1>
        <p className="whitespace-normal">Telefono: {userData?.phone}</p>
        <p className="whitespace-normal">Email: {userData?.email}</p>
        <p className="whitespace-normal">Especialidad: {userData?.especialidad}</p>
      </div>
    </div>
  )
}
