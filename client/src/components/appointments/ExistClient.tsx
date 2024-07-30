import React, { useEffect, useState } from 'react'
import { alertSwal } from '../utils/Utils'
import { useNavigate } from 'react-router-dom'
import { Client } from '../index/appointments.inteface'
import { useLocation } from "react-router-dom";

export interface ClientProps {
    client: Client
}

export const ExistClient: React.FC<ClientProps> = (props) => {

    let location = useLocation()

    const navigate = useNavigate()

    const handleSubmit = () => {
        alertSwal({ title: "AA", text: "AAAA", icon: "info", confirmButtonText: "ok" })
    }

    return (

        <div className={location.pathname === '/Nueva_Cita' ? 'container h-screen m-auto w-4/12': 'h-screen m-auto'}>
            <div className="py-4">

                <form onSubmit={handleSubmit}>

                    <div className="mb-6">
                        <label htmlFor="detalles" className="block text-sm font-medium text-gray-700">Detalles de la nueva cita</label>
                        <textarea id="detalles" name="detalles"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2"
                            required />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Fecha</label>
                        <input type="date" id="date" name="date"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2"
                            required />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="time" className="block text-sm font-medium text-gray-700">Hora</label>
                        <input type="time" id="time" name="time"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2"
                            required />
                    </div>

                    <div className="flex justify-end justify-center">

                        <button type="submit" className="bg-red-500 text-white px-4 py-2 mr-2 rounded" onClick={() => navigate('/verifyEmail')}>
                            Atras
                        </button>

                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                            Registrar nueva cita
                        </button>
                    </div>

                </form>
            </div>
        </div>

    )
}
