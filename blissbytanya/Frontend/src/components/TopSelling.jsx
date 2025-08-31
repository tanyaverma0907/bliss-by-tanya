// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { topSellers } from "../assets/assets";
// import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart } from "react-icons/fa";
// import { FiShoppingCart } from "react-icons/fi";

// const renderStars = (rating) => {
//   const stars = [];
//   for (let i = 1; i <= 5; i++) {
//     if (rating >= i) {
//       stars.push(<FaStar key={i} className="text-yellow-400" />);
//     } else if (rating >= i - 0.5) {
//       stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
//     } else {
//       stars.push(<FaRegStar key={i} className="text-yellow-400" />);
//     }
//   }
//   return stars;
// };

// const TopSelling = () => {
//   const [wishlist, setWishlist] = useState([]);
//   const [cart, setCart] = useState([]);
//   const displayedItems = topSellers.slice(0, 4);

//   const toggleWishlist = (item) => {
//     if (wishlist.includes(item.id)) {
//       setWishlist(wishlist.filter((id) => id !== item.id));
//     } else {
//       setWishlist([...wishlist, item.id]);
//     }
//   };

//   const addToCart = (item) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((i) => i.id === item.id);
//       if (existingItem) {
//         return prevCart.map((i) =>
//           i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//         );
//       } else {
//         return [...prevCart, { ...item, quantity: 1 }];
//       }
//     });
//   };

//   return (
//     <section className="py-16 bg-gradient-to-b from-pink-50 via-white to-purple-50 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-14 text-center tracking-tight">
//           ✨ Top Selling Picks ✨
//         </h2>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
//           {displayedItems.map((item) => (
//             <div
//               key={item.id}
//               className="group relative rounded-2xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
//             >
//               {/* Wishlist Button */}
//               <button
//                 onClick={() => toggleWishlist(item)}
//                 className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition duration-300"
//               >
//                 <FaHeart
//                   className={`text-lg ${
//                     wishlist.includes(item.id) ? "text-pink-500" : "text-gray-400"
//                   }`}
//                 />
//               </button>

//               {/* Image */}
//               <div className="overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-full h-60 object-cover transform group-hover:scale-110 transition-transform duration-500"
//                 />
//               </div>

//               {/* Details */}
//               <div className="p-5 text-center">
//                 <h3 className="text-lg font-semibold text-gray-800 group-hover:text-pink-600 transition">
//                   {item.name}
//                 </h3>
//                 <div className="flex justify-center items-center gap-1 mt-2">
//                   {renderStars(item.rating)}
//                   <span className="ml-1 text-sm text-gray-500">
//                     ({item.reviews})
//                   </span>
//                 </div>
//                 <p className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-bold text-xl mt-3">
//                   ${item.price}
//                 </p>

//                 {/* Add to Cart Button */}
//                 <button
//                   onClick={() => addToCart(item)}
//                   className="mt-4 flex items-center justify-center gap-2 w-full py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
//                 >
//                   <FiShoppingCart className="text-lg" /> Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View All Button */}
//         <div className="flex justify-center mt-14">
//           <Link to="/best-sellers">
//             <button className="px-10 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
//               View All
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TopSelling;

import React from "react";
import { Link } from "react-router-dom";
import { topSellers } from "../assets/assets";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-400" />);
    }
  }
  return stars;
};

const TopSelling = ({ addToCart, addToWishlist }) => {
  const displayedItems = topSellers.slice(0, 4);

  return (
    <section className="py-14 bg-gradient-to-b from-pink-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
          TOP SELLING
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {displayedItems.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Heart Icon (always visible) */}
              <button
                onClick={() => addToWishlist(item)}
                className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:scale-110 transition"
              >
                <FaHeart className="text-pink-500 text-lg" />
              </button>

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Details */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <div className="flex justify-center items-center gap-1 mt-2">
                  {renderStars(item.rating)}
                  <span className="ml-1 text-sm text-gray-500">
                    ({item.reviews})
                  </span>
                </div>
                <p className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-bold text-xl mt-2">
                  ${item.price}
                </p>

                {/* Add to Cart */}
                <button
                  onClick={() => addToCart(item)}
                  className="mt-4 flex items-center justify-center gap-2 w-full py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all"
                >
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <Link to="/best-sellers">
            <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
              View All
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopSelling;
