// src/pages/About.jsx
import React from "react";
import { FaHeart, FaShoppingBag, FaUsers } from "react-icons/fa";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Us</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Welcome to <span className="font-semibold text-pink-600">YourShop</span> – 
          where passion meets fashion. We believe in creating more than just products; 
          we create experiences that bring joy to your everyday life.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-3xl p-8 hover:shadow-2xl transition">
          <FaHeart className="text-pink-500 text-4xl mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Our Mission</h2>
          <p className="text-gray-600">
            To deliver high-quality products that inspire confidence, creativity, 
            and self-expression. We aim to make shopping an enjoyable and meaningful experience.
          </p>
        </div>
        <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-3xl p-8 hover:shadow-2xl transition">
          <FaShoppingBag className="text-purple-600 text-4xl mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Our Vision</h2>
          <p className="text-gray-600">
            To become a global lifestyle brand that connects with millions of customers, 
            celebrating individuality and style in every piece we offer.
          </p>
        </div>
      </div>

      {/* Meet the Team */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 flex items-center justify-center gap-2">
          <FaUsers className="text-pink-500" /> Meet Our Team
        </h2>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          Behind every product is a passionate team dedicated to bringing you the best shopping experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          {
            name: "Aarav Sharma",
            role: "Founder & CEO",
            img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=500"
          },
          {
            name: "Ishita Verma",
            role: "Creative Director",
            img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=500"
          },
          {
            name: "Rohan Patel",
            role: "Head of Marketing",
            img: "https://images.unsplash.com/photo-1502767089025-6572583495b0?q=80&w=500"
          },
        ].map((member, i) => (
          <div
            key={i}
            className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-center text-center"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full border-4 border-pink-200 shadow-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-pink-600 font-medium">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


