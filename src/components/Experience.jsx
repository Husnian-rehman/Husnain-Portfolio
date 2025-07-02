import React from 'react'
import { Link } from 'react-router-dom'
import experience1 from '../experience 1.png'; 
import experience2 from '../experience 2.png'; 
import experience3 from '../experience 3.png'; 
export default function Experience() {
  return (
    <section className="py-12">
      <div className='max-w-[1460px] m-auto px-5'>
            {/* Header */}
            <div className="max-w-[1301px] flex flex-wrap gap-5 justify-between items-start mb-10">
                <div>
                    <span className="text-xl font-medium text-featuretext bg-featurebg px-8 py-3 rounded-[42px] mb-6 inline-block  border border-secondry">
                    EXPERIENCE
                    </span>
                    <h2 className="text-[40px] max-w-[441px] font-bold mt-4">Explore My Design Journey</h2>
                </div>
                <div className="max-w-[486px] ">
                    <p className='mb-[28px] text-xl font-Poppins font-normal'>
                    Over the past 4+ years, I've had the opportunity to work on a wide range of design
                    projects, collaborating with diverse teams and clients to bring creative visions to life.
                    </p>
                    <div className='flex items-center gap-1'>
                    <Link
                            to="/"
                            className="text-[22px] text-description font-semibold font-Poppins  underline "
                        >
                            Book a Call  
                        </Link>
                        <span className='text-[22px] text-description font-semibold font-Poppins'>↗</span>
                    </div>
                </div>
            </div>

            {/* Experience Item 1 */}
            <div className="flex flex-wrap gap-6 justify-between items-start mb-6 pb-6 border-b border-[#F7F6FB]">
                <div>
                    <h3 className="font-medium text-[22px] mb-1  text-primary ">Creative Minds, New York, USA</h3>
                    <p className="flex gap-2 items-center text-lg font-normal font-Poppins text-description"> <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.21339 8.57685L15 7.50936L9.17607 6.51687L10.7679 4.21345L8.53936 5.80528L7.49069 0L6.4982 5.8426L4.21348 4.21339L5.78661 6.51681L0 7.5093L5.78661 8.57679L4.21347 10.7865L6.4982 9.21338L7.49069 15L8.55805 9.251L10.7679 10.7866L9.21339 8.57685Z" fill="#5B5B5B"/>
                        </svg>
                        February 2022 – Present
                    </p>
                </div>
                <p className="max-w-[474px] text-[22px] font-Poppins font-normal  text-primary">
                Innovative designs, New York, Senior Product Designer
                </p>
                <div className="flex gap-6">
                <Link to="/" className="text-lg font-medium text-description bg-LinkColor px-8 py-3 rounded-[42px] mb-6 inline-block  border border-secondry hover:text-white hover:bg-featuretext transition-all ease-in-out duration-1000">
                    UI/UX
                </Link>
                <Link to="/" className="text-lg font-medium text-description bg-LinkColor px-8 py-3 rounded-[42px] mb-6 inline-block  border border-secondry hover:text-white hover:bg-featuretext transition-all ease-in-out duration-1000">
                    Branding
                </Link>
                </div>
            </div>

            {/* Experience Item 2 */}
            <div className="flex flex-wrap gap-6 justify-between items-start mb-6 pb-6 border-b border-[#F7F6FB]">
                        <div>
                            <h3 className="font-medium text-[22px] mb-1  text-primary ">Creative Minds, New York, USA</h3>
                            <p className="flex gap-2 items-center text-lg font-normal font-Poppins text-description"> <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.21339 8.57685L15 7.50936L9.17607 6.51687L10.7679 4.21345L8.53936 5.80528L7.49069 0L6.4982 5.8426L4.21348 4.21339L5.78661 6.51681L0 7.5093L5.78661 8.57679L4.21347 10.7865L6.4982 9.21338L7.49069 15L8.55805 9.251L10.7679 10.7866L9.21339 8.57685Z" fill="#5B5B5B"/>
                                </svg>
                                February 2022 – Present
                            </p>
                        </div>
                        <p className="max-w-[474px] text-[22px] font-Poppins font-normal  text-primary">
                        Innovative designs, New York, Senior Product Designer
                        </p>
                        <div className="flex gap-6">
                        <Link to="/" className="text-lg font-medium text-description bg-LinkColor px-8 py-3 rounded-[42px] mb-6 inline-block  border border-secondry hover:text-white hover:bg-featuretext transition-all ease-in-out duration-1000">
                            UI/UX
                        </Link>
                        <Link to="/" className="text-lg font-medium text-description bg-LinkColor px-8 py-3 rounded-[42px] mb-6 inline-block  border border-secondry hover:text-white hover:bg-featuretext transition-all ease-in-out duration-1000">
                            Branding
                        </Link>
                        </div>
             </div>

            {/* Experience Item 2 */}
            <div className="flex flex-wrap gap-6 justify-between items-start mb-6 pb-6 border-b border-[#F7F6FB]">
                    <div>
                        <h3 className="font-medium text-[22px] mb-1  text-primary ">Creative Minds, New York, USA</h3>
                        <p className="flex gap-2 items-center text-lg font-normal font-Poppins text-description"> <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.21339 8.57685L15 7.50936L9.17607 6.51687L10.7679 4.21345L8.53936 5.80528L7.49069 0L6.4982 5.8426L4.21348 4.21339L5.78661 6.51681L0 7.5093L5.78661 8.57679L4.21347 10.7865L6.4982 9.21338L7.49069 15L8.55805 9.251L10.7679 10.7866L9.21339 8.57685Z" fill="#5B5B5B"/>
                            </svg>
                            February 2022 – Present
                        </p>
                    </div>

                    <div className="flex gap-6">
                    <Link to="/" className="text-lg font-medium text-description bg-LinkColor px-8 py-3 rounded-[42px] mb-6 inline-block  border border-secondry hover:text-white hover:bg-featuretext transition-all ease-in-out duration-1000">
                    UI/UX
                    </Link>
                    <Link to="/" className="text-lg font-medium text-description bg-LinkColor px-8 py-3 rounded-[42px] mb-6 inline-block  border border-secondry hover:text-white hover:bg-featuretext transition-all ease-in-out duration-1000">
                        Branding
                    </Link>
                    </div>
            </div>

            {/* Experience Item 3 with Images */}
            <div className="bg-white  mb-6 pb-6 border-b border-[#F7F6FB]">
                <div className="flex flex-wrap items-center gap-8 mt-4">
                    <div className='flex gap-5 flex-wrap'>
                    <div className='flex w-full sm:w-fit'>
                        <img src={experience1} alt="Profile" className="w-full h-auto" />
                    </div>
                    <div className='flex w-full sm:w-fit'>
                        <img src={experience2} alt="Profile" className="w-full h-auto" />
                    </div>
                    <div className='flex w-full sm:w-fit'>
                        <img src={experience3} alt="Profile" className="w-full h-auto" />
                    </div>
                    </div>
                    <div className='max-w-[688px] w-full flex gap-5 flex-wrap'>
                    <p className="max-w-[520px] text-xl font-Poppins font-normal  text-description">
                            Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
                            </p>
                            <Link to="/" className="xl:ml-auto bg-purple-600 text-white p-3 rounded-full">
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="40" cy="40" r="40" fill="#754EF9"/>
                                <path d="M25.7405 57.4416L51.6612 31.5208L51.607 47.0697C51.6012 47.3455 51.6504 47.6193 51.7518 47.8751C51.8531 48.131 52.0045 48.3637 52.1972 48.5597C52.3898 48.7558 52.6198 48.9112 52.8738 49.017C53.1278 49.1228 53.4007 49.1768 53.6765 49.1758C53.9523 49.1748 54.2256 49.1189 54.4803 49.0114C54.7351 48.9039 54.9662 48.7468 55.1602 48.5494C55.3542 48.352 55.5073 48.1182 55.6104 47.8617C55.7135 47.6051 55.7646 47.331 55.7608 47.0552L55.8325 26.4918C55.8344 25.941 55.6174 25.4135 55.2293 25.0254C54.8411 24.6373 54.3137 24.4203 53.7629 24.4221L33.1994 24.4939C32.6548 24.5052 32.135 24.73 31.7518 25.1198C31.3687 25.5096 31.153 26.0332 31.1511 26.5779C31.1492 27.1226 31.3613 27.6447 31.7417 28.0318C32.1221 28.419 32.6404 28.6401 33.1849 28.6477L48.7338 28.5934L22.8131 54.5142C22.4222 54.9051 22.2015 55.4342 22.1996 55.9851C22.1976 56.536 22.4146 57.0636 22.8028 57.4518C23.191 57.84 23.7186 58.057 24.2695 58.0551C24.8204 58.0532 25.3496 57.8325 25.7405 57.4416Z" fill="white"/>
                                </svg>
                            </Link>
                    </div>
                </div>
            </div>

            {/* Experience Item 4 */}
            <div className="flex flex-wrap gap-6 justify-between items-start mb-6 pb-6 border-b border-[#F7F6FB]">
                        <div>
                            <h3 className="font-medium text-[22px] mb-1  text-primary ">Creative Minds, New York, USA</h3>
                            <p className="flex gap-2 items-center text-lg font-normal font-Poppins text-description"> <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.21339 8.57685L15 7.50936L9.17607 6.51687L10.7679 4.21345L8.53936 5.80528L7.49069 0L6.4982 5.8426L4.21348 4.21339L5.78661 6.51681L0 7.5093L5.78661 8.57679L4.21347 10.7865L6.4982 9.21338L7.49069 15L8.55805 9.251L10.7679 10.7866L9.21339 8.57685Z" fill="#5B5B5B"/>
                                </svg>
                                February 2022 – Present
                            </p>
                        </div>
                        <p className="max-w-[474px] text-[22px] font-Poppins font-normal  text-primary">
                        Innovative designs, New York, Senior Product Designer
                        </p>
                        <div className="flex gap-6">
                        <Link to="/" className="text-lg font-medium text-description bg-LinkColor px-8 py-3 rounded-[42px] mb-6 inline-block  border border-secondry hover:text-white hover:bg-featuretext transition-all ease-in-out duration-1000">
                            UI/UX
                        </Link>
                        <Link to="/" className="text-lg font-medium text-description bg-LinkColor px-8 py-3 rounded-[42px] mb-6 inline-block  border border-secondry hover:text-white hover:bg-featuretext transition-all ease-in-out duration-1000">
                            Branding
                        </Link>
                        </div>
            </div>
    </div>
    </section>
  )
}