import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand fixed-top border-bottom border-body" style={{backgroundColor:'#e3f2fd'}}>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>Navbar</Link>
      </div>
    </nav>
  )
}

export default Navbar
