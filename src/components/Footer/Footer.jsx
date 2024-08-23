import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiFillYoutube,AiFillGithub,AiOutlineInstagram } from 'react-icons/ai'


const socialLinks =[
  {
    path:"https://www.youtube.com",
    icon:<AiFillYoutube className='group-hover:text-white w-4 h-5'/>
  },
  {
    path:"https://www.github.com",
    icon:<AiFillGithub className='group-hover:text-white w-4 h-5'/>
  },
  {
    path:"https://www.instagram.com",
    icon:<AiOutlineInstagram className='group-hover:text-white w-4 h-5'/>
  },
  {
    path:"https://www.linkedin.com",
    icon:<RiLinkedinFill className='group-hover:text-white w-4 h-5'/>
  },  
];

const quickLink01 = [
  {
    path:'/home',
    display:"Home"
  },
  {
    path:'/',
    display:"About Us"
  },
  {
    path:'/services',
    display:"Services"
  },
  {
    path:'/',
    display:"Blog"
  },
];

const quickLink02 = [
  {
    path:'/find-a-doctor',
    display:"Find a Doctor"
  },
  {
    path:'/',
    display:"Request an Appointment"
  },
  {
    path:'/',
    display:"Find a Loction"
  },
  {
    path:'/',
    display:"Get an Opinion"
  },
];

const quickLink03 =[
  {
    path:'/',
    display:"Donate"
  },
  {
    path:'/constact',
    display:"Constact Us"
  },
];


const Footer = () => {

  const year =new Date().getFullYear();

  return (
    <footer className='pb-16 pt-10 bg-slate-200'>
      <div className='container'>
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          <div>
            <img src={Logo} alt="" />
            <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
              Copyright © {year} devolped by Mukesh kumar all right reserved.
            </p>

            <div className='flex items-center gap-3 mt-4'>
              {socialLinks.map((link,index) =>(
                <Link to={link.path} key={index} className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primarycolor hover:border-none'>
                  {link.icon}
                </Link>
              ))}
            </div>

          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingcolor'>Quick Link</h2>

            <ul>
              {quickLink01.map((item,index)=>(
                <li key={index} className='mt-4' >
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingcolor'>I Want to:</h2>

            <ul>
              {quickLink02.map((item,index)=>(
                <li key={index} className='mt-4' >
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingcolor'>Support</h2>

            <ul>
              {quickLink03.map((item,index)=>(
                <li key={index} className='mt-4' >
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer