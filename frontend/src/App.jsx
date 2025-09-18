import { useState } from 'react'
import Navbar from '../src/components/Navbar'
import {useLocation} from 'react-router-dom'
import './App.css'

function App() {

  const isOwnerPath = useLocation().pathname.includes("owner");


  return (
    <div>
      {!isOwnerPath && <Navbar/>}
    </div>
  )
}

export default App
