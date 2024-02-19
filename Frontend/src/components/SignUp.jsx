import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState("")

  const [userData, setUserData] = useState({
    username : '',
    first_name: '',
    last_name: '',
    email: '', 
    password: '', 
    password2: '',
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
        const response = await fetch(`http://localhost:8000/api/signup/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(userData)

        })

        if(response.ok) {
            console.log("created succesifully")
            navigate('/')
        } else {
            console.log("An error occured while submitting data to the server")
            setErrorMessage("password 1 and password 2 did not match")           
        }

    } catch(error) {
        console.log('An error occured while submitting data')
        
    }
}


    const loginStyles = {
      mainContainer : ' h-fit w-full flex items-center justify-center mt-5',
      subContainer: ' md:w-1/2 md:h-1/2 w-full h-full bg-slate-200 rounded-md p-5 flex flex-col ',
      signInHeader: ' font-bold text-center my-2 text-2xl',
      userName: ' flex items-start',
      userInput: ' border border-blue-100 mb-5 rounded-md p-2 outline-blue-100 w-full ',
      buttonStyle: ' border border-blue-950 mb-5 rounded-md py-1 text-white outline-black-100 px-6 bg-[#101924] w-28 ',
      emailStyle: 'border border-blue-100 mb-5 rounded-md p-2 outline-blue-100 w-full'
    }
  
  
    return (
      <div className={loginStyles.mainContainer}>
        <div className={loginStyles.subContainer}>
  
        <div className={loginStyles.signInHeader}>Sign Up</div>
  
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


               <p className={loginStyles.userName}>First Name</p>
  
              <input
               type='text' 
               name='first_name'
               value={userData.first_name}
               onChange={handleChange}
                className= {loginStyles.userInput}
                placeholder='Enter First Name'
              />



               <p className={loginStyles.userName}>Last Name</p>
  
              <input
               type='text' 
               name='last_name'
               value={userData.last_name}
               onChange={handleChange}
                className= {loginStyles.userInput}
                placeholder='Enter last Name'
              />

              <p className={loginStyles.userName}>Email</p>

              <input type="email" 
              name='email'
              value={userData.email}
              onChange={handleChange}
              className={loginStyles.userInput}
              placeholder='Enter email'
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

              <p className=' flex items-start'>Confirm Password</p>
              <input 
                  type='password'
                  name='password2'
                  value={userData.password2}
                  onChange={handleChange}
                  className={loginStyles.userInput}
                  placeholder='Confirm password'
              />
  
                <p className=' flex items-start'>Have account?<Link to ='/' className=' text-blue-600'>Sign In</Link></p>
              <button type='submit' className={loginStyles.buttonStyle}>Submit</button>

              </form>
              
        </div>
        
      </div>
    )
  }
  
export default SignUp
