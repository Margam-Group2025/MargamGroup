import React, { useEffect } from 'react'
import Title from '../Title'
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import toast from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Connect = () => {
   useEffect(() => {
            AOS.init({
              duration: 800,
              delay: 200,
              once: false,
            });
          }, []);

   const onSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    formData.append("access_key", "9401aa39-a9ad-4a45-ba87-d4f0cb2b44fa");

    try {
       const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success('Thank you for your Submission!')
      event.target.reset();
    } else {
      toast.error(data.message)
    }
 
    } catch (error) {
      toast.error(error.message)
    }

    };

  return (
    <div
      id="connect"
      className="flex flex-col items-center gap-7 px-4 mt-28 sm:px-12 lg:px-24 xl:px-40 
      pt-30 text-gray-700 dark:text-gray-200"
      data-aos="fade-up"
    >
      <Title 
        title="Reach out to us"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />   

      <form onSubmit={onSubmit}
      className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full mt-5">

        {/* Name */}
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-black font-semibold">
            Your Name
          </label>
          <div className="flex items-center pl-3 pr-3 rounded-lg border ">
             <FaRegUser className="text-gray-500" />
            <input 
              name='name'
              id="name"
              type="text"
              placeholder="Enter your name"
              required
              className="w-full p-3 text-sm outline-none bg-transparent text-black"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-black font-semibold">
            Email Id
          </label>
          <div className="flex items-center pl-3 pr-3 rounded-lg border ">
            <MdOutlineEmail className='text-gray-500 font-[20px]'/>
            <input 
              name='email'
              id="email"
              type="email" 
              placeholder="Enter your email"
              required
              className="w-full p-3 text-sm outline-none bg-transparent text-gray-800"
            />
          </div>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm text-black font-semibold">
            Message
          </label>
          <div className="flex pl-3 rounded-lg border">
            <textarea
              name='message' 
              id="message"
              rows="4"
              placeholder="Enter your message"
              required
              className="w-full p-3 text-sm outline-none bg-transparent resize-none text-black"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="sm:col-span-2 flex justify-end">
          <button 
            type="submit"
            className="px-6 py-2 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}

export default Connect
