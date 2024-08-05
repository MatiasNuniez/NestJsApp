import './App.css';
import Login from './components/login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/register/Register';
import Index from './components/index/Index';
import { NewAppo } from './components/appointments/NewAppo';
import { ExistClient } from './components/appointments/ExistClient';
import { ClientProps } from './components/appointments/ExistClient';
import { VerifyEmail } from './components/appointments/VerifyEmail';

export default function App() {
  return (
    <div className='container m-auto'>
      <Router>
        <Routes>
          <Route path='/Login' Component={ Login } />
          <Route path='/Register' Component={ Register } />
          <Route path='/' Component={ Index } />
          <Route path='/Nuevo_Turno' Component={ NewAppo } />
          <Route path='/verifyEmail' element={<VerifyEmail/>}/>
          
        </Routes>
      </Router>
    </div>
  )
}
