import React from 'react'
import { Button } from 'react-bootstrap';


function Login() {
    const CLickhandle=()=>{}
  return (
   
    <div>
    <>
    <h1>Please login</h1>
    <form>
    <input type='text'/>
    <br/>
    <br/>

    <input type='text' />
    <br/>
    <br/>

    <Button variant="info" onClick={CLickhandle}>Submit </Button>{' '}
    <br/>

    </form>
   </>
    </div>
  )
}

export default Login
