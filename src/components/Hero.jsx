import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../banner-imag.png'; 
import BannerImagebg from '../bannerbgfull.png'; 
import BannerImage1 from '../banner1.png'; 
import BannerImage2 from '../banner2.png'; 
export default function Hero() {
  return (
    <div className='relative'>
        <div className='flex justify-between absolute top-0 w-full h-full -z-10'>
         <div className='left_col flex'>
         <img src={BannerImagebg} alt="Profile" className="w-full h-full" />
         </div>
        </div>

        <div className='flex relaive z-10 flex-wrap md:flex-nowrap gap-10 xl:gap-20 items-center max-w-[1460px] m-auto px-6 pt-[189px] pb-[17px]'>
            <div className='col_image'>
            <img src={BannerImage} alt="Profile" className="w-full h-auto" />
            </div>
            <div className='col_text'>
                <span className='flex font-Neue text-[30px] md:text-[90px] text-[#E1E0E5] leading-none  '>I’m a</span>
                <h1 className='text-[40px] mb-3 xl:text-[90px] font-Neue  text-[#0A0615]'>Web Developer</h1>
                <p className='mb-10 text-2xl text-[#A9A9AB] font-Neue '>100 % Html5 Bootstrap5 Templates Made By Noman.</p>
                <div className='flex flex-wrap sm:flex-nowrap gap-8'>
                    <Link to="/login" className="w-fit px-[32px] py-[12px] text-[15px] lg:text-[18px] flex gap-[10px] items-center font-medium hover:text-white text-primary hover:bg-featuretext  bg-white border  rounded-[42px] transition-all ease-in-out duration-700">
                                Get Started
                                </Link>
                    <Link to="/login" className="w-fit px-[32px] py-[12px]  text-[15px] lg:text-[18px] flex gap-[10px] items-center font-medium hover:text-white text-primary hover:bg-featuretext bg-white border   rounded-[42px] transition-all ease-in-out duration-700">
                                View Portfolio
                            </Link>
                </div>
            </div>
       </div>
          
             <div className="px-5 pb-[48px] max-w-[1460px] m-auto  flex flex-wrap gap-10 flex-col md:flex-row justify-end items-center pt-[27px]  text-white text-xl font-normal font-Poppins ">
               <div className="flex items-center flex-wrap gap-6 mt-4 md:mt-0">
                 <span className='text-primary text-xl'>FOLLOW US ON</span>
                 <div className="w-[97px] h-px bg-featuretext"></div>
                        <ul className='flex gap-3'>
                            <li> 
                                <Link
                                    to="/"
                                className="text-featuretext font-bold"
                                >
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
                            </svg>
                
                                </Link>
                            </li>
                            <li>
                            <Link
                                    to="/"
                                className="text-featuretext font-bold"
                                >
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
                                </svg>
                
                                </Link>
                            
                            </li>
                            <li>
                            <Link
                                    to="/portfolio"
                                className="text-featuretext font-bold"
                                >
                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
                                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                                    </svg>
                
                                </Link>
                            </li>
                        </ul>
                  </div>
             </div>
       
    </div>
  )
}
