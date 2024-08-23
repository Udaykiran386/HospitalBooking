import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const ServicesCard = ({item , index}) => {
    const{ name, desc, bgColor, textColor} = item ;
  return (
    <div className='py-[30px] px-3 lg:px-5'>
        <h2 className='text-[26px] leading-9 text-headingcolor font-[700]'>{name}</h2>
        <p className='text-[16px] leading-7 font-[400] text-textColor'>{desc}</p>

        <div className='flex items-center justify-between mt-[30px]'>
            <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid 
            border-[#000] mt-[30px] mx-auto flex item-center justify-center group hover:bg-primarycolor hover:border-none' style={{
                background:`${bgColor}`,
                color:`${textColor}`
            }}>
                <BsArrowRight className='group-hover:text-black w-6 h-5 mt-3'/>
            </Link>
            {/* <span className='w-[44px] h-[44px] flex justify-center items-center text-[18px] leading-[30px] '>

            </span> */}
        </div>
    </div>

  )
}

export default ServicesCard