import React from 'react'
import { Button } from './Button'
import './Hero.css'

export default function Hero() {
  return (
    <div className='hero'>
            <div className='hero-content'>
                <h1>Taste the narative</h1>
                <div>
                    <Button>Read for free</Button>
                </div>      
                <div>
                    <h3>Read for free for 30 days, a subscription fee applies after.K15/book. Cancel anytime.</h3>
                </div>   
            </div>
    </div>
  )
}
