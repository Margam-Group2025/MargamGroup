import React, { useEffect } from 'react';
import Title from '../Title';
import { FaRegUser, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail, MdLocationOn } from "react-icons/md";
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
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Thank you for your Submission!');
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      id="connect"
      className="py-16 px-4 sm:px-12 lg:px-24 bg-white text-gray-800"
      data-aos="fade-up"
    >
      <Title
        title="Connect Us"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 items-start">
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Send us a message 📩</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Feel free to reach out through the contact form or find our contact details below.
               Your feedback, questions, and suggestions are important to us.
            </p>

            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-center gap-4">
                <MdOutlineEmail className="text-blue-600" />
                <span>contact@margamgroup.com</span>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-blue-600" />
                <span>+91 12345 67890</span>
              </div>
              <div className="flex items-center gap-4">
                <MdLocationOn className="text-blue-600" />
                <span>77 Massachusetts Ave, Cambridge, MA 02139, USA</span>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="grid sm:grid-cols-2 gap-4 sm:gap-5 max-w-2xl w-full"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-semibold">
              Your Name
            </label>
            <div className="flex items-center border rounded-lg px-3">
              <FaRegUser className="text-gray-500" />
              <input
                name="name"
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
            <label htmlFor="email" className="block mb-1 text-sm font-semibold">
              Email Id
            </label>
            <div className="flex items-center border rounded-lg px-3">
              <MdOutlineEmail className="text-gray-500" />
              <input
                name="email"
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                className="w-full p-3 text-sm outline-none bg-transparent text-black"
              />
            </div>
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-1 text-sm font-semibold">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              placeholder="Enter your message"
              required
              className="w-full border p-3 rounded-lg text-sm outline-none bg-transparent resize-none text-black"
            />
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Connect;
