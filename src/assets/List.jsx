import React,{useContext} from 'react'
import context from '../Store/Context'
import {useNavigate} from "react-router-dom"
import './Style.css'

function List() {

    const data=useContext(context)
    const {text}=data
    const Navigate=useNavigate()
   


  return (
    <div >
      <ul className='ul'>
      {data.text.map((item,index)=>{return(
        <div key={index}>
        <li><h1 onClick={()=>{Navigate(`/list/${item.id}`)}}>{item.Heading}</h1></li></div>
      )})}
      
      
      </ul>
    </div>
  )
}

export default List
