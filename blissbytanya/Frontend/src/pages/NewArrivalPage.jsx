// import React from "react";
// import { newArrivals } from "../assets/assets";
// import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// const renderStars = (rating) => {
//   const stars = [];
//   for (let i = 1; i <= 5; i++) {
//     if (rating >= i) {
//       stars.push(<FaStar key={i} className="text-yellow-400 drop-shadow" />);
//     } else if (rating >= i - 0.5) {
//       stars.push(<FaStarHalfAlt key={i} className="text-yellow-400 drop-shadow" />);
//     } else {
//       stars.push(<FaRegStar key={i} className="text-yellow-400 drop-shadow" />);
//     }
//   }
//   return stars;
// };

// const NewArrivalsPage = () => {
//   return (
//     <section className="relative py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden">
//       {/* Animated Blobs */}
//       <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
//       <div className="absolute top-40 -right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
//       <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-bounce"></div>

//       <div className="relative max-w-7xl mx-auto px-6">
//         {/* Gradient Heading */}
//         <h2 className="text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center mb-14 tracking-wide animate-gradient-x">
//           ✨ All New Arrivals ✨
//         </h2>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
//           {newArrivals.map((item, index) => (
//             <div
//               key={index}
//               className="group rounded-3xl bg-white/50 backdrop-blur-xl border border-transparent bg-clip-padding
//                          shadow-lg hover:shadow-pink-200/50 overflow-hidden transform hover:-translate-y-3 hover:scale-[1.02]
//                          transition-all duration-500 relative before:absolute before:inset-0 before:rounded-3xl 
//                          before:p-[2px] before:bg-gradient-to-r before:from-pink-400 before:to-purple-400 before:opacity-0 
//                          group-hover:before:opacity-100 before:transition-opacity"
//             >
//               {/* Inner Content */}
//               <div className="relative z-10 rounded-3xl bg-white/70 backdrop-blur-md h-full">
//                 {/* Product Image */}
//                 <div className="overflow-hidden relative">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-full h-60 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
//                   />
//                   {/* Overlay Glow */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                 </div>

//                 {/* Text Content */}
//                 <div className="p-6 text-center">
//                   <h3 className="text-lg font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
//                     {item.name}
//                   </h3>

//                   {/* Stars */}
//                   <div className="flex justify-center items-center gap-1 mt-2">
//                     {renderStars(item.rating)}
//                     <span className="ml-1 text-sm text-gray-500">({item.reviews})</span>
//                   </div>

//                   {/* Price */}
//                   <p className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-extrabold text-2xl mt-3 drop-shadow">
//                     ${item.price}
//                   </p>

//                   {/* Button */}
//                   <button className="mt-5 px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Gradient Animation */}
//       <style>{`
//         @keyframes gradient-x {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         .animate-gradient-x {
//           background-size: 200% 200%;
//           animation: gradient-x 5s ease infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default NewArrivalsPage;


import React, { useContext } from "react";
import { newArrivals } from "../assets/assets";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaHeart,
  FaRegHeart,
  FaShoppingCart,
} from "react-icons/fa";
import { WishListContext } from "../context/WishListContext";
import { CartContext } from "../context/CartContext";

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-yellow-400 drop-shadow" />);
    } else if (rating >= i - 0.5) {
      stars.push(
        <FaStarHalfAlt key={i} className="text-yellow-400 drop-shadow" />
      );
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-400 drop-shadow" />);
    }
  }
  return stars;
};

const NewArrivalsPage = () => {
  const { wishlist, addToWishlist } = useContext(WishListContext);
  const { addToCart } = useContext(CartContext);

  return (
    <section className="relative py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center mb-14 tracking-wide animate-gradient-x">
          ✨ All New Arrivals ✨
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {newArrivals.map((item) => {
            const isWishlisted = wishlist.some((w) => w.id === item.id);

            return (
              <div
                key={item.id}
                className="group relative rounded-3xl bg-white/50 backdrop-blur-xl shadow-lg hover:shadow-pink-200/50 overflow-hidden transform hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500"
              >
                {/* Heart Icon */}
                <button
                  onClick={() => addToWishlist(item)}
                  className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:scale-110 transition z-20"
                >
                  {isWishlisted ? (
                    <FaHeart className="text-pink-500 text-lg" />
                  ) : (
                    <FaRegHeart className="text-pink-500 text-lg" />
                  )}
                </button>

                {/* Product Image */}
                <div className="overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-60 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Text Content */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
                    {item.name}
                  </h3>

                  {/* Stars */}
                  <div className="flex justify-center items-center gap-1 mt-2">
                    {renderStars(item.rating)}
                    <span className="ml-1 text-sm text-gray-500">
                      ({item.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <p className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-extrabold text-2xl mt-3 drop-shadow">
                    ₹{item.price}
                  </p>

                  {/* Add to Cart */}
                  <button
                    onClick={() => addToCart(item)}
                    className="mt-5 w-full flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <FaShoppingCart /> Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Gradient Animation */}
      <style>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default NewArrivalsPage;
