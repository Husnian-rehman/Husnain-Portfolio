// src/components/HeroSection.jsx

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="bg-[#0f0f0f] md:pt-[200px] pt-[120px] md:pb-[150px] pb-10  ">
        <div className="max-w-[1460px] m-auto  text-white flex flex-col md:flex-row items-center justify-between px-4 ">
        {/* Left Content */}
        <motion.div
            className="md:w-1/2 space-y-5"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <p className="text-gray-400">Hi I am</p>
            <h2 className="text-2xl font-semibold">Mahmood Fazile</h2>
            <h1 className="text-5xl md:text-6xl font-bold text-orange-500">UI/UX designer</h1>

            {/* Social Icons
            <div className="flex gap-4 text-xl text-white mt-4">
            <FaInstagram className="hover:text-orange-500 cursor-pointer" />
            <FaLinkedinIn className="hover:text-orange-500 cursor-pointer" />
            <FaGithub className="hover:text-orange-500 cursor-pointer" />
            <FaBehance className="hover:text-orange-500 cursor-pointer" />
            </div> */}

            {/* Buttons */}
            <div className="mt-6 flex gap-4">
            <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition">
                Hire Me
            </button>
            <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition">
                Download CV
            </button>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 bg-[#1e1e1e] rounded-lg p-4 text-center gap-4 max-w-md">
            <div>
                <p className="text-xl font-bold text-orange-500">5+</p>
                <p className="text-sm text-gray-300">Experiences</p>
            </div>
            <div>
                <p className="text-xl font-bold text-orange-500">20+</p>
                <p className="text-sm text-gray-300">Project done</p>
            </div>
            <div>
                <p className="text-xl font-bold text-orange-500">80+</p>
                <p className="text-sm text-gray-300">Happy Clients</p>
            </div>
            </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
            className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="bg-[#1e1e1e] rounded-full w-[300px] h-[300px] md:w-[400px] md:h-[400px] overflow-hidden flex items-center justify-center">
            <img
                src="/your-image.png" // replace with your actual image path
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
