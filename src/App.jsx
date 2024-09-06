import './App.css'
import Login from './pages/login/Login'
import Logo from './assets/Logo.png'
import React from 'react'
function App() {

  return (
    <>
      <div className='Title-Container'>
        <img src={Logo} alt='Title' style={{ width: '400px', height: '400px' }} />
      </div>
      <Login />
    </>
  )
}

export default App