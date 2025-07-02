import React from 'react'
import { Link } from 'react-router-dom'
import footerLogo from '../footer logo.png'; 
export default function Footer() {
  return (
    <footer className="bg-[#0B061F] text-white pt-[64px] pb-[37px] px-5">
      <div className='max-w-[1460px] m-auto'>
      <div className="max-w-[1350px]  flex flex-wrap gap-8 justify-between pb-[73px] ">
            
            {/* Logo and About */}
            <div className='max-w-[321px]'>
              <div className="flex max-w-[321px] mb-[28px]">
                {/* Replace src with your actual logo if needed */}
                <img src={footerLogo} alt="Profile" className="w-full h-auto" />
              </div>
              <p className="text-white text-xl font-normal font-Poppins ">
                Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing.
              </p>
            </div>

            {/* Sent Mail */}
            <div className='pt-[22px]'>
              <h3 className="text-2xl font-semibold mb-[48px] font-Poppins">SENT MAIL</h3>
              <p className="text-white text-xl font-normal font-Poppins ">Seemab@info.com</p>
              <p className="text-white text-xl font-normal font-Poppins  mt-6">Noman@info.com</p>
            </div>

            {/* Make a Call */}
            <div className='pt-[22px]'>
              <h3 className="text-2xl font-semibold mb-[48px] font-Poppins">MAKE A CALL</h3>
              <p className="text-white text-xl font-normal font-Poppins ">‪+923343546567‬</p>
              <p className="text-white text-xl font-normal font-Poppins  mt-4">‪+923343546567‬</p>
            </div>

            {/* Get in Touch */}
            <div className='pt-[22px]'>
              <h3 className="text-2xl font-semibold mb-[48px] font-Poppins">GET IN TOUCH</h3>
              <p className="text-white text-xl font-normal font-Poppins ">6th Road Rawalpindi</p>
            </div>

          </div>

      </div>
        {/* Bottom Bar */}
      <div className=" max-w-[1460px] m-auto border-t border-[#333333]  flex flex-wrap gap-10 flex-col md:flex-row justify-between items-center pt-[27px]  text-white text-xl font-normal font-Poppins ">
        <p>All Rights Reserve</p>

        <div className="flex items-center flex-wrap gap-6 mt-4 md:mt-0">
          <span>FOLLOW US ON</span>
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
    </footer>

  )
}
