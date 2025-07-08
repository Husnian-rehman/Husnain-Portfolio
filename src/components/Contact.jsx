import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const GetInTouch = () => {
  const [state, handleSubmit] = useForm("xqaborjy");

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <p className="text-white text-xl font-medium">Thanks for your message!</p>
      </div>
    );
  }

  return (
    <div className="py-[40px] md:min-h-screen bg-black flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="bg-black text-white max-w-[800px] w-full">
        <h2 className="block text-center mb-5 md:text-[40px] text-[20px] font-bold  text-white">Get In Touch</h2>
        <p className="text-center text-txtblack mb-8 md:mb-16 text-[16px] md:text-[20px] font-semibold ">Let's work together</p>

        <div className='md:mb-8  mb-5'>
          <label className="text-sm block mb-3 font-semibold" htmlFor="name">Name<span className='text-default font-bold text-2xl'>*</span></label>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="full name"
            className="w-full px-4 py-2 border border-gray-600 bg-transparent text-white rounded-md"
          />
        </div>

        <div className='md:mb-8  mb-5'>
          <label className="text-sm block mb-3 font-semibold" htmlFor="email">Email<span className='text-default font-bold text-2xl'>*</span></label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="example@email.com"
            className="w-full px-4 py-2 border border-gray-600 bg-transparent text-white rounded-md"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className='md:mb-8  mb-5'>
          <label className="text-sm block mb-3 font-semibold" htmlFor="service">Service<span className='text-default font-bold text-2xl'>*</span></label>
          <select
            id="service"
            name="service"
            required
            className="w-full px-4 py-2 border border-gray-600 bg-black rounded-md"
          >
            <option disabled selected value="">Select a service</option>
            <option>Web Development</option>
            <option>Design</option>
            <option>Marketing</option>
          </select>
        </div>

        <div className='md:mb-8  mb-5'>
          <label className="text-sm block mb-3 font-semibold" htmlFor="message">Message<span className='text-default font-bold text-2xl'>*</span></label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            className="w-full px-4 py-2 border border-gray-600 bg-transparent text-white rounded-md resize-none"
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <div>
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full py-2 bg-default hover:text-black text-white font-bold rounded-md hover:bg-default transition-all duration-500 "
          >
            {state.submitting ? 'Sending...' : 'Get in Touch'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default GetInTouch;
