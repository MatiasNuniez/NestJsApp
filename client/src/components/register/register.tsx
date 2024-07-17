import React from 'react'
import { EspecialidadDoctors } from './enumRegister'

const Register = () => {

    const especialidadArray = Object.values(EspecialidadDoctors)

    return (

        <div className='flex items-center justify-center h-screen'>
            <div className='w-2/3 max-w-sm overflow-hidden justify-between'>
                <h1 className='w-full text-center my-10 font-bold text-3xl'>DoctorApp</h1>
                <input type="text" placeholder='Nombre' className='w-full bg-blue-200 rounded-sm py-3 px-4 my-2 font-bold'/>
                <input type="text" placeholder='Telefono' className='w-full bg-blue-200 rounded-sm py-3 px-4 my-2 font-bold' />
                <input type="text" placeholder='Correo Electronico' className='w-full bg-blue-200 rounded-sm py-3 px-4 my-2 font-bold' />
                <input type="text" placeholder='Contrasena' className='w-full bg-blue-200 rounded-sm py-3 px-4 my-2 font-bold'/>
                <select name="Especialidad" id="especialidad" className='w-full bg-blue-200 rounded-sm py-3 px-4 my-2 font-bold'>
                    {especialidadArray.map((item) => (
                        <option value={item}>{item}</option>
                    ))}
                </select>
                <div className='text-center my-4'>
                    <button className='py-4 w-2/3 bg-blue-500 rounded-md font-bold'>Registrar</button>
                </div>
                
            </div>

        </div>
    )
}

export default Register
