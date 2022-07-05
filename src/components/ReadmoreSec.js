import React from 'react'
import { Button } from './Button'
import './ReadmoreSec.css'

export default function ReadmoreSec() {
  return (
    <div className="ReadMore-Container">
        <Button>Read More</Button>
        <h2 className='ReadMore-Text'>
            Read for free for 30 days.
            A subscription fee applies after.
            K15/book. Cancel anytime.
        </h2>
    </div>
  )
}
