import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'
import { Route, Routes } from 'react-router-dom'

function App() {
 

  return (
    <>
    <Nav />
    <Routes>
      <Route path="about/" element={<About />} />
      <Route path="contact/*" element={<Contact />} />
    </Routes >
     
    </>
  )
}

export default App
