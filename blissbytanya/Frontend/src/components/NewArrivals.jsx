// import React from "react";
// import { Link } from "react-router-dom";
// import { newArrivals } from "../assets/assets";
// import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

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

// const NewArrivals = () => {
//   const displayedItems = newArrivals.slice(0, 4);

//   return (
//     <section className="py-14 bg-gradient-to-b from-pink-50 via-white to-purple-50">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
//           NEW ARRIVALS
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//           {displayedItems.map((item, index) => (
//             <div
//               key={index}
//               className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
//             >
//               <div className="overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-full h-56 object-cover transform hover:scale-110 transition-transform duration-500"
//                 />
//               </div>

//               <div className="p-5 text-center">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   {item.name}
//                 </h3>
//                 <div className="flex justify-center items-center gap-1 mt-2">
//                   {renderStars(item.rating)}
//                   <span className="ml-1 text-sm text-gray-500">
//                     ({item.reviews})
//                   </span>
//                 </div>
//                 <p className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-bold text-xl mt-2">
//                   ${item.price}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View All Button */}
//         <div className="flex justify-center mt-12">
//           <Link to="/new-arrivals">
//             <button
//               className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
//             >
//               View All
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewArrivals;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { newArrivals } from "../assets/assets";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";
import { WishListContext } from "../context/WishListContext";
import { CartContext } from "../context/CartContext";

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

const NewArrivals = () => {
  const displayedItems = newArrivals.slice(0, 4);

  const { addToWishlist } = useContext(WishListContext);
  const { addToCart } = useContext(CartContext);

  return (
    <section className="py-16 bg-gradient-to-b from-pink-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-14 text-center tracking-tight">
          ✨ New Arrivals ✨
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-white shadow-md border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Wishlist Button */}
              <button
                onClick={() => addToWishlist(item)}
                className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md opacity-90 hover:opacity-100 hover:scale-110 transition z-10"
              >
                <FaHeart className="text-pink-500 text-lg" />
              </button>

              {/* Product Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Product Details */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-pink-600 transition">
                  {item.name}
                </h3>

                {/* Rating */}
                <div className="flex justify-center items-center gap-1 mt-2">
                  {renderStars(item.rating)}
                  <span className="ml-1 text-sm text-gray-500">
                    ({item.reviews})
                  </span>
                </div>

                {/* Price */}
                <p className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-bold text-xl mt-2">
                  ₹{item.price}
                </p>

                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCart(item)}
                  className="mt-5 w-full flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-14">
          <Link to="/new-arrivals">
            <button className="px-10 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold text-lg rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300">
              View All
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
