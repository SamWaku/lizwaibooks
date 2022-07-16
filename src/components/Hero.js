import React from 'react'
import { Button } from './Button'
import { Link  } from 'react-router-dom'
import './Hero.css'
 
export default function Hero({
   TextDesc, headLine, buttonLabel, img, alt
}) {
  return (
    <div className='hero'>
                <div className='hero-content'>
                    <h1 className="heading">{headLine}</h1>
                    <p className='description'>{TextDesc}</p>
                  <Link to="/">
                      <Button buttonStyle="btn--outline" buttonSize="btn--large" buttonColor="blue">{buttonLabel}</Button>
                  </Link>      
                  <div className='herotext'>
                      <h3></h3>
                  </div>   
            </div>
            <div className='hero-content'>
                  <div className="img-wrapper">
                        <img src={img} alt={alt} className='img-hero'/>
                  </div>
            </div>
    </div>
  )
}
