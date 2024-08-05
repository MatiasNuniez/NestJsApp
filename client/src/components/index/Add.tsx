import React from 'react'

export const Add = () => {
    return (
        <div className='w-full py-8'>
            <div className='text-end'>
                <button className='rounded-md text-sm py-1 border-2 px-2 font-semibold border-sky-400 text-sky-400 mr-10'>Añadir paciente</button>
                <button className='rounded-md text-sm py-1 px-2 font-semibold bg-sky-400 text-white'>Añadir turno</button>
            </div>
        </div>
    )
}
