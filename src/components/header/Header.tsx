'use client'
import React from 'react'
import Logo from './content/logo/Logo'
import './header.css'
import NavBar from './content/navbar/NavBar'

const Header = () => {
  return (
    <div className='header'>
        <Logo/>
        <NavBar/>
    </div>
  )
}

export default Header