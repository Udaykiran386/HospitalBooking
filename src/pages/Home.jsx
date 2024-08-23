import React from 'react';
import doctorImage from '../assets/doctors-nurses.jpg';
import iconHome from '../assets/icon-home.jpeg';
import Location  from '../assets/location.jpeg';
import Calender from '../assets/calaender.png';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import About from '../components/About/About';
import ServicesList from '../components/Services/ServicesList';
import doctor2Image from '../assets/feature-img.png';
import DoctorList from '../components/Doctors/DoctorList';
import imgFaq from '../assets/faq-img.png'
import FaqList from '../components/Faq/FaqList';
// import Testimonial from '../components/Testimonial/Testimonial';



const Home = () => {
  return (
    <>
      
        <section className='hero-section pt-[60px] 2xl:h-[800px]' id='hero'>
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] justify-between items-center">
              <div>
                <div className='lg:w-[570px]'>
                  <h2 className='text-[25px] leading-[35px] text-headingcolor font-[500] md:text-[50px] 
                  md:leading-[60px]'>Find The Right <span className='text-primarycolor'>Doctor</span> & Book Appointment <span className='text-primarycolor'>For You</span></h2>
                  <p className='text_para'>Use our search to get connected with the expert care you</p>
                  <p>Call To Schedule 47499 83722</p>

                  <button className='btn'>Book NOW!</button>
                </div>
                <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 
                lg:gap-[30px]'>
                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingcolor'>30+</h2>
                    <span className='w-[100px] h-2 bg-yellowcolor rounded-full block mt-[-14px]'></span>
                    <p className='text_para'>Years of Experience</p>
                  </div>
                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingcolor'>15+</h2>
                    <span className='w-[100px] h-2 bg-purplecolor rounded-full block mt-[-14px]'></span>
                    <p className='text_para'>Clinic location</p>
                  </div>
                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingcolor'>100%</h2>
                    <span className='w-[100px] h-2 bg-irisBluecolor rounded-full block mt-[-14px]'></span>
                    <p className='text_para'>Patient Satisfaction</p>
                  </div>

                </div>
              </div>
            
              
              <div className="flex gap-[30px] justify-end">
                <div>
                  <img src={doctorImage} alt="doctorimage" className='w-full rounded-2xl'/>
                </div>
                {/* <div className='mt-[30px]'>
                  <img src={doctor1Image} alt="" className='w-full mb-[30px]'/>
                  <img src={doctor2Image} alt="" className='w-full'/>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='container'>
            <div className='lg:w-[470px] mx-auto'>
                  <h2 className='heading text-center'>
                    Providing the best medical services
                  </h2>
                  <p className='text_para text-center'>
                    World-class care for everyone. Our health System offers unmatched, expert health care.
                  </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] 
            lg:mt-[55px]">

              <div className='py-[30px] px-5'>
                  <div className='flex items-center justify-center'>
                    <img src={iconHome} alt="" />
                  </div>
                  <div className='mt-[30px]'>
                    <h2 className='text-[26px] leading-9 text-headingcolor ml-[100px] font-[700]'>
                      Find a Doctor
                    </h2>
                    <p className='text-[16px] leading-7 text-textColor font[400] mt-4 text-center'>
                      World-class care for everyone. Our health System offers
                      unmatched, expert health care. Form lab to Clinic.
                    </p>
                    <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid 
                    border-[#181A1E] mt-[30px] mx-auto flex item-center justify-center group hover:bg-primarycolor hover:border-none'>
                      <BsArrowRight className='group-hover:text-white w-6 h-5 mt-3'/>
                    </Link>
                  </div>
              </div> 

              <div className='py-[30px] px-5'>
                  <div className='flex items-center justify-center'>
                    <img src={Location} alt="" />
                  </div>
                  <div className='mt-[30px]'>
                    <h2 className='text-[26px] leading-9 text-headingcolor ml-[100px] font-[700]'>
                      Find Location
                    </h2>
                    <p className='text-[16px] leading-7 text-textColor font[400] mt-4 text-center'>
                      World-class care for everyone. Our health System offers
                      unmatched, expert health care. Form lab to Clinic.
                    </p>
                    <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid 
                    border-[#181A1E] mt-[30px] mx-auto flex item-center justify-center group hover:bg-primarycolor hover:border-none'>
                      <BsArrowRight className='group-hover:text-white w-6 h-5 mt-3'/>
                    </Link>
                  </div>
              </div> 


              <div className='py-[30px] px-5'>
                  <div className='flex items-center justify-center'>
                    <img src={Calender} alt="" width={220}  />
                  </div>
                  <div className='mt-[30px]'>
                    <h2 className='text-[26px] leading-9 text-headingcolor ml-[70px] font-[700]'>
                      Book Appointment
                    </h2>
                    <p className='text-[16px] leading-7 text-textColor font[400] mt-4 text-center'>
                      World-class care for everyone. Our health System offers
                      unmatched, expert health care. Form lab to Clinic.
                    </p>
                    <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid 
                    border-[#181A1E] mt-[30px] mx-auto flex item-center justify-center group hover:bg-primarycolor hover:border-none'>
                      <BsArrowRight className='group-hover:text-white w-6 h-5 mt-3 '/>
                    </Link>
                  </div>
              </div> 

            </div>
          </div>
        </section>

        <About/>

        <section>
          <div className="container">
            <div className='xl:w-[470px] mx-auto'>
              <h2 className='heading text-center'>Our Medical Services</h2>
              <p className='text_para text-center'>
                World-class care for everyone. Our health System offers unmatched, expert health care.
              </p>
            </div>

            <ServicesList />
          </div>
        </section>

        <section>
          <div className='container'>
            <div className='flex items-center justify-between flex-col lg:flex-row'>

              <div className='xl:w-[670px]'>
                <h2 className='heading'>Get virtual treatment <br /> anytime.</h2>
                <ul className='pl-4'>
                  <li className='text_para'>
                    1. Schedule the Appointment directly.
                  </li>
                  <li className='text_para'>
                    2. Search for your physician here, and contact their offices.
                  </li>
                  <li className='text_para'>
                    3. View our physicians who are accepting new Patients, use the online Scheduling tool to select an Appointment time.
                  </li>
                </ul>
                <Link to='/'><button className='btn'>Learn More!</button></Link>
              </div>

              <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
                  <img src={doctor2Image} className='w-3/4' alt="" />

                  <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left:0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-[6px] lg:gap-3'>
                        <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingcolor font-[600]'>
                          Tue, 24
                        </p>
                        <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]'>
                          10:00
                        </p>
                      </div>
                      <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowcolor rounded py-1 px-[6px] lg:py-3 lg:px-[9px] text-white'>
                        <i class="fa fa-video-camera" aria-hidden="true"></i>
                      </span>
                    </div>

                    <div className='w-[65px] lg:w-[96px] bg-purple-300 py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-purple-700 font-[500] mt-2 lg:mt-4 rounded-full'>
                      Consultation
                    </div>

                    <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
                      <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                      <h5 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingcolor'>Williom Henry</h5>
                    </div>
                  </div>
              </div>
            </div> 
          </div>
        </section>

        <section>
          <div className='container'>
            <div className='xl:w-[470px] mx-auto'>
                <h2 className='heading text-center'>Our Great Doctors</h2>
                <p className='text_para text-center'>
                  World-class care for everyone. Our health System offers unmatched, expert health care.
                </p>
            </div>

            <DoctorList/>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-0">
              <div className='w-1/2 hidden md:block'>
                  <img src={imgFaq} alt="" />
              </div>

              <div className='w-full md:w-1/2'>
                  <h2 className='heading'>
                    Most Questions by our Beloved Patient
                  </h2>

                  <FaqList/>
              </div>
            </div>
          </div>
        </section>


        {/* <section>
          <div className="container">
            <div className='xl:w-[470px] mx-auto'>
                <h2 className='heading text-center'>What our patients say</h2>
                <p className='text_para text-center'>
                  World-class care for everyone. Our health System offers unmatched, expert health care.
                </p>
            </div>
            
            <Testimonial/>
          </div>
        </section> */}
    </>
  )
}

export default Home