import React from 'react'
import context from '../Store/Context'
import { useContext } from 'react'
import {useParams} from 'react-router-dom'

function Display() {
  const data =useContext(context)
  const {id}=useParams()


  const filtereddata=data.text.filter((item)=>
  item.id===parseInt(id))
  
    return (
    <div>
    {filtereddata.map((item)=>(
        <div key={item.id}>
        <h1>{item.Heading}</h1>
        <p>{item.Blog}</p>
        </div>
    ))}
      
   </div>
  )
}

export default Display
