import React from 'react';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav';
import About from './components/about/About'
import Exprience from './components/exprience/Exprience'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Exprience/>
        {/* <Services/> */}
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>

    </>
  )
}

export default App;