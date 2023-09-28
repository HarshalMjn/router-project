import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confrimPassword:""
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfrimPassword, setShowConfrimPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");

    function changeHandler(event) {

        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();
       if(formData.password !== formData.confrimPassword) {
        toast.error("Passwords do not match");
        return
       }

       setIsLoggedIn(true);
       toast.success("Account Created")
       const accountData = {
         ...formData
       };

       const finalData = {
        ...accountData,
        accountType
       }


       console.log("Printing fina; account data");
       console.log(finalData);

       navigate("/dashboard");

    }
    

  return (
    <div>
        {/* student-Instructor tab */}
        <div
        className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max '>

            <button
            className={`${accountType === "student" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=> setAccountType("student")}>
                Student
            </button>

            <button
            className={`${accountType === "instructor" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setAccountType("instructor")}>
                Instructor
            </button>
        </div>


        <form onSubmit={submitHandler} className='mt-'>
            {/* firstName and lastName */}
            <div className='flex sm:gap-x-6 justify-between h-full mt-[20px]'>

               <label>
                 <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'>First Name<sup className='text-pink-200'>*</sup></p>
                 <input 
                  required
                  type="text"
                  name="firstName"
                  onChange={changeHandler}
                  placeholder="Entre First Name"
                  value={formData.firstName}
                  className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                  />
                </label>

               <label>
                 <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'>Last Name<sup className='text-pink-200'>*</sup></p>
                 <input 
                  required
                  type="text"
                  name="lastName"
                 onChange={changeHandler}
                 placeholder="Entre Last Name"
                 value={formData.lastName}
                 className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                 />
               </label>

            </div>
            {/* email Add */}
            <div className=' mt-[20px]'>
            <label className='w-full ' >
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'>Email Address<sup className='text-pink-200'>*</sup></p>
                <input 
                 required
                 type="email"
                 name="email"
                 onChange={changeHandler}
                 placeholder="Entre Email Address"
                 value={formData.email}
                 className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
            </label>

            </div>
         

            {/* createPassword and confrim Password */}

            <div className='w-full flex sm:gap-x-4  justify-between  mt-[20px]'>

               <label className=' w-full relative'>
                 <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]' >Create Password<sup className='text-pink-200'>*</sup></p>
                 <input 
                 required
                 type={showPassword ? ("text") : ("password")}
                 name="password"
                 onChange={changeHandler}
                 placeholder="Entre Password"
                 value={formData.password}
                 className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                 />
                  <span  className='absolute right-3 top-[38px] cursor-pointer'
                   onClick={() =>  setShowPassword((prev) => !prev)}>  {/*icon vr click teva ek task kryc showPassword change  jr old value is ture tr tila false vice versa */}
                   {showPassword ? 
                   (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : 
                   (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                  </span>
               </label>

               
               <label className=' w-full relative'>
                  <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'>Confrim Password<sup className='text-pink-200'>*</sup></p>
                 <input 
                  required
                  type={ showConfrimPassword ? ("text") : ("password")}
                  name="confrimPassword"
                  onChange={changeHandler}
                  placeholder="Confrim password"
                  value={formData.confrimPassword}
                  className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                 />
                  <span className='absolute right-3 top-[38px] cursor-pointer'
                  onClick={() =>  setShowConfrimPassword((prev) => !prev)}>  {/*icon vr click teva ek task kryc showPassword change  jr old value is ture tr tila false vice versa */}
                   {showConfrimPassword ? 
                   (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : 
                   (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                  </span>
                </label>

            </div>

            <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                Create Account
            </button>
            
        </form>
    </div>
  )
}

export default SignupForm