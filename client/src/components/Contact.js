import React,{useState} from 'react'
import '../styles/Contact.css'
import Navbar from './Navbar'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

export default function Contact() {
    const [name,setName]= useState('')
    const [email,setEmail]= useState('')
    const [number,setNumber]= useState('')
    const [c_name,setC_Name]= useState('')
    const [msg,setMsg]= useState('')
    const history=useHistory()

    const submitHandler=(e)=>{
        e.preventDefault();
        const data={name,email,number,c_name,msg}
        axios.post('/contact/create',data).then(data=>{
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
        <Navbar/>
            <article className="contact">
                <div className="container">
                    <div className="row">
                        <ToastContainer/>
                        <div className="col-md-6">
                        <div className="cont_area">
                            <div className="heading">
                                <img src="/images/email.svg"/>
                                <h3>send me a message</h3>
                            </div>
                            <form onSubmit={submitHandler}>
                               <div className="line">
                                <input type="text" placeholder="fullname" onChange={(e)=>setName(e.target.value)}/>
                                <input type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
                               </div>
                               <div className="line">
                                <input type="number" placeholder="phone Number" onChange={(e)=>setNumber(e.target.value)}/>
                                <input type="text" placeholder="company name" onChange={(e)=>setC_Name(e.target.value)}/>
                               </div>
                               <div className="line">
                                <input type="text" placeholder="message" onChange={(e)=>setMsg(e.target.value)}/>
                                
                               </div>
                              
                               <div className="line"><button>send <img src="/images/send.svg"/></button></div>
                            </form>
                        </div>
                        </div>
                        <div className="col-md-6">
                       

                        <div className="another_area">
                        
                            
                        <div className="heading">
                            <img src="/images/email.svg"/>
                            <h3>contact me</h3>
                        </div>
                        <form >
                           <div className="line">
                            <div className="both">
                                <img src="/images/phone.svg"/>
                                <h3>+916201897803</h3>
                            </div>
                            <div className="both">
                                <img src="/images/home.svg"/>
                                <h3>Dhanbad,jharkhand India</h3>
                            </div>
                           </div>
                           <div className="line">
                           <div className="both">
                                <img src="/images/email.svg"/>
                                <h3>aimraan204@gmail.com</h3>
                            </div>
                           </div>
                           
                          
                           
                        </form>
                    </div>

                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
