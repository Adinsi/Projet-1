
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css'

function Navbar() {

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show)
  }
  
  return (
    <>
          <nav className="navbar">
             
              <div className="nav-container">

              <NavLink exact to='/' className="nav-logo" >
                      codeBock
               </NavLink>
          
                  <ul className='nav-menu'>
                      <li className='nav-items'>
                          <NavLink exact to='/' className="nav-links" >
                                   Home
                          </NavLink>
                      </li>

                      <li className='nav-items'>
                            <NavLink exact to='/about' className="nav-links" >
                              About
                            </NavLink>

                      </li>

                      <li className='nav-items'>

                         <NavLink exact to='/blog' className="nav-links" >
                          Blog
                     </NavLink>
              </li>

                          
                          <li className='nav-items'>

                             <NavLink exact to='/contact' className="nav-links" >
                               ContactUS
                               </NavLink>
                          </li>
          </ul>
          
          <div className="iconeburger" onClick={handleClick}>
<i className={show? "fa-solid fa-xmark" :"fa-solid fa-bars" }></i>
        </div>
                  
        </div>
  
          </nav>  
    </>
  )
}

export default Navbar
