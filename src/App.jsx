
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import context from './Store/Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import{Routes,Route} from 'react-router-dom'
import Create from './assets/Create';
import List from './assets/List';
import Display from './assets/Display';

function App() {
 const [createtext,setcreatetext]=useState('')
 const state={
  text:createtext,
settext:setcreatetext}


 

  return (
    <div className="App">
 <context.Provider value={state}>
 <Routes>
 <Route path='/' element={<Create/>}/>
 <Route path='list' element={<List/>}/>
 <Route path='list/:id' element={<Display/>}/>
 
 </Routes>
 </context.Provider>
    </div>
  )
}

export default App
