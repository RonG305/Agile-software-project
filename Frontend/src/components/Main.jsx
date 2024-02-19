import React from 'react'
import {Routes, Route} from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

function Main() {
  return (
    <>
    <Sidebar />
    <Navbar />
    <Routes>
     
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<SignIn />} />
    </Routes>

    </>
  )
}

export default Main
