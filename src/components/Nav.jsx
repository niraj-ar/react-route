import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='bg-slate-700 text-white p-4 flex justify-around'>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
    </div>
  )
}

export default Nav