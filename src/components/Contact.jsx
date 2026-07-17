import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhoneAlt, FaCommentDots, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call or EmailJS)
    console.log('Form Submitted Successfully:', formData);
  };

  return (
    <section className="bg-[#f0f4ff] min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans flex items-center justify-center">
      <div className="w-full max-w-5xl">
        
        {/* ── Title Header ───────────────────────────────────────────── */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center gap-3 text-4xl sm:text-5xl font-extrabold text-[#111827]">
            {/* Headset/Support Icon */}
            <svg 
              className="w-10 h-10 sm:w-11 sm:h-11 fill-current text-[#111827]" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z" />
            </svg>
            <h1>
              Get in <span className="text-[#6b21a8]">Touch</span>
            </h1>
          </div>
        </div>

        {/* ── Main Container Card ────────────────────────────────────── */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-6 md:p-12 flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Column: Visual Illustration */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="https://img.freepik.com/free-vector/customer-support-flat-design-illustration_23-2148889374.jpg" 
              alt="Customer Support Illustration" 
              className="w-full max-w-[420px] h-auto object-contain"
            />
          </div>

          {/* Right Column: Interactive Form */}
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name Input */}
              <div className="relative flex items-center">
                <FaUser className="absolute left-4 text-gray-700 text-base" />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3.5 bg-[#e8eefc] border border-slate-400 rounded-lg text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6b21a8]/40 focus:bg-white transition-all font-medium text-base shadow-sm"
                />
              </div>

              {/* Email Input */}
              <div className="relative flex items-center">
                <FaEnvelope className="absolute left-4 text-gray-700 text-base" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3.5 bg-[#e8eefc] border border-slate-400 rounded-lg text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6b21a8]/40 focus:bg-white transition-all font-medium text-base shadow-sm"
                />
              </div>

              {/* Phone Input */}
              <div className="relative flex items-center">
                <FaPhoneAlt className="absolute left-4 text-gray-700 text-base" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3.5 bg-[#e8eefc] border border-slate-400 rounded-lg text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6b21a8]/40 focus:bg-white transition-all font-medium text-base shadow-sm"
                />
              </div>

              {/* Message Input */}
              <div className="relative flex items-start">
                <FaCommentDots className="absolute left-4 top-4 text-gray-700 text-base" />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3.5 bg-[#e8eefc] border border-slate-400 rounded-lg text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6b21a8]/40 focus:bg-white transition-all font-medium text-base shadow-sm resize-y"
                />
              </div>

              {/* Submit Button Area */}
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-[#220cb3] hover:bg-[#1a098c] text-white px-7 py-3 rounded-lg font-bold text-base transition-all duration-200 cursor-pointer shadow-[0_4px_14px_rgba(34,12,179,0.4)] active:scale-98"
                >
                  Submit <FaPaperPlane className="text-sm" />
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}