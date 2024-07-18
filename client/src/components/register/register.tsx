import React, { useEffect, useState } from 'react'
import { EspecialidadDoctors } from './enumRegister'
import { useNavigate } from 'react-router-dom'
import { alertSwal } from '../utils/Utils'

const Register = () => {

    const [name, setName] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [especialidad, setSpeciality] = useState<string>('')

    const especialidadArray = Object.values(EspecialidadDoctors)
    const navigate = useNavigate()

    const handleSubmit = async () => {
        const role = 'doctor'

        if (name === '' || phone === '' || email === '' || password === '' || especialidad === '') {
            alertSwal({ title: 'Campos vacios', text: 'Complete todos los campos', icon: "warning", confirmButtonText: 'Ok' })
        } else {
            try {              
                const res = await fetch(`${process.env.REACT_APP_API}auth/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'Application/json'
                    },
                    body: JSON.stringify({ name, phone, email, password, role, especialidad })
                })
                const data = await res.json();
                if (data.status) {
                    alertSwal({ title: 'Realizado', text: 'El usuario se registro correctamente', icon: 'success', confirmButtonText: 'Ok' })
                }
            } catch (error) {
                alertSwal({ title: 'Error', text: 'Ha ocurrido un error al registrar el usuario', icon: 'error', confirmButtonText: 'Ok' })
            }
        }
    }

    useEffect(() => {
        const storageToken = localStorage.getItem('sesiontoken')
        if (storageToken) {
            navigate('/')
        }
    }, [navigate])


    return (

        <div className='flex items-center justify-center h-screen'>
            <div className='w-2/3 max-w-sm overflow-hidden justify-between'>
                <h1 className='w-full text-center my-10 font-bold text-3xl'>DoctorApp</h1>
                <input type="text" placeholder='Nombre' className='w-full bg-blue-200 rounded-sm py-3 px-4 my-2 font-bold' onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='Telefono' className='w-full bg-blue-200 rounded-sm py-3 px-4 my-2 font-bold' onChange={(e) => setPhone(e.target.value)} />
                <input type="text" placeholder='Correo Electronico' className='w-full bg-blue-200 rounded-sm py-3 px-4 my-2 font-bold' onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder='Contrasena' className='w-full bg-blue-200 rounded-sm py-3 px-4 my-2 font-bold' onChange={(e) => setPassword(e.target.value)} />
                <select
                    name="Especialidad"
                    id="especialidad"
                    className='w-full bg-blue-200 rounded-sm py-3 px-4 my-2 font-bold'
                    onChange={(e) => setSpeciality(e.target.value)}
                    value={especialidad}
                >
                    {especialidadArray.map((item) => (
                        <option value={item} key={item}>{item}</option>
                    ))}
                </select>


                <div className='text-center my-4'>
                    <button className='py-4 w-2/3 bg-blue-500 rounded-md font-bold' onClick={handleSubmit}>Registrar</button>
                </div>

            </div>

        </div>
    )
}

export default Register
