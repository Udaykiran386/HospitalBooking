// import React, { useContext, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import {AuthContext} from '../Context/AuthContext'

// const Login = () => {
//   const [formData,setFormData] =useState({
//     email:'',
//     password:''
//   })

//   const [loading,setLoading]=useState(false)
//   const navigate = useNavigate()

//   const {dispatch} = useContext(AuthContext);

//   const handleInputChange = e=>{
//     setFormData({...formData,[e.target.name]:e.target.value})
//   }

//   const submitHandler = async event =>{
//     event.preventDefault()
//     setLoading(true)
//     try {
//       const res = await fetch('https://fakestoreapi.com/products',{
//         method:'POST',
//         headers:{
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify(formData)
//       })
//       const result = await res.json()

//       if(!res.ok){
//         throw new Error(result.message)
//       }

//       dispatch({
//         type:'LOGIN_SUCCESS',
//         payload:{
//           user:result.data,
//           token:result.token,
//           role:result.role,
//         },
//       });

//       console.log(result,"login data")

//       setLoading(false)
//       toast.success(result.message)
//       navigate('/home')
//     } catch (error) {
//       toast.error(error.message)
//       setLoading(false)
//     }
//   }

//   return (
//     <section className='px-5 lg:px-0'>
//       <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
//         <h3 className='text-[22px] leading-9 font-bold mb-10 text-headingcolor'>
//           Hello! <span className='text-primarycolor'>Welcome</span> Back
//         </h3>

//         <form className='py-4 lg:py-0' onClick={submitHandler}>
//           <div className="mb-5">
//             <input type="email" placeholder='Enter your Email' name='email' value={formData.email} onChange={handleInputChange} className='w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primarycolor text-[14px] leading-6 text-headingcolor placeholder:text-textColor  cursor-pointer' required/>
//           </div>
//           <div className="mb-5">
//             <input type="password" placeholder='Enter your password' name='password' value={formData.password} onChange={handleInputChange} className='w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primarycolor text-[14px] leading-6 text-headingcolor placeholder:text-textColor  cursor-pointer' required/>
//           </div>

//           <div className='mt-7'>
//             <button type='submit' className='btn w-full rounded-lg'>
//               Login
//             </button>
//           </div>

//           <p className='mt-5 text-textColor text-center'> 
//             Don't have an account?{" "}
//             <Link to='/register' className='text-primarycolor ml-1 font-bold'>Register</Link>
//           </p>
//         </form>
//       </div>
//     </section>
//   )
// }

// export default Login



import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  // Handle input change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const submitHandler = async (event) => {
    event.preventDefault(); // Use `onSubmit` for the form
    setLoading(true);
    try {
      const res = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || 'Something went wrong!');
      }

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          user: result.user || formData.email, // Use email as a fallback if user isn't available
          token: result.token,
          role: result.role || 'user', // Fallback role
        },
      });

      setLoading(false);
      toast.success('Logged in successfully');
      navigate('/home');
    } catch (error) {
      toast.error(error.message || 'Login failed');
      setLoading(false);
    }
  };

  return (
    <section className='px-5 lg:px-0'>
      <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
        <h3 className='text-[22px] leading-9 font-bold mb-10 text-headingcolor'>
          Hello! <span className='text-primarycolor'>Welcome</span> Back
        </h3>

        <form className='py-4 lg:py-0' onSubmit={submitHandler}> {/* Corrected to onSubmit */}
          <div className="mb-5">
            <input
              type="email"
              placeholder='Enter your Email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primarycolor text-[14px] leading-6 text-headingcolor placeholder:text-textColor cursor-pointer'
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder='Enter your password'
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primarycolor text-[14px] leading-6 text-headingcolor placeholder:text-textColor cursor-pointer'
              required
            />
          </div>

          <div className='mt-7'>
            <button type='submit' className='btn w-full rounded-lg'>
              {loading ? 'Logging in...' : 'Login'} {/* Show loading state */}
            </button>
          </div>

          <p className='mt-5 text-textColor text-center'>
            Don't have an account?{' '}
            <Link to='/register' className='text-primarycolor ml-1 font-bold'>Register</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;


// import React, { useState } from 'react';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
// import { auth } from './FireBase';
// import SignupImg from '../assets/signup.gif';
// import avatarDoctor from '../assets/doctor-img02.png';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const AuthPage = () => {
//   const [isLogin, setIsLogin] = useState(true); 
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     name: '',
//     photo: null,
//     gender: '',
//     role: 'Patient'
//   });
//   const [error, setError] = useState(null); 
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileInputChange = (event) => {
//     const file = event.target.files[0];
//     console.log(file); 
//   };

//   const submitHandler = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     setError(null);

//     const { email, password } = formData;

//     try {
//       if (isLogin) {
//         const userCredential = await signInWithEmailAndPassword(auth, email, password);
//         console.log('Logged in:', userCredential.user);
//         navigate('/home'); // Redirect to home page after login
//       } else {
//         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//         console.log('Signed up:', userCredential.user);
//         // Optionally, redirect to home page or login page after signup
//         navigate('/home');
//       }
//     } catch (error) {
//       console.error(error);
//       setError(error.message);
//     }
//     setLoading(false);
//   };

//   const handleLogout = async () => {
//     const confirmation = window.confirm('Are you sure you want to logout?');
//     if (confirmation) {
//       try {
//         await signOut(auth);
//         setUser(null); // Clear user state
//         navigate('/'); // Redirect to login or landing page after logout
//       } catch (error) {
//         console.error('Error logging out:', error);
//         setError(error.message);
//       }
//     }
//   };

//   return (
//     <section className='px-5 xl:px-0'>
//       <div className='max-w-[1170px] mx-auto'>
//         <div className='grid grid-cols-1 lg:grid-cols-2'>
//           {!isLogin && (
//             <div className='hidden lg:block rounded-l-lg bg-primarycolor'>
//               <figure className='rounded-l-lg'>
//                 <img src={SignupImg} alt="" className='w-full rounded-l-lg' />
//               </figure>
//             </div>
//           )}

//           <div className={`rounded-l-lg ${isLogin ? '' : 'lg:pl-16'} py-10`}>
//             <h3 className='text-headingcolor text-[22px] leading-9 font-bold mb-10'>
//               {isLogin ? (
//                 <>Hello! <span className='text-primarycolor'>Welcome</span> Back</>
//               ) : (
//                 <>Create an <span className="text-primarycolor">account</span></>
//               )}
//             </h3>

//             <form onSubmit={submitHandler}>
//               {!isLogin && (
//                 <div className="mb-5">
//                   <input
//                     type="text"
//                     placeholder='Full Name'
//                     name='name'
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primarycolor text-[14px] leading-6 text-headingcolor placeholder:text-textColor cursor-pointer'
//                     required={!isLogin}
//                   />
//                 </div>
//               )}

//               <div className="mb-5">
//                 <input
//                   type="email"
//                   placeholder='Enter your Email'
//                   name='email'
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primarycolor text-[14px] leading-6 text-headingcolor placeholder:text-textColor cursor-pointer'
//                   required
//                 />
//               </div>

//               <div className="mb-5">
//                 <input
//                   type="password"
//                   placeholder='Enter your password'
//                   name='password'
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primarycolor text-[14px] leading-6 text-headingcolor placeholder:text-textColor cursor-pointer'
//                   required
//                 />
//               </div>

//               {!isLogin && (
//                 <>
//                   <div className='mb-5 flex items-center justify-between'>
//                     <label className='text-headingcolor text-[16px] leading-7 font-bold'>
//                       Are you a:
//                       <select
//                         name="role"
//                         value={formData.role}
//                         onChange={handleInputChange}
//                         className='text-textColor text-[15px] leading-7 font-semibold px-4 py-3 focus:outline-none'
//                       >
//                         <option value="patient">Patient</option>
//                         <option value="doctor">Doctor</option>
//                       </select>
//                     </label>

//                     <label className='text-headingcolor text-[16px] leading-7 font-bold'>
//                       Gender:
//                       <select
//                         name="gender"
//                         value={formData.gender}
//                         onChange={handleInputChange}
//                         className='text-textColor text-[15px] leading-7 font-semibold px-4 py-3 focus:outline-none'
//                       >
//                         <option value="">Select</option>
//                         <option value="male">Male</option>
//                         <option value="female">Female</option>
//                         <option value="other">Other</option>
//                       </select>
//                     </label>
//                   </div>

//                   <div className="mb-5 flex items-center gap-3">
//                     <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primarycolor flex items-center justify-center'>
//                       <img src={avatarDoctor} alt="" className='w-full rounded-full' />
//                     </figure>
//                     <div className='relative w-[130px] h-[50px]'>
//                       <input
//                         type="file"
//                         name='photo'
//                         id='customFile'
//                         accept='.jpg, .png, .jpeg'
//                         onChange={handleFileInputChange}
//                         className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
//                       />
//                       <label htmlFor="customFile" className='absolute top-0 left-0 w-full h-full flex items-center pl-3 py-[0.376px] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingcolor font-semibold rounded-lg truncate cursor-pointer'>
//                         Upload photo
//                       </label>
//                     </div>
//                   </div>
//                 </>
//               )}

//               <div className='mt-7'>
//                 <button type='submit' className='btn w-full rounded-lg' disabled={loading}>
//                   {loading ? 'Processing...' : isLogin ? 'Login' : 'Signup'}
//                 </button>
//               </div>

//               {error && <p className='text-red-500 text-center mt-5'>{error}</p>}

//               <p className='mt-5 text-textColor text-center'>
//                 {isLogin ? (
//                   <>
//                     Don't have an account?{" "}
//                     <span className='text-primarycolor ml-1 font-bold cursor-pointer' onClick={() => setIsLogin(false)}>
//                       Register
//                     </span>
//                   </>
//                 ) : (
//                   <>
//                     Already have an account?{" "}
//                     <span className='text-primarycolor ml-1 font-bold cursor-pointer' onClick={() => setIsLogin(true)}>
//                       Login
//                     </span>
//                   </>
//                 )}
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AuthPage;
