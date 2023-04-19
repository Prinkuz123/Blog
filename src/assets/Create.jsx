import React,{useContext,useRef} from 'react'
import context from '../Store/Context'
import {useNavigate}from "react-router-dom"

function Create() {
    const data= useContext(context)
    const inputRef=useRef(null)
    const Navigate=useNavigate()
    const {text,settext}=data

    const handlesubmit=()=>{
        const Heading=inputRef.current.Heading.value;
        const Blog=inputRef.current.Blog.value;
        const id=Math.floor(Math.random()*1000)
        settext([...text,{Heading,Blog,id}])
        Navigate("/list")

    }
  return (
    <div>
    <form ref={inputRef} onSubmit={(e)=>e.preventDefault()}>
    <label>Heading</label>
    <input type='text' name='Heading' />
    <br/>
    <br/>
    <label>Blog</label>
    <input type='text' name='Blog'/>
    <br/>
    <br/>
    <button onClick={handlesubmit}>Submit</button>
    </form> 


    </div>
  )
}

export default Create
