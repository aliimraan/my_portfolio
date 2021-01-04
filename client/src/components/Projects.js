import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import '../styles/Projects.css'
import Navbar from './Navbar'
import data from '../data'

export default function Projects() {
    const [blogs,blogsFn]=useState(data)

    const getProjects=(items)=>{

        return items.map((item,index)=>{
            const {id,title,image}=item
            return (
                <div className="project_box" key={index}>
                <Link className="anchor text-decoration-none" to={"/single-project/"+id}>
                    <img src={image}/>
                    <h5>{title}</h5>
                </Link>
           </div>
            )})
    }
    return (
        <div>
        <Navbar/>
            <div className="projects">
                <div className="container">
                    <div className="title">
                        my projects
                    </div>
                    <div className="project_area">
                    {getProjects(blogs)}
                    </div>
                </div>
            </div>
        </div>
    )
}
