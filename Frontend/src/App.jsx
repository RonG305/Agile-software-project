import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' font-Inter'>
      <BrowserRouter>
      
          <Routes>
            <Route path='/' element={<SignIn />}/>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/main/*'  element={<Main />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
