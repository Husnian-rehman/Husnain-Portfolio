import React from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion"; // ✅ Import Framer Motion

const DownloadCV = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/MyCV.pdf";
    link.download = "MyCV.pdf";
    link.click();
  };

  return (
    <section className="min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        {/* 👇 Animated Heading */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold mb-5 bg-gradient-to-r from-[#E46400] to-[#ff0055] text-transparent bg-clip-text"
        >
          Ready to Work With Me?
        </motion.h1>

        <p className="text-gray-400 text-lg md:text-xl mb-10">
          Download my latest CV and explore my professional experience, design
          thinking, and project background in detail.
        </p>

        <div className="inline-flex items-center gap-3">
          <button
            onClick={handleDownload}
            className="animate-float px-8 py-3 bg-[#E46400] hover:bg-orange-600 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <FaDownload className="text-white text-lg" />
            Download My CV
          </button>

          <Link
            to="/"
            className="text-sm text-gray-400 underline hover:text-default transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DownloadCV;






// components/CVModule.jsx  page content save as pdf
// import React, { useRef } from 'react';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

// const CVModule = () => {
//   const cvRef = useRef();

//   const handleDownload = async () => {
//     const element = cvRef.current;
//     const canvas = await html2canvas(element, { scale: 2 });
//     const imgData = canvas.toDataURL('image/png');

//     const pdf = new jsPDF('p', 'mm', 'a4');
//     const imgProps = pdf.getImageProperties(imgData);
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

//     pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
//     pdf.save('My-CV.pdf');
//   };

//   return (
//     <div className="py-[100px] px-5 flex items-center justify-center">
//       <div ref={cvRef} className="bg-white p-10 rounded-xl shadow-lg max-w-3xl w-full space-y-6">
//         <h1 className="text-4xl font-bold text-[#E46400] text-center">Husnain Rehman</h1>
//         <p className="text-center text-gray-700">Full Stack Developer | React, Node, Shopify</p>

//         <section>
//           <h2 className="text-xl font-semibold text-gray-800 mb-2">Profile</h2>
//           <p className="text-gray-600">
//             Passionate developer with 5+ years of experience building scalable web applications, specializing in modern JavaScript frameworks and e-commerce platforms.
//           </p>
//         </section>

//         <section>
//           <h2 className="text-xl font-semibold text-gray-800 mb-2">Education</h2>
//           <ul className="list-disc pl-5 text-gray-600">
//             <li>BSc Computer Science – University of XYZ (2017 - 2021)</li>
//           </ul>
//         </section>

//         <section>
//           <h2 className="text-xl font-semibold text-gray-800 mb-2">Experience</h2>
//           <ul className="list-disc pl-5 text-gray-600">
//             <li>React Developer at ABC Tech (2021 - Present)</li>
//             <li>Shopify Theme Developer (Freelance, 2020 - Present)</li>
//           </ul>
//         </section>

//         <section>
//           <h2 className="text-xl font-semibold text-gray-800 mb-2">Links</h2>
//           <p className="text-blue-500 underline">
//             <a href="https://yourportfolio.com" target="_blank" rel="noreferrer">
//               Portfolio: yourportfolio.com
//             </a>
//           </p>
//         </section>

//         <div className="text-center mt-6">
//           <button
//             onClick={handleDownload}
//             className="bg-[#E46400] text-white px-6 py-2 rounded-full hover:bg-orange-700 transition"
//           >
//             Download as PDF
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CVModule;
