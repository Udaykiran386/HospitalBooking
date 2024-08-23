import React from 'react'

const SilderPanel = () => {
  return (
    <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
        <div className='flex items-center justify-between'>
            <p className='text_para mt-0 font-semibold'>Ticket Price</p>
            <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingcolor font-bold'>
                500Dollor
            </span>
        </div>

        <div className='mt-[30px]'>
            <p className='text_para mt-0 font-semibold text-headingcolor'>
                Availble Time slots:
            </p>

            <ul className="mt-3">
                <li className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        Sunday
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        4:00pm - 9:30pm 
                    </p>
                </li>
                <li className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        friday
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        9:00am - 1:30pm 
                    </p>
                </li>
                <li className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        monday
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        11:00am - 6:30pm 
                    </p>
                </li>
            </ul>
        </div>
        <button className='btn px-2 w-full rounded-md'>Book Appointment</button>
    </div>
  )
}

export default SilderPanel