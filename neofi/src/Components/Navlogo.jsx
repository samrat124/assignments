import React from 'react'
 
import logo from '../utils/logo.png'
import {Link} from 'react-router-dom'
import './Styles/navlogo.css'

const Navlogo = () => {
  return (
    <>
    <Link to='/'> <img className='navlogo' src={logo} alt="nav logo" /></Link>
    </>
  )
}

export default Navlogo