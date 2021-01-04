import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Hero.css'
export default function Hero() {
    return (
        <div>
            <main>
            <div className="mysvg">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FF0066" d="M39.7,-66.6C51.8,-61.7,62.4,-51.9,67.1,-40C71.8,-28.1,70.8,-14,71.9,0.6C72.9,15.3,76.1,30.5,71.7,42.9C67.2,55.2,55,64.7,41.7,70.6C28.5,76.4,14.3,78.8,2.6,74.3C-9.1,69.8,-18.1,58.5,-30,51.8C-41.8,45.1,-56.4,43,-67.3,35.2C-78.3,27.3,-85.6,13.7,-81,2.6C-76.4,-8.4,-60,-16.7,-48.7,-24C-37.4,-31.3,-31.4,-37.6,-24.1,-45.3C-16.9,-53,-8.4,-62.2,2.7,-66.8C13.8,-71.5,27.6,-71.5,39.7,-66.6Z" transform="translate(100 100)" />
                 </svg>
            </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="heading">
                                <div className="headers">
                                    <div className="h1">Hello World <br/> i am Ali Imaran</div>
                                    <div className="h2">full stack <br/><span> developer</span></div>
                                </div>
                                <div className="buttons">
                                    <a href={"https://drive.google.com/file/d/1ba7G4qv2Pnfm4Hmr2OIomnx5hjiVxxXz/view?usp=sharing"} target="_blank" className="colored" style={{textDecoration:'none'}}>download resume</a>
                                    <Link to="/contact" className="noColored" style={{textDecoration:'none'}}>contact</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="profile">
                                <div className="box1">
                                    <div className="box2">
                                        <div className="box3">
                                          <img src="/images/pic14.jpeg" /> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social">
                <img src="/images/linkedin.svg"/>
                <img src="/images/instagram.svg"/>
                <img src="/images/facebook.svg"/>
                </div>
            </main>
        </div>
    )
}
