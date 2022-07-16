import React, { Component } from 'react'
import Navbar from '../Navbar'
import Hero from '../Hero'
import Focuscomp from '../Focuscomp'
import BooksSec from '../BooksSec'
import ReadmoreSec from '../ReadmoreSec'
import Footer from '../Footer'

import {homeObjOne} from './Hompage/HeroData'
import { homeObjTwo } from './Hompage/FocusData'

export default class home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Hero {...homeObjOne}/>
        <Focuscomp {...homeObjTwo}/>
        <BooksSec/>
        <ReadmoreSec/>
        <Footer/>
        </div>
    )
  }
}
