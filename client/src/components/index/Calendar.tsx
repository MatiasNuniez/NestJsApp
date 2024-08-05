import React, { useState, useEffect } from 'react'
import { format, startOfWeek, addDays } from 'date-fns';

export const Calendar = () => {

    const [day, setNewDay] = useState<string>('')

    const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]
    const today = new Date();
    const start = startOfWeek(today, { weekStartsOn: 1 });

    const days: string[] = [];
    for (let i = 0; i < 5; i++) {
        const day = addDays(start, i);
        days.push(format(day, 'd'));
    }


    const data = [
        {
            userName: 'Matias',
            id: 0,
            fecha: '05-08-2024',
            status: true,
            detalles: 'Dolor de cabeza',
            hora: '14:30'
        },
        {
            userName: 'Matias',
            id: 0,
            fecha: '06-08-2024',
            status: true,
            detalles: 'Dolor de cabeza',
            hora: '14:30'
        },
        {
            userName: 'Matias',
            id: 0,
            fecha: '07-08-2024',
            status: true,
            detalles: 'Dolor de cabeza',
            hora: '14:30'
        },
        {
            userName: 'Matias',
            id: 0,
            fecha: '08-08-2024',
            status: true,
            detalles: 'Dolor de cabeza',
            hora: '14:30'
        },
        {
            userName: 'Matias',
            id: 0,
            fecha: '09-08-2024',
            status: true,
            detalles: 'Dolor de cabeza',
            hora: '14:30'
        }
    ]

    useEffect(() => {
        const date = new Date()
        const todayDate = date.toLocaleDateString().split('/')[0].split('')
        if (todayDate[0] === '0') {
            setNewDay(todayDate[1])
        } else {
            setNewDay(todayDate[0] + todayDate[1])
        }
    }, [day])


    return (
        <div className='grid grid-cols-5 h-full rounded-lg border-2 drop-shadow-lg w-full'>
            {dias.map((dia, index) =>
                <div key={index} className='px-2 py-2 border-e-2'>
                    <div className='grid grid-rows-3 h-36 col-span-1 bg-gray-300 px-2 rounded-sm'>
                        <h1 className={day === days[index] ? 'row-span-1 text-start font-semibold text-xl text-sky-400' : 'row-span-1 text-start font-semibold text-xl'}>{dia}</h1>
                        <p className={day === days[index] ? 'text-4xl row-span-2 font-semibold text-sky-400' : 'text-4xl row-span-2 font-semibold'}>{days[index]}</p>
                    </div>
                    {data.map((item, index) => (
                            <div className='col-span-1 grid grid-rows-3 h-36 w-60 bg-sky-100 px-4 py-2 rounded-2xl border-2 border-sky-600 my-4 m-auto'>
                                <button className='row-span-1 text-center bg-white font-semibold text-sm rounded-xl text-gray-800'>{item.userName}</button>
                                <p className='text-xs row-span-1 font-semibold text-slate-600 my-auto'>{item.detalles}</p>
                                <span className='text-sm row-span-1 font-semibold text-center my-auto'>{item.hora}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
