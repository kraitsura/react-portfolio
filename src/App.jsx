import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Port from './components/portfolio/Port'
import Contact from './components/contact/Contact'
import Extra from './components/extra/Extra'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
    
    <Header></Header>
    <Nav></Nav>
    <Experience></Experience>
    <Port></Port>
    <Extra></Extra>
    <Contact></Contact>
    <Footer></Footer>

    </>
  )
}

export default App