import React from 'react'
import Navbar from './Navbar'
import '../styles/About.css'
import Footer from './Footer'

export default function About() {
    return (
        <div>
        <Navbar/>
            <div className="about_section">
                <div className="container">
                    <div className="about_image">
                        <img src="/images/resume2.png" alt="resume"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
