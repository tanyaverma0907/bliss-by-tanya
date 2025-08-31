import React from "react";

const categories = [
  "Minimal",
  "Beaded",
  "Charm",
  "Couple Sets",
  "Custom Name Bracelets"
];

const BrandBar = () => {
  return (
    <div className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Floating glass gradient bar */}
        <div className="rounded-2xl p-[2px] bg-gradient-to-r from-pink-300 via-peach-200 to-purple-300 shadow-lg">
          <div className="flex justify-evenly items-center py-4 px-6 bg-white/70 backdrop-blur-lg rounded-full">
            {categories.map((category, index) => (
              <span
                key={index}
                className="relative text-xl font-medium tracking-wide text-gray-700 cursor-pointer
                           transition-all duration-300 ease-in-out
                           hover:text-pink-600"
              >
                {category}
                {/* Shimmer underline effect */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-300 group-hover:w-full hover:w-full rounded-full"></span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandBar;






