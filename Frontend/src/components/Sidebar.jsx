import { FiSettings, FiBookOpen, FiUser, FiDollarSign, FiAlertOctagon } from 'react-icons/fi'
import { RxDashboard, RxHome } from 'react-icons/rx'
import { useState } from 'react'

import { Link } from 'react-router-dom'
import { FaBars, FaCross } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'



const Sidebar = () => {
    const sidebarLinkStyles = 'flex gap-3 hover:bg-blue-700 cursor-pointer rounded-sm px-4 py-2 ease-in duration-300' 

    const [sidebar, setSidebar] = useState(false)
    const handleSidebar = () => {
        setSidebar(!sidebar)
    }
    return (
      
        <div className="  h-[100vh] bg-[#101924] px-5 fixed z-50 ">
            {sidebar ? <ImCross size={25} onClick={handleSidebar} className='absolute text-white cursor-pointer top-3 right-2' /> :
                <FaBars onClick={handleSidebar} size={25} className='absolute text-white cursor-pointer top-3 right-2' />}
         
            
          <div className="items-center gap-3 py-5 md:flex">
              <img className='w-16 md:w-20' src="../../public/logo.png" alt="" />
              
              <hr />
          </div>
          <div className='my-2'>
              <hr />
          </div>
          <div className="text-white ">
              <ul className="flex flex-col gap-5 font-bold ">
                    <Link to='/'><li className={sidebarLinkStyles} ><RxDashboard size={25} /><span className={`${sidebar ? 'flex' : 'hidden'}`}>Dashboard</span></li></Link>
                  <Link to='bookings/'><li className={sidebarLinkStyles}><FiBookOpen size={25} /><span className={`${sidebar ? 'flex' : 'hidden'}`}>Bookings</span> </li></Link>
                  <Link to='rooms/'><li className={sidebarLinkStyles}><RxHome size={25} /><span className={`${sidebar ? 'flex' : 'hidden'}`}>Rooms</span> </li></Link>
                  <Link to='customers/'> <li className={sidebarLinkStyles}><FiUser size={25} /> <span className={`${sidebar ? 'flex' : 'hidden'}`}>Tenants</span></li></Link>
                  <Link to='payment/' > <li className={sidebarLinkStyles}><FiDollarSign size={25} /><span className={`${sidebar ? 'flex' : 'hidden'}`}>Payments</span></li></Link>
                 
                  <li className={sidebarLinkStyles}><FiAlertOctagon size={25}/><span className={`${sidebar ? 'flex' : 'hidden'}`}>Reports</span></li>
                  <li className={sidebarLinkStyles}><FiSettings size={25} /><span className={`${sidebar ? 'flex' : 'hidden'}`}>Settings</span></li>
                 

              </ul>
          </div>
    </div>
  )
}

export default Sidebar