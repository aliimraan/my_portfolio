import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services'
import Timeline from './Timeline'
import Footer from './Footer'
import Contact from './Contact'

export default function Home() {
    return (
        <div>
         <Navbar/>
         <Hero/>
         <Services/>
        <Timeline/>
        <Footer/>
        </div>
    )
}
