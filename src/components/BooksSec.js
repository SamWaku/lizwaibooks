import React from 'react';
import './BooksSec.css'

//img import
import img1 from '../images/img1.jpeg'
import img2 from '../images/img2.jpeg'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.jpeg'

export default function BooksSec() {
  return (
    <div className='books'>
        <div className='headtext'>
            <h1>Books, Audio books, Magazines</h1>
        </div>
        <div className='booksectioncont'>
            <ul className='booksectionlist'>
              <li className='booksectionlistitem'>
                  <img src={img1} alt='/' className='bookimg'/>
                  <div className='bookdesc'>
                    <h3 className='detail'>Issue No.1</h3>
                    <h3>Pacessetters Magazine</h3>
                  </div>
              </li>
              <li className='booksectionlistitem'>
                  <img src={img2} alt='/' className='bookimg'/>
                  <div className='bookdesc'>
                    <h3 className='detail'>Issue No.2</h3>
                    <h3>Pacessetters Magazine</h3>
                  </div>
              </li>
              <li className='booksectionlistitem'>
                  <img src={img3} alt='/' className='bookimg'/>
                  <div className='bookdesc'>
                    <h3 className='detail'>Issue No.3</h3>
                    <h3>Pacessetters Magazine</h3>
                  </div>
              </li>
              <li className='booksectionlistitem'>
                  <img src={img4} alt='/' className='bookimg'/>
                  <div className='bookdesc'>
                    <h3 className='detail'>Issue No.3</h3>
                    <h3>Pacessetters Magazine</h3>
                  </div>
              </li>
            </ul>
        </div>
    </div>
  )
}
