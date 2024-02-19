import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import  Home  from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import About from './pages/About'

export default function App() {
  return (
   <BrowserRouter>
   
    <Routes>

   
  <Route  path='/' element={<Home/>} />
  <Route path='signin' element={<SignIn/>}/>
  <Route  path='signup' element={<SignUp/>} />
  <Route path='dashboard' element={<Dashboard/>}/>
  <Route path='about' element={<About/>}/>


<Route/>



    </Routes>   
   </BrowserRouter>
  )
}
