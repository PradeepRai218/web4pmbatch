import React from 'react';
import Breadcrumds from '../common/Breadcrumds';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function ContactUs() {
  let pageName = 'contact Us';
  return (
    <div>
      <Breadcrumds pageName={pageName} />

      <section className="w-full bg-gradient-to-b from-[#fff] to-[#fdf5f5] py-14">
        {/* ===== Inner Container (1320px) ===== */}
        <div className="max-w-[1320px] mx-auto px-3">
          {/* ===== Map Section ===== */}
          <div className="w-full mb-12">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609863264!2d72.74109854636505!3d19.08219783850417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63c79e1a3cf%3A0xb1c5f6c9ef3c04f2!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1698855296193!5m2!1sen!2sin"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              className="rounded-2xl border-2 border-[#b76e79] shadow-lg shadow-rose-200"
            ></iframe>
          </div>

          {/* ===== Contact Section ===== */}
          <div className="flex flex-col md:flex-row justify-between gap-10">
            {/* ==== Left Side (Contact Info) ==== */}
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl font-bold text-gray-900 mb-8 relative">
                Contact Information
                <span className="absolute left-0 -bottom-2 w-24 h-1 bg-[#b76e79] rounded-full"></span>
              </h1>

              <div className="space-y-7 text-gray-700">
                {/* Address */}
                <div className="flex items-start gap-4 group transition-all duration-300">
                  <div className="p-3 bg-[#fff] rounded-full shadow-md group-hover:bg-[#b76e79] transition duration-300">
                    <FaMapMarkerAlt className="text-[#b76e79] text-xl group-hover:text-white transition duration-300" />
                  </div>
                  <h3 className="text-lg group-hover:text-[#b76e79] transition duration-300">
                    <span className="font-semibold">Address:</span> Claritas est
                    etiam processus dynamicus
                  </h3>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group transition-all duration-300">
                  <div className="p-3 bg-[#fff] rounded-full shadow-md group-hover:bg-[#b76e79] transition duration-300">
                    <FaPhoneAlt className="text-[#b76e79] text-xl group-hover:text-white transition duration-300" />
                  </div>
                  <h3 className="text-lg group-hover:text-[#b76e79] transition duration-300">
                    <span className="font-semibold">Phone:</span> 98745612330
                  </h3>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group transition-all duration-300">
                  <div className="p-3 bg-[#fff] rounded-full shadow-md group-hover:bg-[#b76e79] transition duration-300">
                    <FaEnvelope className="text-[#b76e79] text-xl group-hover:text-white transition duration-300" />
                  </div>
                  <h3 className="text-lg group-hover:text-[#b76e79] transition duration-300">
                    <span className="font-semibold">Email:</span>{' '}
                    furnitureinfo@gmail.com
                  </h3>
                </div>
              </div>
            </div>

            {/* ==== Right Side (Form) ==== */}
            <div className="w-full md:w-1/2 bg-white p-8 rounded-2xl shadow-lg border border-[#f4d3d6] transition-all hover:shadow-2xl hover:shadow-rose-200 duration-300">
              <h1 className="text-4xl font-bold text-gray-900 mb-8 relative">
                Send Us a Message
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#b76e79] rounded-full"></span>
              </h1>

              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name (required)
                  </label>
                  <input
                    type="text"
                    placeholder="Name *"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b76e79] transition"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email (required)
                  </label>
                  <input
                    type="email"
                    placeholder="Email *"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b76e79] transition"
                    required
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Mobile Number (required)
                  </label>
                  <input
                    type="text"
                    placeholder="Mobile Number *"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b76e79] transition"
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Subject *"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b76e79] transition"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    placeholder="Message *"
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b76e79] transition"
                  ></textarea>
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  className="w-full bg-[#b76e79] hover:bg-[#a15b64] text-white font-semibold py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-rose-200"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
