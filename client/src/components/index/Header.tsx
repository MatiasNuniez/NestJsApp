import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {

    return (
        <div className='grid grid-cols-5 my-4'>

            <div className='col-span-3'>
                <h1 className='text-xl font-bold text-sky-900'>Gestor de turnos</h1>
            </div>

            <div className='col-span-1'>
                <input type="text" name="" id="" placeholder='Buscar un paciente' className='py-2 rounded-md px-2 text-sky-900' />
            </div>

            <div className='col-span-1'>
                <div className='grid grid-cols-2'>
                    <div className='flex justify-end col-span-1'>
                        <img src='https://png.pngtree.com/png-vector/20191021/ourmid/pngtree-vector-doctor-icon-png-image_1834402.jpg' alt="" className='rounded-full w-10 h-10' />
                    </div>
                    <p className='col-span-1 m-auto font-semibold text-sky-900'>Matias Nunez  <FontAwesomeIcon className='m-auto font-bold size-3' icon={faArrowDown}/></p>
                </div>
            </div>

        </div>
    )
}
