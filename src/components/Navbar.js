import React from 'react'
import logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';


const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsloggeIn = props.setIsloggeIn

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto gap-x-2'>

      <Link to="/">
        <img src={logo} alt='logo' width={160} height={32} loading='lazy'/>
      </Link>
      <nav>
        <ul className='flex gap-x-6 text-richblack-100 ' >
          <li>
           <Link to="/" className='hover:text-orange-700 hover:underline'>Home</Link>
          </li>
          <li>
            <Link to="/about" className='hover:text-orange-700 hover:underline'>About</Link>
          </li>
          <li>
            <Link to="/contact" className='hover:text-orange-700 hover:underline'>Contact</Link>
          </li>

        </ul>
      </nav>

      {/* Login - SingUp - LogOut - Dashboard each button is releted to login value */}
      <div className='flex iteams-center gap-x-4'>
        { !isLoggedIn && //login visbile when the condtion is login nsel) or !isLoggIn means jb mera login nhi heyhey true zl tr show the login button
          <Link to="/login">
            <button className='bg-richblack-800  text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700 hover:text-orange-700 ' >
              Login
            </button>
          </Link>
        }
         { !isLoggedIn && //visble singup button when login user not login
          <Link to="/signup">
            <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700 hover:text-orange-700 '  >
              SingUp
            </button>
          </Link>
        }
        { isLoggedIn && //visbile logout button when user is presnet or loign kel asel teva visble login button
          <Link to="/">
            <button onClick={() =>{
              setIsloggeIn(false)
              toast.success("Logged Out")
            }}
            className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700' >
              Log Out
            </button>
          </Link>
        }
        { isLoggedIn && //visbile dashborad button when user is login
          <Link to="/dashboard">
            <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700' >
              Dashboard
            </button>
          </Link>
        }

      </div>


    </div>
  )
}

export default Navbar