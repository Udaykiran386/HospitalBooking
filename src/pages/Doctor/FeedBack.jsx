import React, { useState } from 'react'
import avatar from '../../assets/avatar-icon.png'
import { formatDate } from '../../utile/formatDate'
import { AiFillStar } from 'react-icons/ai'
import FeedbackForm from './FeedbackForm'


const FeedBack = () => {

    const [showFeedbackForm,setshowFeedbackForm] = useState(false)

  return (
    <div>
        <div className='mb-[50px]'>
            <h4 className='text-[20px] leading-[30px] font-bold text-headingcolor mb-[30px]'>
                All Reviews (13)
            </h4>
            <div className='flex justify-between gap-10 mb-[30px] '>
                <div className='flex gap-3'>
                    <figure className='w-10 h-10 rounded-full'>
                        <img src={avatar} alt="" />
                    </figure>

                    <div>
                        <h5 className='text-[16px] leading-6 text-primarycolor font-bold'>uday kiran</h5>
                        <p className='text-[14px] leading-6 text-textColor'>{formatDate('10-29-2019')}</p>
                        <p
                         className='text_para mt-3 font-medium text-[15px]'>Good services, Highly recommened 👍
                        </p>
                    </div>
                </div>
                <div className='flex gap-1'>
                    {[...Array(5).keys()].map((_,index)=>(
                        <AiFillStar key={index} color='#0067FF'/>
                    ))}
                </div>
            </div>
        </div>
        {!showFeedbackForm && (<div className='text-center'>
            <button className='btn' onClick={()=>setshowFeedbackForm(true)}>Give Feedback</button>
        </div>)}
            
        {showFeedbackForm && <FeedbackForm/>}

    </div>
  )
}

export default FeedBack