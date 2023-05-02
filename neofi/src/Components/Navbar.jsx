import React from 'react'
import Navlogo from './Navlogo'
import {Link} from 'react-router-dom'
import './Styles/navbar.css'

const Navbar = () => {
  return (
    <div className='navMain'>
        <Navlogo/>
         <div className='frame2'>
        <Link className='trade' to='/'>Trade</Link>
        <Link className='earn' to='/earn'>Earn</Link>
        <Link className='support' to='/support'>Support</Link>
        <Link className='about' to='/about'>About</Link>
        </div>
        <div>
            <button className='navbtn'>Connect Wallet</button>
        </div>
    </div>
  )
}

export default Navbar