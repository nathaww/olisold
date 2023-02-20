import { useState } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Intropage from './components/Intropage'
import Products from './components/Products'
import Testimonial from './components/Testimonial'

function App() {

  return (
    <div className="App cont">
      <Intropage />
      <Hero />
      <Products />
      <Testimonial />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
