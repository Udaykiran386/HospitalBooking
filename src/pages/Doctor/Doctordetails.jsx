import React, { useState } from 'react'
import doctorImg from '../../assets/doctor-img02.png'
import HiStart from '../../assets/Star.png'
import DoctorAbout from './DoctorAbout'
import FeedBack from './FeedBack'
import SilderPanel from './SilderPanel'


const Doctordetails = () => {
  const [tab,setTab] = useState('about')

  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto'>
        <div className='grid md:grid-cols-3 gap-[50px]'>
          <div className='md:col-span-2'>
            <div className='flex items-center gap-5'>
              <figure className='max-w-[200px] max-h[200px]'>
                <img src={doctorImg} alt="" className='w-full'/>
              </figure>

              <div>
                <span className='bg-primarycolor text-white py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded '>
                  Surgeon
                </span>

                <h3 className='text-headingcolor text-[22px] leading-9 mt-3 font-bold'>Mukesh kumar</h3>

                <div className='flex items-center gap-[6px]'>
                  <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingcolor'>
                    <img src={HiStart} alt="" /> 4.8
                  </span>
                  <span className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>
                    (128)
                  </span>
                </div>
                <p className='text_para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px]'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis alias dolore eligendi, 
                </p>
              </div>
            </div>

            <div className='mt-[50px] border-b border-solid border-[#0066ff34]'>
              <button 
                onClick={()=>setTab('about')}
                className={`${tab === 'about' && 'border-b-4 border-solid border-primarycolor'}  py-2 px-5 mr-5 text-[16px] leading-7 text-headingcolor font-semibold`}>
                About
              </button>
              <button
                onClick={()=>setTab('feedback')}
                className={`${tab === 'feedback' && 'border-b-4  border-solid border-primarycolor'}  py-2 px-5 mr-5 text-[16px] leading-7 text-headingcolor font-semibold`}>
                Feedback
              </button>
            </div>

            <div className='mt-[50px]'>
              {
                tab=== 'about' && <DoctorAbout/>
              }
              {
                tab=== 'feedback' && <FeedBack/>
              }
            </div>
          </div>
          <div>
            <SilderPanel/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Doctordetails
