import React from 'react'

interface ProfileI {

}

interface ProfileProps {
  profileData: ProfileI;
}


export const Profile: React.FC<ProfileProps> = ({ profileData }) => {

  return (

    <div className='grid grid-rows-2 m-auto gap-y-12 max-w-2/4'>
      <div className='grid grid-rows-1 max-w-32 m-auto'>
        <img className="rounded-full" src="https://png.pngtree.com/png-vector/20191021/ourmid/pngtree-vector-doctor-icon-png-image_1834402.jpg" alt="Doctor" />
      </div>
      <div className='flex flex-col space-y-2 text-center'>
        <h1 className="whitespace-normal">Doctor | User :asdasdasd </h1>
        <p className="whitespace-normal">Telefono: 3447566156</p>
        <p className="whitespace-normal">Email: matiasnuniez192@gmail.com</p>
        <p className="whitespace-normal">Especialidad: Fisiatria</p>
      </div>
    </div>
  )
}
