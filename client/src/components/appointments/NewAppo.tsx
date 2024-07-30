import React, { useState } from 'react'
import { alertSwal } from '../utils/Utils'
import { useNavigate } from 'react-router-dom'
import { ExistClient } from './ExistClient'
import { useLocation } from "react-router-dom";


export const NewAppo = () => {

    const [register, setRegister] = useState<boolean>(false)
    const [name, setName] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [idUser, setIdUser] = useState<number>(0)
    const navigate = useNavigate()
    let location = useLocation()


    const Reg = async () => {
        if (name === '' || phone === '' || email === '') {
            alertSwal({ title: "Campos vacios !", text: "Complete todos los campos", icon: "error", confirmButtonText: "Ok" })
        } else {
            const res = await fetch(`${process.env.REACT_APP_API}user`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, phone, email })
            })
            const data = await res.json()
            if (data){
                setIdUser(data.id)
                setRegister(true)
            }
        }
    }

    return (
        <div className='h-screen m-auto w-4/12'>
            <h1>Nuevo Paciente</h1>
            {register ?
                <ExistClient client={
                    {user_id:idUser,
                    email:email}
                }/>
                :
                <div className="py-4">
                    <div>
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                            <input type="text" id="name" name="name"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2"
                                onChange={(e) => setName(e.target.value)}
                                required />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Telefono</label>
                            <input type="text" id="name" name="name"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2"
                                onChange={(e) => setPhone(e.target.value)}
                                required />
                        </div>


                        <div className="mb-6">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Correo Electronico</label>
                            <input type="text" id="name" name="name"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2"
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                        </div>


                        <div className="flex justify-end justify-center">
                            <button type="submit" className="bg-red-500 text-white px-4 py-2 mr-2 rounded" onClick={() => navigate('/')}>
                                Atras
                            </button>
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" onClick={Reg}>
                                Registrar usuario
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
