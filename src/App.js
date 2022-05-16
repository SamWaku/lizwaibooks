import './App.css';
import Navbar from './components/Navbar'; //for navbar
import Home from './components/pages/Home'
import Hero from './components/Hero';
import Focuscomp from './components/Focuscomp';
import BooksSec from './components/BooksSec';
import Footer from './components/Footer';
//import { BrowseRouter as Router, Routes, Switch } from 'react-router-dom'; //for routing around pages


function App() {
  return (
   <>
      <Navbar/>
      <Hero/>
      <Focuscomp/>
      <BooksSec/>
      <Footer/>
   </>
  );
}

export default App;
