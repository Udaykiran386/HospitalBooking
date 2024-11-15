import React, { useState } from 'react'
import SignupImg from '../assets/signup.gif'
import avatarDoctor from '../assets/doctor-img02.png'
import { Link,useNavigate } from 'react-router-dom'
import uploadImageToCloudinary from '../utile/uploadCloudinary'
import { toast } from 'react-toastify'
import { BiLoaderCircle } from 'react-icons/bi'

const Signup = () => {

  const [selectedFile,setSelectedFile] = useState(null)
  const [previewURL,setPreviewURL] = useState("")
  const[loading,setLoading]=useState(false)
  const [formData,setFormData] =useState({
    name:'',
    email:'',
    password:'',
    photo:selectedFile,
    gender:'',
    role:'Patient'  
  })

  const navigate = useNavigate()

  const handleInputChange = e=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleFileInputChange =async(event)=>{
    const file = event.target.files[0]
    
    const data = await uploadImageToCloudinary(file)
    

    setPreviewURL(data.url);
    setSelectedFile(data.url);
    setFormData({...formData,photo: data.url});

    // for the api
    
  }

  const submitHandler = async event =>{
    event.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('http://localhost:8080/account/save',{
        method:'POST',
        headers:{
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData)
      })
      const {message} = await res.json()
      console.log('response data : ',)

      if(!res.ok){
        throw new Error(message)
      }

      setLoading(false)
      toast.success(message)
      navigate('/login')
    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }

  return (
    <section className='px-5 xl:px-0'>
      <div className='max-w-[1170px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>

          <div className='hidden lg:block rounded-l-lg bg-primarycolor'>
            <figure className='rounded-l-lg'>
              <img src={SignupImg} alt="" className='w-full rounded-l-lg' />
            </figure>
          </div>


          <div className='rounded-l-lg lg:pl-16 py-10'>
            <h3 className='text-headingcolor text-[22px] leading-9 font-bold mb-10'>
              Create an <span className="text-primarycolor">account</span>
            </h3>

            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input 
                  type="text" 
                  placeholder='Full Name' 
                  name='name' 
                  value={formData.name}
                  onChange={handleInputChange}
                  className='w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primarycolor text-[14px] leading-6 text-headingcolor placeholder:text-textColor  cursor-pointer' 
                  required
                />
                <input 
                  type="email" 
                  placeholder='Enter your Email' 
                  name='email' 
                  value={formData.email}
                  onChange={handleInputChange}
                  className='w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primarycolor text-[14px] leading-6 text-headingcolor placeholder:text-textColor  cursor-pointer' 
                  required
                />
                <input 
                  type="password" 
                  placeholder='Enter your password' 
                  name='password' 
                  value={formData.password}
                  onChange={handleInputChange}
                  className='w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primarycolor text-[14px] leading-6 text-headingcolor placeholder:text-textColor  cursor-pointer' 
                  required
                />
              </div>
              
              <div className='mb-5 flex items-center justify-between'>
                <label 
                  htmlFor=""
                  className='text-headingcolor text-[16px] leading-7 font-bold'
                >
                  Are you a:
                  <select 
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className='text-textColor text-[15px] leading-7 font-semibold px-4 py-3 focus:outline-none'
                  >
                    <option value="">Select</option>
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>

                </label>
                <label 
                  htmlFor=""
                  className='text-headingcolor text-[16px] leading-7 font-bold'
                >
                  Gender:
                  <select 
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className='text-textColor text-[15px] leading-7 font-semibold px-4 py-3 focus:outline-none'
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>

                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">

                { selectedFile && (<figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primarycolor flex items-center justify-center overflow-hidden'>
                  <img src={previewURL} alt="" className='w-full rounded-full' />
                </figure>)}


                <div className='relative w-[130px] h-[50px] '>
                  <input type="file"  name='photo'  id='customFile' accept='.jpg, .png, .jpeg' onChange={handleFileInputChange} className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'/>
                  <label htmlFor="customFile" className='absolute top-0 left-0 w-full h-full flex items-center 
                  pl-3 py-[0.376px] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingcolor font-semibold rounded-lg truncate cursor-pointer'>Upload photo</label>
                </div>
              </div>


               <div className='mt-7'>
              <button disabled={loading && true} type='submit' className='btn w-full rounded-lg'>
                {loading ? "Loading..." : 'Signup'}
              </button>
              </div>

              
              
              <p className='mt-5 text-textColor text-center'> 
                Already have an account?
                <Link to='/login' className='text-primarycolor ml-1 font-bold'>Login</Link>
              </p>
          </form>
              
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup


// import React from 'react'

// const Signup = () => {
//   return (
//     <div>Signup</div>
//   )
// }

// export default Signup