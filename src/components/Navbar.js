import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; //for routes
import { FaBars, FaTimes, FaBook } from 'react-icons/fa'; //for the icons
import { CgShoppingCart } from 'react-icons/cg';
import { Button } from './Button';

function Navbar () {
  const [click, setClick] = useState(false); //click function state
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click);
  //const closeMobileView = () => setClick(false)

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    }else {
      setButton(true)
    }
  }

  window.addEventListener('resize', showButton)
    return (
      <>
          <div className='navbar'>
            <div className='navbar-container container'>
                <Link to='/' className='navbar-logo'>
                  <FaBook className='navbar-icon' />
                    Lizwai
                </Link> 
                <div className='menu-icon' onClick={handleClick} >
                  {click ? <FaTimes className='fa-times'/> : <FaBars className='fa-bars'/> } 
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
                    <li className='nav-item'>
                      <Link to='/' className='nav-links'>Home</Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='/services' className='nav-links' >About</Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='/books' className='nav-links' >Books</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/'><CgShoppingCart className='cart-btn'/></Link>
                    </li>
                    
                  <li className='nav-btn'>
                    {button ? (
                    <Link to='/signup' className='btn-link'>
                      <Button buttonStyle='btn--outline'>Sign up</Button>
                    </Link>
                    ) : (
                      <Link to='/signup' className='btn-link'>
                        <Button buttonStyle='btn--outline'
                          buttonSize='btn--mobile'>
                          Sign up
                        </Button>
                      </Link>
                    )}
                  </li>
                </ul>
            </div>
          </div>
      </>
    )
  }

  export default Navbar;


