import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Services from './components/Services/Services'
import Portfolio from './components/portfolio/Portfolio'

const App = () => {
  return (
    <>
    < Header/>
    < Nav />
    < About />
    <Experience />
    < Services />
    < Portfolio />
    < Testimonials />
    <Contact />
    <Footer />
    
    </>
  )
}

export default App