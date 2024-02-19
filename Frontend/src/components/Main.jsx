import React from 'react'
import {Routes, Route} from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Tenants from './Tenants'

function Main() {
  return (
    <>
    <Sidebar />
    <Navbar />
    <div className=' ml-36 mx-4'>
    <Routes>
      <Route path='/tenants/' element={<Tenants />} />
    </Routes>
    </div>
   

    </>
  )
}

export default Main
