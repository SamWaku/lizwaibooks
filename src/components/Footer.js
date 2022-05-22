import React from 'react';
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { BiCopyright } from 'react-icons/bi'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <footer>
          <div className='textcontainer'>
            <ul className='section1list'>
              <li className='footertext'>About</li>
              <li className='footertext'>Help</li>
              <li className='footertext'>Terms</li>
              <li className='footertext'>Privacy</li>
            </ul>
            <ul className='section2'>
              <h2 className='footersocialtext'>Socials</h2>
              <div className='section2list'>
                <li className='socialicon'><FaFacebook/></li>
                <li className='socialicon'><AiOutlineTwitter/></li>
                <li className='socialicon'><AiFillInstagram/></li>
              </div>
            </ul>
          </div>
          <div className='copyrightcont'>
              <h1><BiCopyright className='copyrighticon'/> 2022 Lizwaibooks</h1>
          </div>
      </footer>
    </div>
  )
}
