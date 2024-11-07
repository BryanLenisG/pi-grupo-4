import './logo.css'
import Login from '../login/Login'
import Logo from "../../assets/Logo.png"
import React from 'react'

const logo = () => {

  return (
    <>
      <div className='Title-Container'>
        <img src={Logo} alt='Title' style={{ width: '150px', height: '150px' }} />
      </div>
      <Login />
    </>
  )
}
export default logo;