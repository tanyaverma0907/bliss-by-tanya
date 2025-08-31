// src/pages/Contact.jsx
import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Touch</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have a question about our products, need support, 
          or just want to say hello 💌, we’re here to help.
        </p>
      </div>

      {/* Contact Info + Form Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Contact Info Cards */}
        <div className="space-y-8">
          <div className="flex items-center gap-5 bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
            <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-md">
              <FaEnvelope size={22} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
              <p className="text-gray-600">support@yourshop.com</p>
            </div>
          </div>

          <div className="flex items-center gap-5 bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
            <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-md">
              <FaPhoneAlt size={22} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>
          </div>

          <div className="flex items-center gap-5 bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
            <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-md">
              <FaMapMarkerAlt size={22} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Visit Us</h3>
              <p className="text-gray-600">123 Shopping Street, New Delhi, India</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl p-8 hover:shadow-pink-200 transition">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
