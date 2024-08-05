import React, { useEffect, useState } from 'react'
import { alertSwal } from '../utils/Utils'
import { useNavigate } from 'react-router-dom'
import { Client } from '../index/appointments.inteface'
import { useLocation } from "react-router-dom";
import { userData } from '../index/appointments.inteface';

export interface ClientProps {
    client: Client
}

export const ExistClient: React.FC<ClientProps> = (props) => {
    const { client } = props


    const [detalles, setDetalles] = useState<string>('')
    const [fecha, setFecha] = useState<string>('')
    const [hora, setHora] = useState<string>('')
    const [user_id, setIdsUser] = useState<number>(0)
    const [email, setemail] = useState<string>('')
    const [userData, setUserData] = useState<userData>()
    const [token, setToken] = useState<string>('')
    let location = useLocation()
    const navigate = useNavigate()

    const handleSubmit = async (e: any) => {
        console.log(detalles);
        console.log(typeof (fecha));
        console.log(typeof (hora));
        console.log(user_id);
        console.log(email);
        e.preventDefault()
        if (detalles === '' || fecha === '' || hora === '' || user_id === 0 || email === '') {
            alertSwal({ title: "Campos vacios!", text: "Complete todos los campos", icon: "error", confirmButtonText: "Ok" })
        } else {
            try {
                const doctor_id = userData?.id
                console.log(doctor_id);
                const res = await fetch(`${process.env.REACT_APP_API}appointments`, {
                    method: 'POST',
                    headers: {
                        'Authorization' : `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ detalles, fecha, hora, user_id, email, doctor_id})
                })
                const data = await res.json()
                console.log(data);
            } catch (error) {
                alertSwal({ title: "Error!!", text: "No se pudo registrar el turno", icon: "error", confirmButtonText: "Ok" })
            }
        }
    }

    useEffect(() => {
        setemail(client.email)
        setIdsUser(client.user_id)
        const token = localStorage.getItem('sesiontoken')
        const user = localStorage.getItem('user')
        if (user && token) {
            setToken(token)
            setUserData(JSON.parse(user))
        }
    }, [])


    return (

        <div className={location.pathname === '/Nueva_Cita' ? 'container h-screen m-auto w-4/12' : 'h-screen m-auto'}>
            <div className="py-4">

                <form onSubmit={handleSubmit}>

                    <div className="mb-6">
                        <label htmlFor="detalles" className="block text-sm font-medium text-gray-700">Detalles de la nueva cita</label>
                        <textarea id="detalles" name="detalles"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2"
                            onChange={(e) => setDetalles(e.target.value)}
                            required />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Fecha</label>
                        <input type="date" id="date" name="date"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2"
                            onChange={(e) => setFecha(e.target.value)}
                            required />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="time" className="block text-sm font-medium text-gray-700">Hora</label>
                        <input type="time" id="time" name="time"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2"
                            onChange={(e) => setHora(e.target.value)}
                            required />
                    </div>

                    <div className="flex justify-end justify-center">

                        <button type="submit" className="bg-red-500 text-white px-4 py-2 mr-2 rounded" onClick={() => navigate('/verifyEmail')}>
                            Atras
                        </button>

                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => handleSubmit}>
                            Registrar nueva cita
                        </button>
                    </div>

                </form>
            </div>
        </div>

    )
}
