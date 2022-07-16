import React from 'react'
import './Focuscomp.css'


export default function Focuscomp({header, text1, text2, text3, text4, img1,img2,img3,img4, alt}) {
  return (
    <div className='focus'>
        <div className='headtext'>
            <h1>{header}</h1>
        </div>
        <div className='focuscontent s-type-1' role='slider'>
            <div className="focus-img-wrapper">
                <img className='focus-img1' src={img1} alt={alt}/>
            </div>
            <div className='textcont'>
                <p className='text1'>{text1}</p> <br/>
                <p className='text2'>{text2}</p>
            </div>
            <div className="focus-img-wrapper">
                <img className='focus-img2' src={img2} alt={alt}/>
                <h3 className='text-focus1'>Get a hardcover book </h3>
            </div>
            

            <div className="focus-img-wrapper">
                <img className='focus-img3' src={img3} alt={alt}/>
            </div>
            <div className='textcont'>
                <p className='text1'>{text3}</p><br/>
                <p className='text2'>{text4}</p>
            </div>
            <div className="focus-img-wrapper">
                <img className='focus-img4' src={img4} alt={alt}/>
                <h3 className='text-focus2'>Lizwai app</h3>
            </div>
        </div>
    </div>
  )
}
