import React from 'react'
import { formatDate } from '../../utile/formatDate'

const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className='text-[20px] leading-[30px] text-headingcolor font-semibold flex items-center gap-2'>About of 
                <span className='text-purple-700 font-bold text-[24px] leading-9'>Mukesh Kumar</span>
            </h3>
            <p className='text_para'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure recusandae ducimus culpa beatae non, nam sequi explicabo ad. Ipsam veritatis minus facilis nemo tempore optio iste aliquid corrupti eum id.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dignissimos odio ab quis veniam sint praesentium explicabo ea. Similique libero doloribus odit quibusdam eius atque deserunt, adipisci velit magni porro!
            </p>
        </div>

        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-headingcolor font-semibold'>Education</h3>

            <ul className='pt-4 md:p-5'>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] '>
                    <div>
                        <span className='text-lime-500 text-[15px] leading-6 font-semibold'>
                            {formatDate('5-26-2003')} - {formatDate('3-3-2005')}
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>
                            PHD in Surgeon
                        </p>
                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                        New Apollo Hospital, New York. 
                    </p>
                </li>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] '>
                    <div>
                        <span className='text-lime-500 text-[15px] leading-6 font-semibold'>
                            {formatDate('04-04-1992')} - {formatDate('5-10-2003')}
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>
                            PHD in Surgeon
                        </p>
                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                        Apollo Hospital, India. 
                    </p>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default DoctorAbout