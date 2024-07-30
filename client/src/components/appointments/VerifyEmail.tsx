import React, { useState, useEffect } from 'react'
import { alertSwal } from '../utils/Utils'
import { useNavigate } from 'react-router-dom'
import { NewAppo } from './NewAppo'
import { ExistClient } from './ExistClient'

export const VerifyEmail = () => {

    const [clientStatus, setClientStatus] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [idClient, setIdClient] = useState<number>(0)
    const navigate = useNavigate()

    const verifyEmail = async () => {
        if (email === '') {
            alertSwal({ title: 'Campos vacios !', text: 'Complete todos los campos por favor', icon: 'error', confirmButtonText: 'Ok' })
        } else {
            try {
                const res = await fetch(`${process.env.REACT_APP_API}user/verify`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email })
                })
                const data = await res.json()
                if (data.status) {
                    setEmail(data.email)
                    setIdClient(data.id)
                    setClientStatus(true)
                }
            } catch (error) {
                alertSwal({ title: 'Error', text: 'No se encontro el usuario, registrelo primero', icon: 'error', confirmButtonText: 'Ok' })
            }
        }
    }

    return (
        <div className='container h-screen m-auto w-4/12'>

            {clientStatus ? <ExistClient client={
                {user_id:idClient,
                email:email}
            }/> :

                <div className="py-4">

                    <div>

                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2"
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                        </div>

                        <div className="flex justify-end justify-center">

                            <button type="submit" className="bg-red-500 text-white px-4 py-2 mr-2 rounded" onClick={() => navigate('/')}>
                                Atras
                            </button>

                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => verifyEmail()}>
                                Ir a registrar cita
                            </button>
                        </div>

                    </div>
                </div>}
        </div>
    )
}
