import React, { useContext, useState } from 'react'
import { AuthContext } from './../../Context/AuthContext'
import userImg from '../../assets/doctor-img01.png'
import Bookings from './Bookings'
import ProfileSettings from './ProfileSettings'
// import UseFetchData from '../../Hooks/UseFetchData'

const MyAccount = () => {

  const { dispatch } = useContext(AuthContext)
  const [tab, setTab] = useState('bookings')

  // const {data:userData,loading,error}= UseFetchData(`api`);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto'>
        <div className='grid md:grid-cols-3 gap-10'>

          <div className='pb-[50px] px-[30px] rounded-md'>
            <div className='flex items-center justify-center'>
              <figure className='w-[100px] h-[100px] rounded-full border-2 border-solid border-primarycolor'>
                <img src={userImg} alt="" className='w-full h-full rounded-full' />
              </figure>
            </div>
            <div className='text-center mt-4'>
              <h3 className='text-[18px] leading-[30px] text-headingcolor font-bold'>Ail shahid</h3>
              <p className='text-textColor text-[15px] leading-6 font-medium '>example@gmail.com</p>
              <p className='text-textColor text-[15px] leading-6 font-medium '>Blood Type: <span className='ml-2 text-headingcolor text-[22px] leading-8'>O-</span></p>
            </div>
            <div className='mt-[50px] md:mt-[100px]'>
              <button onClick={handleLogout} className='w-full bg-[#181A1E] p-3 
            text-[16px] leading-7 rounded-md text-white'>Logout</button>
              <button className='w-full bg-red-600 mt-4 p-3 
            text-[16px] leading-7 rounded-md text-white'>Delete Account</button>
            </div>
          </div>

          <div className="md:col-span-2 md:px-[30px]">
            <div>
              <button onClick={() => setTab('bookings')} className={`${tab === 'bookings' && "bg-primarycolor text-white font-normal"} p-2 mr-2 px-5 rounded-md text-headingcolor font-semibold text-[16px] leading-7 border border-solid border-primarycolor`}>
                My Bookings
              </button>
              <button onClick={() => setTab('settings')} className={`${tab === 'settings' && "bg-primarycolor text-white font-normal"} py-2  px-5 rounded-md text-headingcolor font-semibold text-[16px] leading-7 border border-solid border-primarycolor`}>
                Profile Settings
              </button>
            </div>

            {
              tab === 'bookings' && <Bookings />
            }

            {
              tab === 'settings' && <ProfileSettings />
            }
          </div>

        </div>
      </div>
    </section>
  )
}

export default MyAccount