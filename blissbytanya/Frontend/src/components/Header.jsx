// src/components/Header.jsx
import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { CartContext } from "../context/CartContext"; // ✅ Import CartContext

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "New Arrivals", path: "/new-arrivals" },
  { name: "Best Sellers", path: "/best-sellers" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-xl sticky top-0 z-50 border-b border-gray-200">
      <div className="ml-12 mr-12 mx-auto flex items-center justify-between py-7 px-8">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="text-xl md:text-2xl font-extrabold tracking-wide bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent cursor-pointer select-none"
        >
          BlissByTanya
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative group transition-all duration-300"
            >
              {link.name}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-1 w-64 border border-transparent focus-within:border-pink-400 focus-within:ring-2 focus-within:ring-pink-200 transition-all">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none px-2 text-sm w-full"
          />
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-5 text-gray-700">
          <Link
            to="/wishlist"
            className="relative p-2 rounded-full hover:bg-gray-100 transition hover:text-pink-500"
          >
            <FaHeart size={20} />
          </Link>
          <Link
            to="/cart"
            className="relative p-2 rounded-full hover:bg-gray-100 transition hover:text-green-500"
          >
            <FaShoppingCart size={20} />
            {/* ✅ Cart badge */}
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
          <Link
            to="/account"
            className="relative p-2 rounded-full hover:bg-gray-100 transition hover:text-indigo-500"
          >
            <FaUser size={20} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-800 p-2 rounded-full hover:bg-gray-100 transition"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Full-Screen Menu */}
      <div
        ref={menuRef}
        className={`fixed inset-0 bg-white/95 backdrop-blur-md z-50 transform transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end mb-6">
            <FaTimes
              size={26}
              className="cursor-pointer text-gray-800 hover:text-pink-500 transition"
              onClick={toggleMobileMenu}
            />
          </div>

          {/* Search Bar Mobile */}
          <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 mb-8 border border-transparent focus-within:border-pink-400 focus-within:ring-2 focus-within:ring-pink-200 transition-all">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none px-2 text-sm w-full"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-6 text-lg font-medium text-gray-700">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-pink-500 transform transition-all duration-300 hover:scale-105"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Bottom Icons */}
          <div className="flex space-x-6 mt-auto pt-6 border-t border-gray-300">
            <Link to="/wishlist" onClick={() => setIsMobileMenuOpen(false)}>
              <FaHeart className="cursor-pointer hover:text-pink-500 transition" />
            </Link>
            <Link to="/cart" onClick={() => setIsMobileMenuOpen(false)} className="relative">
              <FaShoppingCart className="cursor-pointer hover:text-green-500 transition" />
              {/* ✅ Cart badge mobile */}
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <Link to="/account" onClick={() => setIsMobileMenuOpen(false)}>
              <FaUser className="cursor-pointer hover:text-indigo-500 transition" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

