import React, { useState } from "react";
import { Phone, Mail, MapPin, User, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 //data store in firebase or backend can be done here
 const submitData = async (event)=>{
  event.preventDefault();
  const {firstName,lastName,phone,email,message} = formData;
  if(firstName && lastName && phone && email && message){
    const res = await fetch(process.env.FIREBASE_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        phone,
        email,
        message,  
      }),
    }
    );
    if(res){
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });
      toast.success("Data Stored Successfully");
    }
    else{
      toast.error("Please Fill the Data");
    }
  } else{
    toast.error("Please Fill the Data");
  }
 }

 
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left Section - Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <h1 className="text-3xl font-extrabold text-blue-800 mt-16">Connect Us</h1>
        <p className="text-gray-600 text-lg">We’d love to hear from you. Fill out the form below!</p>

        <div className="bg-white shadow-xl rounded-2xl p-6 space-y-4 border border-gray-100">
          <form method="POST">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-blue-500 text-sm font-medium flex items-center gap-2">
                  <User size={16} /> First Name
                </label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="text-blue-500 text-sm font-medium flex items-center gap-2">
                  <User size={16} /> Last Name
                </label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-blue-500 text-sm font-medium flex items-center gap-2">
                <Phone size={16} /> Phone Number
              </label>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
             <div>
               <label className="text-blue-500 text-sm font-medium flex items-center gap-2">
                <MdEmail size={16} /> Email Address
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
             </div>
            </div>
            <div>
              <label className="text-blue-500 text-sm font-medium flex items-center gap-2">
                <MessageSquare size={16} /> Message
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-xl font-semibold hover:bg-indigo-700 transition shadow"
              onClick={submitData}
            >
              Submit
            </button>
          </form>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div>
          <h2 className="text-3xl font-bold text-blue-800 flex items-center gap-2 mt-16">
            <MapPin size={30} /> Our Location
          </h2>
          <p className="text-gray-600 mt-2 leading-relaxed">
            Margam Nirman,3rd Floor,C/o-Hdfc bank <br />Jaydev Vihar, Bhubaneswar <br />odisha 751013
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-blue-800 mb-2 flex items-center gap-2">
            <Phone size={24} /> Contact Details
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Phone: +91 7749950999 <br />
            <span className="flex items-center gap-2 mt-1">
              <Mail size={20} /> margamgroup2025.com
            </span>
          </p>
        </div>

        <div className="w-full h-80 rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59881.1460662576!2d85.76376671953125!3d20.27659311021898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909c591f1a023%3A0x8b96523e8f39b9a!2sHDFC%20Bank!5e0!3m2!1sen!2sin!4v1764139992684!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
      <ToastContainer />
    </div>
  );
};

export default Contact;