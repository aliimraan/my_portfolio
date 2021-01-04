import React,{Component} from 'react'
import '../styles/SingleProject.css'
import Navbar from './Navbar'
import data from '../data'
import {Link} from 'react-router-dom'


class SingleProject extends Component {
    constructor(){
        super()
        this.state={
            eachProject:[]
        }
        
    }
    componentDidMount(){
        const myId=this.props.match.params.id
         data.map(item=>{
            if(item.id==myId){
                return this.setState({
                    eachProject:item
                })
            }
        })
    }
   
    showTags=(el)=>{
        if(el===undefined){
            return
        }
        return el.map((item,index)=>{
            if(el===[]){
                return
            }else{
                return (
                    <h4>{item}</h4>
                )
            }

        })
    }
    showSS=(el)=>{
        if(el===undefined){
            return
        }
        return el.map((item,index)=>{
            if(el===[]){
                return
            }else{
                return (
                    <img src={item}/>
                )
            }

        })
    }

    render(){
   
    const {id,title,image,ss,impact,tags,desc}=this.state.eachProject
   
    return (
        <div>
        <Navbar/>
            <div className="single_project">
                <div className="container" id="div_to_print">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="image_section">
                                <img src={image}/>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="pro_section">
                                <div className="title_section">{title}</div>
                                <div className="desc_section">{desc}</div>
                                <div className="impact_section">impact {impact}</div>
                                <div className="tech_section">technologies used 
                                    {this.showTags(tags)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pro_banner">
                <div className="pro_header"><Link to="#" style={{textDecoration:'none',color:'#e4e0ea'}}>A live demo is better than thousand words</Link></div>
            </div>
            
            <div className="screen_shots">
                <div className="container">
                    <div className="photo_container">
                        <div className="gallary_header">some screenshoots</div>
                        <div className="photo_gallary">
                           {this.showSS(ss)}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )

   }
    
}

export default SingleProject