// src/pages/Cart.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart, updateQuantity, getTotal } =
    useCart();

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <h1 className="text-5xl font-extrabold text-gray-800 mb-10 flex items-center gap-3">
        <FaShoppingCart className="text-pink-500 drop-shadow-md" /> Your Shopping Cart
      </h1>

      {/* Empty State */}
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl shadow-inner">
          <FaShoppingCart className="text-pink-400 text-6xl mb-4 animate-bounce" />
          <p className="text-gray-600 text-lg font-medium">
            😔 Your cart is empty. Let’s add something!
          </p>
          <Link
            to="/shop"
            className="mt-6 inline-block px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((p) => (
              <div
                key={p.id}
                className="flex items-center justify-between rounded-2xl bg-white/80 backdrop-blur-lg shadow-md hover:shadow-2xl transition transform hover:-translate-y-1 p-5"
              >
                {/* Product Info */}
                <div className="flex items-center gap-5">
                  {p.image && (
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-24 h-24 object-cover rounded-xl shadow-md"
                    />
                  )}
                  <div>
                    <h2 className="font-bold text-lg text-gray-900 hover:text-pink-600 transition">
                      {p.name}
                    </h2>
                    <p className="text-pink-600 font-semibold mt-1">
                      ₹{p.price}
                    </p>

                    {/* Quantity Update */}
                    <div className="mt-3 flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(p.id, Math.max(p.quantity - 1, 1))
                        }
                        className="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 border rounded-full text-gray-700 bg-white/70">
                        {p.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(p.id, p.quantity + 1)}
                        className="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(p.id)}
                  className="px-4 py-2 text-sm bg-red-100 text-red-600 rounded-full shadow hover:bg-red-200 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 flex flex-col justify-between sticky top-24 h-fit">
            <h2 className="text-2xl font-extrabold text-gray-800 border-b pb-4 mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between text-lg mb-3">
              <span>Subtotal</span>
              <span className="font-medium">₹{getTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600 mb-3 text-sm">
              <span>Shipping</span>
              <span className="font-medium">Free</span>
            </div>
            <div className="flex justify-between font-bold text-xl mt-4 border-t pt-4">
              <span>Total</span>
              <span className="text-pink-600">₹{getTotal().toFixed(2)}</span>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <button className="w-full px-5 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition">
                Checkout
              </button>
              <button
                onClick={clearCart}
                className="w-full px-5 py-3 rounded-full bg-red-100 text-red-600 font-semibold shadow hover:bg-red-200 transition"
              >
                Clear Cart
              </button>
              <Link
                to="/shop"
                className="w-full px-5 py-3 rounded-full bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition text-center"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



