import React from 'react'
import { Button } from './Button'
import { Link  } from 'react-router-dom'
import './Hero.css'
 
export default function Hero({
  topLine, Text, TextDesc, headLine, buttonLabel, img, alt, imageStart
}) {
  return (
    <div className='hero'>
                <div className='hero-content'>
                  <div className='headertext'>
                    <h1>Taste the narative</h1>
                  </div>
                <div>
                    <Button>Read for free</Button>
                </div>      
                <div className='herotext'>
                    <h3>Read for free for 30 days, a subscription fee applies after.K15/book. Cancel anytime.</h3>
                </div>   
            </div>
    </div>
  )
}
