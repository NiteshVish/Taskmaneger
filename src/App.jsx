import React from 'react'
import { Route,Routes,BrowserRouter } from 'react-router-dom'

import Home from './Component/Home'
import Navbar from './Component/Navbar'
import Dashboard from './Component/Dashboard'
import Login from './Component/Login'
import Register from './Component/Register'
import Contact from './Component/Contact'
import About from './Component/About'
import Footer from './Component/Footer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import Apifetch from './assets/Practice/PracApifetch.jsx'
import Apipost from './Component/Apipost.jsx'


function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    {/* <PracApifetch/> */}
    {/* <Apipost/> */}
    <Routes>
      <Route path='/home' element={<Home/>}> </Route>
      <Route path='/dashboard' element={<Dashboard/>}> </Route>
      <Route path='/login' element={<Login/>}> </Route>
      <Route path='/register' element={<Register/>}> </Route>
      <Route path='/about' element={<About/>}> </Route>
      <Route path='/contact' element={<Contact/>}> </Route>
      
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
