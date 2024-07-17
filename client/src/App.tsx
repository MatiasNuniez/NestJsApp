import './App.css';
import Login from './components/login/Login';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/register/Register';
import Index from './components/index/Index';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/Login' Component={Login}/>
          <Route path='/Register' Component={Register}/>
          <Route path='/' Component={Index}/>
        </Routes>
      </Router>
    </>
  )
}
