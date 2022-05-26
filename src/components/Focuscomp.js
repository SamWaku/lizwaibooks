import React from 'react'
import './Focuscomp.css'

export default function Focuscomp() {
  return (
    <div className='focus'>
        <div className='headtext'>
            <h1>Stay Focused</h1>
        </div>
        <div className='focuscontent s-type-1' role='slider'>
            <div className='textcont'>
                <p className='text'>Become a collector.<br/>Get books from your favourite authors delivered to you.</p>
            </div>
            <div className='textcont'>
                <p className='text'>When turned on in the app,<br/>notifications are kept in the background. Enjoy reading, disturbance free.</p>
            </div>
        </div>
    </div>
  )
}
