// // src/context/WishlistContext.jsx
// import { createContext, useContext, useState } from "react";

// // Create Context
// export const WishListContext = createContext();

// // Provider Component
// export const WishlistProvider = ({ children }) => {
//   const [wishlistItems, setWishlistItems] = useState([]);

//   // ✅ Add product to wishlist (avoid duplicates)
//   const addToWishlist = (product) => {
//     setWishlistItems((prev) => {
//       if (prev.find((item) => item.id === product.id)) {
//         return prev; // already exists
//       }
//       return [...prev, product];
//     });
//   };

//   // ✅ Remove product from wishlist
//   const removeFromWishlist = (id) => {
//     setWishlistItems((prev) => prev.filter((item) => item.id !== id));
//   };

//   // ✅ Check if item is in wishlist
//   const isInWishlist = (id) => {
//     return wishlistItems.some((item) => item.id === id);
//   };

//   return (
//     <WishListContext.Provider
//       value={{ wishlistItems, addToWishlist, removeFromWishlist, isInWishlist }}
//     >
//       {children}
//     </WishListContext.Provider>
//   );
// };

// // Custom hook for easy use
// export const useWishlist = () => useContext(WishListContext);

// src/context/WishlistContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

// Create Context
export const WishListContext = createContext();

// Provider Component
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    // ✅ Load from localStorage on first render
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ Save to localStorage whenever wishlist changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // ✅ Add product to wishlist (avoid duplicates)
  const addToWishlist = (product) => {
    setWishlist((prev) => {
      if (prev.find((item) => item.id === product.id)) {
        return prev; // already exists
      }
      return [...prev, product];
    });
  };

  // ✅ Remove product from wishlist
  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ Check if item is in wishlist
  const isInWishlist = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  return (
    <WishListContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}
    >
      {children}
    </WishListContext.Provider>
  );
};

// ✅ Custom hook for easy use
export const useWishlist = () => useContext(WishListContext);

