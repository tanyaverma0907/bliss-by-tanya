import React from "react";
import { useLocation } from "react-router-dom";
import { newArrivals } from "../assets/assets";

export default function BraceletPage() {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const selectedStyle = queryParams.get("style");

  const filteredProducts = selectedStyle
    ? newArrivals.filter(
        (product) =>
          product.style.toLowerCase() === selectedStyle.toLowerCase()
      )
    : newArrivals;

  return (
    <section className="py-16 px-6 min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-50">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
          {selectedStyle ? `${selectedStyle} Bracelets` : "All Bracelets"}
        </h2>
        <p className="text-gray-600 mt-4 text-sm md:text-base">
          Elegance that speaks louder than words ✨
        </p>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl w-full">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="relative bg-white/60 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-pink-300/50 transition-all duration-500 p-6 flex flex-col items-center text-center group border border-pink-100"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-200 via-purple-200 to-pink-100 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

                {/* Image */}
                <div className="w-full h-52 overflow-hidden rounded-2xl mb-5 relative z-10">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Info */}
                <h3 className="text-lg font-semibold text-gray-800 z-10">
                  {product.name}
                </h3>
                <p className="text-pink-600 font-bold mt-1 text-lg z-10">
                  ₹{product.price}
                </p>
                <p className="text-yellow-500 text-sm mt-1 z-10">
                  {"⭐".repeat(Math.round(product.rating))}{" "}
                  <span className="text-gray-500">({product.reviews})</span>
                </p>

                {/* Button */}
                <button className="mt-4 px-5 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 z-10">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-gray-600 text-center text-lg font-medium">
          No products found for this style 😔
        </p>
      )}
    </section>
  );
}


