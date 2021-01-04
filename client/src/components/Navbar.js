import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar() {
    const [isActive,isActiveFn]= useState(false)
    return (
        <div>
            <div className="navbar nav">
                <div className="container">
                    <div className="navbar-brand">Dev.<span>Emm</span></div>
                    <div className={isActive===false?"menu":"menu active"} onClick={()=>isActiveFn(!isActive)}></div>
                    <div className={isActive===false?"navigation":"navigation active"}>
                        <ul>
                            <li><Link to="/" className="anchor">home</Link></li>
                            <li><Link to="/about" className="anchor">about me</Link></li>
                            <li><Link to="/projects" className="anchor">projects</Link></li>
                            <li><Link to="/contact" className="anchor">contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
