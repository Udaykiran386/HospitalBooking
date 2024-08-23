import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [formData,setFormData] =useState({
    email:'',
    password:''
  })

  const handleInputChange = e=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  return (
    <section className='px-5 lg:px-0'>
      <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
        <h3 className='text-[22px] leading-9 font-bold mb-10 text-headingcolor'>
          Hello! <span className='text-primarycolor'>Welcome</span> Back
        </h3>

        <form className='py-4 lg:py-0'>
          <div className="mb-5">
            <input type="email" placeholder='Enter your Email' name='email' value={formData.email} onChange={handleInputChange} className='w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primarycolor text-[14px] leading-6 text-headingcolor placeholder:text-textColor  cursor-pointer' required/>
          </div>
          <div className="mb-5">
            <input type="password" placeholder='Enter your password' name='password' value={formData.password} onChange={handleInputChange} className='w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primarycolor text-[14px] leading-6 text-headingcolor placeholder:text-textColor  cursor-pointer' required/>
          </div>

          <div className='mt-7'>
            <button type='submit' className='btn w-full rounded-lg'>
              Login
            </button>
          </div>

          <p className='mt-5 text-textColor text-center'> 
            Don't have an account?{" "}
            <Link to='/register' className='text-primarycolor ml-1 font-bold'>Register</Link>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Login