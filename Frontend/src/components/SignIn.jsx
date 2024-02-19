import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState("")
  const [userData, setUserData] = useState({
    username: '',
    password: ''
  })

  const handleChange = (event) => {
    const {name, value} = event.target
    setUserData({
      ...userData,
      [name]: value
    })
  }


  const handleSubmit = async(event) => {
    event.preventDefault()

    try {
      const response = await fetch('http://localhost:8000/api/signin/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })

      if(response.ok) {
        console.log('login succesiful')
        navigate('/main/tenants')
        
      } else {
        console.log('server error while submitting data')
        setErrorMessage("User name or password is incorrect")
      }

    } catch(error) {
      console.log('An error occured while submitting data', error)
     
    }
  }


  useEffect(() => {
    setTimeout(() => {
      setErrorMessage("")
    }, 5000)
  })


  const loginStyles = {
    mainContainer : ' h-fit w-full flex items-center justify-center mt-5',
    subContainer: ' md:w-1/2 md:h-1/2 w-full h-full bg-slate-200 rounded-md p-5 flex flex-col ',
    signInHeader: ' font-bold text-center my-2 text-2xl',
    userName: ' flex items-start',
    userInput: ' border border-blue-100 mb-5 rounded-md p-2 outline-blue-100 w-full ',
    buttonStyle: ' border border-blue-950 mb-5 rounded-md py-1 text-white outline-black-100 px-6 bg-[#101924] w-28 ',
  }


  return (
    <div className={loginStyles.mainContainer}>
      <div className={loginStyles.subContainer}>

      <div className={loginStyles.signInHeader}>Sign In</div>

        <div className=' justify-center'>
            <img width={150}  src="/logo.png" alt="Logo" />
        </div>
        <form onSubmit={handleSubmit}>
            <p className={loginStyles.userName}>User Name</p>

            <input
             type='text' 
              name='username'
              value={userData.username}
              onChange={handleChange}
              className= {loginStyles.userInput}
              placeholder='Enter user Name'
            />


            <p className=' flex items-start'>Password</p>
            <input 
                type='password'
                name='password'
                value={userData.password}
                onChange={handleChange}
                className={loginStyles.userInput}
                placeholder='Enter password'
            />


            <button type='submit' className={loginStyles.buttonStyle}>Submit</button>
            </form>


            {errorMessage &&  <p className=' px-5 py-1 bg-red-400 rounded-md text-white'>{errorMessage}</p>}
           

            <a href="#" className=' flex items-start mb-5'>Forgot Password?</a>

            <p className=' flex items-start'>Don't have account?<Link to ='/signup' className=' text-blue-600'>Sign Up</Link></p>
                
                
            
      </div>
      
    </div>
  )
}

export default SignIn
