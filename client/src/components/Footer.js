import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

export default function Footer() {
    const [name,setName]= useState('')
    const [email,setEmail]= useState('')
    const [about,setAbout]= useState('')
    const [message,setMessage]= useState('')
    const history=useHistory()

    const submitHandler=(e)=>{
        e.preventDefault()
        const data={name,email,about,message}
        axios.post('/review/create').then(data=>{
            if(data.status===200){
                setTimeout(() => {
                    history.go(0)
                }, 5000);
                return toast.success('your message is sent successfully')
            }
        }).catch(err=>{
            if(err){
                if(err.response.status===400){
                     return toast.error(err.response.data.error)
                }
             }
        })
    }
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="f_area">
                        <div className="logo">Dev.<span>Emm</span></div>
                        <div className="pages">
                            <Link className="anchor text-decoration-none" to="/">home</Link>
                            <Link className="anchor text-decoration-none" to="/about">about me</Link>
                            <Link className="anchor text-decoration-none" to="/projects">projects</Link>
                            <Link className="anchor text-decoration-none" to="/contact">contact</Link>
                        </div>
                        <div className="pages">
                            <Link className="anchor text-decoration-none">facebook</Link>
                            <Link className="anchor text-decoration-none">instagram</Link>
                            <Link className="anchor text-decoration-none">linkedin</Link>
                            <Link className="anchor text-decoration-none">internshala</Link>
                        </div>
                        <div className="feedback">
                            <form onSubmit={submitHandler}>
                            <ToastContainer/>
                                <h5>your feedback is valuable for me</h5>
                                <div className="email">
                                    <label>Name</label>
                                    <input type="text" onChange={(e)=>setName(e.target.value)}/>
                                </div>
                                <div className="email">
                                    <label>email</label>
                                    <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
                                </div>
                                <div className="email">
                                    <label>About youself</label>
                                    <input type="text" onChange={(e)=>setAbout(e.target.value)}/>
                                </div>
                                <div className="email">
                                    <label>message</label>
                                    <textarea rows="5" cols="10" onChange={(e)=>setMessage(e.target.value)}></textarea>
                                </div>
                                <button type="submit">send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
