import React from "react";
import { FaInstagram } from "react-icons/fa";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate

const HeroSection = () => {
  const navigate = useNavigate(); // ✅ Hook for navigation

  return (
    <section className="bg-white py-8 flex flex-col lg:flex-row items-center lg:justify-between px-8 lg:px-20 gap-10">
      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold leading-snug text-gray-900">
          Find Bracelets That Match Your Vibe
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-lg">
          Handcrafted with love, designed to shine with you. Discover the
          perfect bracelet for every moment.
        </p>

        {/* Gradient Button */}
        <button
          onClick={() => navigate("/shop")} // ✅ Navigate on click
          className="mt-4 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-full shadow-lg hover:from-pink-600 hover:to-purple-600 transition duration-300 w-fit"
        >
          Shop Now
        </button>

        {/* Stats */}
        <div className="mt-6 flex flex-wrap gap-8">
          <div>
            <p className="text-xl font-bold text-gray-900">200+</p>
            <p className="text-sm text-gray-500">Unique Designs</p>
          </div>
          <div>
            <p className="text-xl font-bold text-gray-900">2,000+</p>
            <p className="text-sm text-gray-500">Happy Customers</p>
          </div>
          <div>
            <p className="text-xl font-bold text-gray-900">30,000+</p>
            <p className="text-sm text-gray-500">Bracelets Sold</p>
          </div>
        </div>

        {/* Instagram Link */}
        <a
          href="https://instagram.com/blissbytanya"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex items-center gap-2 text-pink-600 hover:text-pink-600 transition drop-shadow-lg"
        >
          <FaInstagram size={25} /> @blissbytanya (Follow us on Instagram)
        </a>
      </div>

      {/* Right Image Collage */}
      <div className="flex-1 grid grid-cols-2 gap-4">
        <img
          src={assets.heroimg1}
          alt="Bracelet 1"
          className="w-full h-48 object-cover rounded-2xl shadow-md transform hover:scale-105 transition"
        />
        <img
          src={assets.heroimg2}
          alt="Bracelet 2"
          className="w-full h-64 object-cover rounded-2xl shadow-md transform hover:scale-105 transition"
        />
        <img
          src={assets.heroimg3}
          alt="Bracelet 3"
          className="w-full h-64 object-cover rounded-2xl shadow-md transform hover:scale-105 transition"
        />
        <img
          src={assets.heroimg4}
          alt="Bracelet 4"
          className="w-full h-48 object-cover rounded-2xl shadow-md transform hover:scale-105 transition"
        />
      </div>
    </section>
  );
};

export default HeroSection;

