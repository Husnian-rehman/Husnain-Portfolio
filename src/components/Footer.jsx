// import React from 'react'
// import { Link } from 'react-router-dom'
// import footerLogo from '../footer logo.png'; 
// export default function Footer() {
//   return (
//     <footer className="bg-black text-white pt-[64px] pb-[37px] px-5 border border-bgblack">
//       <div className='max-w-[1460px] m-auto'>
//       <div className="max-w-[1350px]  flex flex-wrap gap-8 justify-between pb-[73px] ">
            
//             {/* Logo and About */}
//             <div className='max-w-[321px]'>
//               <div className="flex max-w-[321px] mb-[28px]">
//                 {/* Replace src with your actual logo if needed */}
//                 <img src={footerLogo} alt="Profile" className="w-full h-auto" />
//               </div>
//               <p className="text-white text-xl font-normal font-Poppins ">
//                 Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing.
//               </p>
//             </div>

//             {/* Sent Mail */}
//             <div className='pt-[22px]'>
//               <h3 className="text-2xl font-semibold mb-[48px] font-Poppins">SENT MAIL</h3>
//               <p className="text-white text-xl font-normal font-Poppins ">Seemab@info.com</p>
//               <p className="text-white text-xl font-normal font-Poppins  mt-6">Noman@info.com</p>
//             </div>

//             {/* Make a Call */}
//             <div className='pt-[22px]'>
//               <h3 className="text-2xl font-semibold mb-[48px] font-Poppins">MAKE A CALL</h3>
//               <p className="text-white text-xl font-normal font-Poppins ">‪+923343546567‬</p>
//               <p className="text-white text-xl font-normal font-Poppins  mt-4">‪+923343546567‬</p>
//             </div>

//             {/* Get in Touch */}
//             <div className='pt-[22px]'>
//               <h3 className="text-2xl font-semibold mb-[48px] font-Poppins">GET IN TOUCH</h3>
//               <p className="text-white text-xl font-normal font-Poppins ">6th Road Rawalpindi</p>
//             </div>

//           </div>

//       </div>
//         {/* Bottom Bar */}
//       <div className=" max-w-[1460px] m-auto border-t border-[#333333]  flex flex-wrap gap-10 flex-col md:flex-row justify-between items-center pt-[27px]  text-white text-xl font-normal font-Poppins ">
//         <p>All Rights Reserve</p>

//         <div className="flex items-center flex-wrap gap-6 mt-4 md:mt-0">
//           <span>FOLLOW US ON</span>
//           <div className="w-[97px] h-px bg-featuretext"></div>
//         <ul className='flex gap-3'>
//             <li> 
//                 <Link
//                   to="/"
//                 className="text-featuretext font-bold"
//                 >
//             <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
//               <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
//             </svg>

//                 </Link>
//           </li>
//           <li>
//           <Link
//                   to="/"
//                 className="text-featuretext font-bold"
//                 >
//               <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
//               </svg>

//                 </Link>
            
//           </li>
//           <li>
//           <Link
//                   to="/portfolio"
//                 className="text-featuretext font-bold"
//                 >
//                   <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
//                     <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
//                     <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
//                   </svg>

//                 </Link>
//           </li>
//         </ul>

//         </div>
//       </div>
//     </footer>

//   )
// }


// src/components/Footer.jsx
import { Link } from "react-router-dom";

const Footer = () => {
  // Top of your component file
const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/yourprofile/",
    icon: (
    <svg class="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
    </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/yourprofile/",
    icon: (
    <svg class="w-6 h-6  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
    </svg>
    ),
  },
  {
    name: "Dribbble",
    href: "https://dribbble.com/yourprofile",
    icon: (
    <svg class="w-6 h-6  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
    <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
    </svg>
    ),
  },
  {
    name: "Behance",
    href: "https://www.behance.net/yourprofile",
    icon: (
      <svg class="w-6 h-6  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
      </svg>
    ),
  },
];

  return (
    <footer className="bg-[#1c1c1c] text-white py-10">
      <div className="max-w-[1200px] mx-auto px-4 text-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
          HUSNAIN
        </h1>

        {/* Navigation Links */}
        <ul className="flex justify-center flex-wrap gap-6 mt-6 mb-6 text-gray-300 text-[16px] font-medium">
          {["Home", "Services", "About me", "Portfolio", "Contact me"].map((item, idx) => (
            <li key={idx} className="hover:text-default cursor-pointer transition">
              {item}
            </li>
          ))}
        </ul>

        {/* Social Icons */}
       <div className="flex justify-center gap-4 mt-4 mb-6">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full hover:bg-default transition"
              aria-label={item.name}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-300">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-default" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v.511l-10 6.25-10-6.25V6zm0 2.64V18a2 2 0 002 2h16a2 2 0 002-2V8.64l-9.12 5.7a1 1 0 01-1.76 0L2 8.64z" />
            </svg>
            <span>husnainrehman86@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-default" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.2.48 2.5.73 3.85.73a1 1 0 011 1v3.58a1 1 0 01-1 1C10.72 22 2 13.28 2 3a1 1 0 011-1h3.58a1 1 0 011 1c0 1.35.25 2.65.73 3.85a1 1 0 01-.21 1.11l-2.48 2.48z" />
            </svg>
            <span>+93 729 107 005</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-700 mt-6 mb-2"></div>

        {/* Bottom Credits */}
        <p className="text-sm text-gray-500">
          Designed by @husnainrehman.com UI/UX designer
        </p>
      </div>

     
    </footer>
  );
};

export default Footer;
