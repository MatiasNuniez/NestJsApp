import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { alertSwal } from '../utils/Utils'

const Login = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const navigate = useNavigate()

    const Log = async () => {        
        if (email === '' || password === '') {
            alertSwal({title:'Campos vacios',text:'Complete todos los campos',icon:"warning",confirmButtonText:'Ok'})
        } else {
            try {
                const res = await fetch(`${process.env.REACT_APP_API}auth/login`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ email, password })
                    }
                )
                const data = await res.json()                
                if (data.status) {
                    localStorage.setItem('sesiontoken', data.access_token)
                } else {
                    alertSwal({title:"Error verificacion",text:"No existe el usuario",icon:"error",confirmButtonText:"Ok"})
                }
            } catch (error) {
                alertSwal({title:'Error!', text:'Verificacion de datos incorrecta',icon:'error', confirmButtonText:'Ok'})
            }
        }
    }
    
    useEffect(() => {
        const tokenStorage = localStorage.getItem('sesiontoken')        
        if(tokenStorage){
            navigate('/')
        }   
    }, [navigate]);
    

    return (
        <div className='flex justify-center items-center h-screen'>
        <div className='w-2/3 max-w-sm bg-white shadow-md rounded-lg overflow-hidden'>
            <div className='flex justify-center p-4'>
                <img src='https://t4.ftcdn.net/jpg/01/34/29/31/360_F_134293169_ymHT6Lufl0i94WzyE0NNMyDkiMCH9HWx.jpg' className='h-80 w-80 rounded-full' alt='doctorAvatar' />
            </div>
            <div className='px-6 py-4'>
                <input type="email" name="User" id="email" placeholder='Correo Electronico' className='w-full px-3 py-5 rounded-md font-bold' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='px-6 py-4'>
                <input type="password" name="Password" id="password" placeholder='Contrasena' className='w-full px-3 py-5 rounded-md font-bold' onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='py-4 px-6 text-center'>
                <button className='w-full bg-blue-500 px-3 py-5 rounded-md font-bold' onClick={Log}>Login</button>
                <p>No tienes cuenta? Registrate<a href="https://localhost:3000" className='text-blue-700' onClick={() => navigate('/Register')}> aqui</a></p>
            </div>
        </div>
    </div>
    )
}

export default Login
