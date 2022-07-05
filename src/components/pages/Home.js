import React, { Component } from 'react'
import Navbar from '../Navbar'
import Hero from '../Hero'
import Focuscomp from '../Focuscomp'
import BooksSec from '../BooksSec'
import ReadmoreSec from '../ReadmoreSec'
import Footer from '../Footer'

export default class home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Hero/>
        <Focuscomp/>
        <BooksSec/>
        <ReadmoreSec/>
        <Footer/>
        </div>
    )
  }
}
