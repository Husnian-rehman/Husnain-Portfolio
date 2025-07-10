// src/components/HeroSection.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import Pick from '../banner-mian.png';
const HeroSection = () => {
  return (
    <div className=" pt-28  md:h-screen flex ">
        <div className="max-w-[1400px] gap-10 w-full m-auto  text-white flex flex-col md:flex-row items-center justify-between px-4 ">
        {/* Left Content */}
        <motion.div
            className="md:max-w-[550px] w-full"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <p className="text-[24px] text-[#707070] md:text-left text-center ">Hi I am</p>
            <h2 className="text-[28px] text-[#959595] mb-4 md:text-left text-center font-semibold">Husnain Rehman</h2>
            <h1 className="lg:text-[70px] mb-5 text-[45px] font-bold bg-gradient-to-r from-[#E46400] to-[#ff0055] text-transparent bg-clip-text leading-[1.4] md:text-left text-center">UI/UX Designer</h1>

             {/* Social Icons */}
            <div className="flex gap-4 text-xl md:justify-start justify-center mb-[40px]">
                <Link to="https://www.instagram.com/husnainrehmanbilag/" className="w-[40px] text-white h-[40px] rounded-full bg-bgblack  hover:bg-default flex items-center justify-center border border-1 border-[#575757] transition-all ease-in-out duration-500">
                    <svg class="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
                    </svg>
                </Link>
                 <Link to="https://www.facebook.com/husnainrehman.bilag" className="w-[40px] text-white h-[40px] rounded-full bg-bgblack  hover:bg-default flex items-center justify-center border border-1 border-[#575757] transition-all ease-in-out duration-500">
                    <svg class="w-6 h-6  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
                    </svg>

                </Link>
                 <Link to="https://www.linkedin.com/in/husnain-rehman-8833b4320/?lipi=urn%3Ali%3Apage%3Ad_flagship3_people%3B5FLvsqtAQrSR4%2Fo2VmE7jg%3D%3D" className="w-[40px] text-white h-[40px] rounded-full bg-bgblack  hover:bg-default flex items-center justify-center border border-1 border-[#575757] transition-all ease-in-out duration-500">
                   <svg class="w-6 h-6  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
                        <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                        </svg>
                </Link>
                 <Link to="https://github.com/Husnian-rehman" className="w-[40px] text-white h-[40px] rounded-full bg-bgblack  hover:bg-default flex items-center justify-center border border-1 border-[#575757] transition-all ease-in-out duration-500">
                    <svg class="w-6 h-6  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
                    </svg>
                </Link>

                  <Link to="/" className="w-[40px] text-white h-[40px] rounded-full bg-bgblack  hover:bg-default flex items-center justify-center border border-1 border-[#575757] transition-all ease-in-out duration-500">
                    <svg
                    width="24"
                    height="24"
                    viewBox="0 0 48 48"
                    className="fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M38.0766847,15.8542954 C36.0693906,15.7935177 34.2504839,14.8341149 32.8791434,13.5466056 C32.1316475,12.8317108 31.540171,11.9694126 31.1415066,11.0151329 C30.7426093,10.0603874 30.5453728,9.03391952 30.5619062,8 L24.9731521,8 L24.9731521,28.8295196 C24.9731521,32.3434487 22.8773693,34.4182737 20.2765028,34.4182737 C19.6505623,34.4320127 19.0283477,34.3209362 18.4461858,34.0908659 C17.8640239,33.8612612 17.3337909,33.5175528 16.8862248,33.0797671 C16.4386588,32.6422142 16.0833071,32.1196657 15.8404292,31.5426268 C15.5977841,30.9658208 15.4727358,30.3459348 15.4727358,29.7202272 C15.4727358,29.0940539 15.5977841,28.4746337 15.8404292,27.8978277 C16.0833071,27.3207888 16.4386588,26.7980074 16.8862248,26.3604545 C17.3337909,25.9229017 17.8640239,25.5791933 18.4461858,25.3491229 C19.0283477,25.1192854 19.6505623,25.0084418 20.2765028,25.0219479 C20.7939283,25.0263724 21.3069293,25.1167239 21.794781,25.2902081 L21.794781,19.5985278 C21.2957518,19.4900128 20.7869423,19.436221 20.2765028,19.4380839 C18.2431278,19.4392483 16.2560928,20.0426009 14.5659604,21.1729264 C12.875828,22.303019 11.5587449,23.9090873 10.7814424,25.7878401 C10.003907,27.666593 9.80084889,29.7339663 10.1981162,31.7275214 C10.5953834,33.7217752 11.5748126,35.5530237 13.0129853,36.9904978 C14.4509252,38.4277391 16.2828722,39.4064696 18.277126,39.8028054 C20.2711469,40.1991413 22.3382874,39.9951517 24.2163416,39.2169177 C26.0948616,38.4384508 27.7002312,37.1209021 28.8296253,35.4300711 C29.9592522,33.7397058 30.5619062,31.7522051 30.5619062,29.7188301 L30.5619062,18.8324027 C32.7275484,20.3418321 35.3149087,21.0404263 38.0766847,21.0867664 L38.0766847,15.8542954 Z"
                        fill="currentColor"
                    />
                    </svg>
                </Link>
       
            </div> 

            {/* Buttons */}
            <div className="md:mb-[80px] mb-[50px] flex gap-4 md:justify-start justify-center">
                <Link to="/" className="bg-default md: text-[14px] font-semibold text-white px-[40px] py-3 rounded-3xl hover:bg-default border border-1 border-[#575757]  transition-all ease-in-out duration-500">
                    Hire Me
                </Link>
                <Link to="/CVDownload" className="md: text-[14px] font-semibold text-white px-[40px] py-3 rounded-3xl hover:bg-default border border-1 border-[#575757]  transition-all ease-in-out duration-500">
                    Download CV
                </Link>
            </div>
            

            {/* Stats */}
            <div className="md:m-0 m-auto mt-10 grid grid-cols-3 backdrop-blur-[32px] bg-bgblack rounded-lg px-4 py-5 text-center gap-4 md:max-w-[550px] max-w-[450px]">
            <div className="flex items-start flex-col gap-2 border-[#575757] border-r">
               <div className="flex items-center" > <CountUp end={5} duration={5} enableScrollSpy scrollSpyOnce className="text-4xl font-bold text-default" />+</div>
                <p className="text-sm lg:text-[20px] text-white">Experiences</p>
            </div>
            <div className="flex items-start flex-col gap-2 border-[#575757] border-r">
                <div className="flex items-center" > <CountUp end={20} duration={5} enableScrollSpy scrollSpyOnce className="text-4xl font-bold text-default" />+</div>
                <p className="text-sm lg:text-[20px] text-white">Project done</p>
            </div>
            <div className="flex items-start flex-col gap-2 ">
                 <div className="flex items-center" ><CountUp end={80} duration={5} enableScrollSpy scrollSpyOnce className="text-4xl font-bold text-default" />+</div>
                <p className="text-sm lg:text-[20px] text-white">Happy Clients</p>
            </div>
            </div>

        </motion.div>

        {/* Right Image */}
        <motion.div
            className="md:max-w-[580px] w-full flex justify-center relative"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className=" bg-gradient-to-r from-[#E46400] to-[#ff0055]  absolute bottom-0 right-0 left-0 m-auto z-[1] md:max-w-full max-w-[300px] rounded-full w-full xl:h-[580px] md:h-[500px] h-[300px]  overflow-hidden flex items-center justify-center" style={{ borderRadius: "57% 43% 39% 61% / 43% 49% 51% 57%" }}>
            </div>
            <div className=" md:h-[700px] flex relative z-[2]">
                <img
                src={ Pick } // replace with your actual image path
                alt="Profile"
                className="object-cover h-full"
            />
            </div>
        </motion.div>
        </div>
    </div>
  );
};

export default HeroSection;
