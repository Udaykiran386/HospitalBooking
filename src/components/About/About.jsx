import React from 'react'
import doctor1Image from '../../assets/about.png';
import doctor1card from '../../assets/about-card.png';
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">

          <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
            <img src={doctor1Image} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={doctor1card} alt="" />
            </div>
          </div>


          <div className="w-full lg:w-1/2 xl:w-[670px] mr-46 order:1 lg:order-2 ">
            <h2 className='heading'>Proud to be one of the nations best</h2>

            <p className='text_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus pariatur labore vero blanditiis deleniti incidunt quae? Quas necessitatibus voluptate facilis ex tenetur dolor. Voluptate laudantium placeat delectus accusamus ipsum rerum.</p>
            <p className="text_para mt-[30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem iste repellat est distinctio eos aliquam dolorum veniam cumque harum sapiente cupiditate voluptate, eveniet odit soluta repudiandae doloribus facere ipsa molestiae.</p>

            <Link to='/'>
              <button className='btn'>Learn More!</button>
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default About
