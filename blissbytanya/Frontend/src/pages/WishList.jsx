// src/pages/Wishlist.jsx
import React, { useContext } from "react";
import { FaHeart, FaTrash } from "react-icons/fa";
import { WishListContext } from "../context/WishListContext"; // 👈 import context
import { CartContext } from "../context/CartContext"; // 👈 to move items to cart

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishListContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <h1 className="text-5xl font-extrabold text-gray-800 flex items-center gap-3 mb-10">
        <FaHeart className="text-pink-500 drop-shadow-md" /> My Wishlist
      </h1>

      {/* Empty State */}
      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl shadow-inner">
          <FaHeart className="text-pink-400 text-6xl mb-4 animate-bounce" />
          <p className="text-gray-600 text-lg font-medium">
            💔 Your wishlist is empty. Start adding your favorites!
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="relative group bg-white/80 backdrop-blur-lg rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 p-4 flex flex-col"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-60 object-cover rounded-xl transform group-hover:scale-105 transition duration-500"
                />
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-3 right-3 p-3 bg-white/90 backdrop-blur rounded-full shadow hover:bg-red-100 transition"
                >
                  <FaTrash className="text-red-500 text-lg" />
                </button>
              </div>

              {/* Product Details */}
              <div className="mt-5 flex-1 flex flex-col">
                <h2 className="text-lg font-bold text-gray-900 group-hover:text-pink-600 transition">
                  {item.name}
                </h2>
                <p className="text-pink-600 font-extrabold text-xl mt-2">
                  ₹{item.price}
                </p>

                <button
                  onClick={() => {
                    addToCart(item);
                    removeFromWishlist(item.id);
                  }}
                  className="mt-auto w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition"
                >
                  Move to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


