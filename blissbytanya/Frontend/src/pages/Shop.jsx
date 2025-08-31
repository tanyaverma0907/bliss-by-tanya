// import React, { useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaStar,
//   FaStarHalfAlt,
//   FaRegStar,
//   FaHeart,
//   FaShoppingCart,
// } from "react-icons/fa";
// import { braceletProducts } from "../assets/assets";
// import { WishListContext } from "../context/WishListContext";
// import { CartContext } from "../context/CartContext";
// import { useCart } from "../context/CartContext";

// // ⭐ Rating UI
// const renderStars = (rating) => {
//   const stars = [];
//   for (let i = 1; i <= 5; i++) {
//     if (rating >= i) stars.push(<FaStar key={i} className="text-yellow-400" />);
//     else if (rating >= i - 0.5)
//       stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
//     else stars.push(<FaRegStar key={i} className="text-yellow-400" />);
//   }
//   return stars;
// };

// const Shop = () => {
//   const [sortOption, setSortOption] = useState("Most Popular");
//   const [filters, setFilters] = useState({
//     type: [],
//     size: [],
//     style: [],
//     color: [],
//     price: 200,
//   });

//   // ✅ Use Contexts (safe fallback to [])
//   const { wishlist = [], addToWishlist, removeFromWishlist } =
//     useContext(WishListContext);
//   // const { cart = [], addToCart } = useContext(CartContext);
  
//   const { addToCart } = useCart();


//   // ✅ Update filters dynamically
//   const handleFilterChange = (category, value) => {
//     setFilters((prev) => {
//       if (category === "price") return { ...prev, price: value };

//       const newValues = prev[category].includes(value)
//         ? prev[category].filter((v) => v !== value)
//         : [...prev[category], value];
//       return { ...prev, [category]: newValues };
//     });
//   };

//   // ✅ Filtering logic
//   const filteredProducts = braceletProducts.filter((p) => {
//     const matchType =
//       filters.type.length === 0 || filters.type.includes(p.type);
//     const matchSize =
//       filters.size.length === 0 || filters.size.includes(p.size);
//     const matchStyle =
//       filters.style.length === 0 || filters.style.includes(p.style);
//     const matchColor =
//       filters.color.length === 0 || filters.color.includes(p.color);
//     const matchPrice = p.price <= filters.price;

//     return matchType && matchSize && matchStyle && matchColor && matchPrice;
//   });

//   // ✅ Sorting logic
//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     switch (sortOption) {
//       case "Price: Low to High":
//         return a.price - b.price;
//       case "Price: High to Low":
//         return b.price - a.price;
//       case "Newest":
//         return b.id - a.id;
//       default:
//         return b.rating - a.rating; // Most Popular
//     }
//   });

//   return (
//     <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
//       {/* Breadcrumb */}
//       <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-gray-600">
//         <Link to="/" className="hover:text-pink-500 transition-colors">
//           Home
//         </Link>{" "}
//         &gt; <span className="text-gray-800 font-medium">Bracelets</span>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
//         {/* Sidebar Filters */}
//         <aside className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-6 self-start">
//           <h3 className="font-bold text-lg mb-6 text-gray-800 border-b pb-3">
//             Filter by
//           </h3>

//           {/* Bracelet Types */}
//           <div className="mb-6">
//             <h4 className="font-semibold mb-3 text-gray-700">Type</h4>
//             {["Beaded", "Leather", "Chain", "Charm", "Cuff"].map((type) => (
//               <label
//                 key={type}
//                 className="flex items-center mb-2 cursor-pointer hover:text-pink-500 transition"
//               >
//                 <input
//                   type="checkbox"
//                   checked={filters.type.includes(type)}
//                   onChange={() => handleFilterChange("type", type)}
//                   className="form-checkbox h-4 w-4 text-pink-500 rounded-full"
//                 />
//                 <span className="ml-2">{type}</span>
//               </label>
//             ))}
//           </div>

//           {/* Price */}
//           <div className="mb-6">
//             <h4 className="font-semibold mb-3 text-gray-700">Price</h4>
//             <input
//               type="range"
//               min="20"
//               max="200"
//               value={filters.price}
//               onChange={(e) => handleFilterChange("price", e.target.value)}
//               className="w-full accent-pink-500"
//             />
//             <div className="flex justify-between text-sm text-gray-500 mt-1">
//               <span>$20</span>
//               <span>${filters.price}</span>
//             </div>
//           </div>

//           {/* Colors */}
//           <div className="mb-6">
//             <h4 className="font-semibold mb-3 text-gray-700">Colors</h4>
//             <div className="flex gap-2 flex-wrap">
//               {[
//                 { hex: "#FFD700", name: "Gold" },
//                 { hex: "#C0C0C0", name: "Silver" },
//                 { hex: "#000000", name: "Black" },
//                 { hex: "#B76E79", name: "Brown" },
//                 { hex: "#FFFFFF", name: "White" },
//               ].map(({ hex, name }, i) => (
//                 <div
//                   key={i}
//                   onClick={() => handleFilterChange("color", name)}
//                   className={`w-6 h-6 rounded-full border-2 cursor-pointer hover:scale-110 transition-transform ${
//                     filters.color.includes(name)
//                       ? "border-pink-500"
//                       : "border-gray-200"
//                   }`}
//                   style={{ backgroundColor: hex }}
//                 ></div>
//               ))}
//             </div>
//           </div>

//           {/* Sizes */}
//           <div className="mb-6">
//             <h4 className="font-semibold mb-3 text-gray-700">Size</h4>
//             {["Small", "Medium", "Large", "Adjustable"].map((size) => (
//               <label
//                 key={size}
//                 className="flex items-center mb-2 cursor-pointer hover:text-pink-500 transition"
//               >
//                 <input
//                   type="checkbox"
//                   checked={filters.size.includes(size)}
//                   onChange={() => handleFilterChange("size", size)}
//                   className="form-checkbox h-4 w-4 text-pink-500 rounded-full"
//                 />
//                 <span className="ml-2">{size}</span>
//               </label>
//             ))}
//           </div>

//           {/* Style */}
//           <div>
//             <h4 className="font-semibold mb-3 text-gray-700">Style</h4>
//             {["Minimalist", "Statement", "Boho", "Spiritual"].map((style) => (
//               <label
//                 key={style}
//                 className="flex items-center mb-2 cursor-pointer hover:text-pink-500 transition"
//               >
//                 <input
//                   type="checkbox"
//                   checked={filters.style.includes(style)}
//                   onChange={() => handleFilterChange("style", style)}
//                   className="form-checkbox h-4 w-4 text-pink-500 rounded-full"
//                 />
//                 <span className="ml-2">{style}</span>
//               </label>
//             ))}
//           </div>
//         </aside>

//         {/* Products Section */}
//         <main className="lg:col-span-3">
//           {/* Title & Sort */}
//           <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
//             <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
//               All Bracelets
//             </h2>
//             <select
//               value={sortOption}
//               onChange={(e) => setSortOption(e.target.value)}
//               className="border rounded-full px-4 py-2 text-sm shadow-sm focus:ring-2 focus:ring-pink-500"
//             >
//               <option>Most Popular</option>
//               <option>Price: Low to High</option>
//               <option>Price: High to Low</option>
//               <option>Newest</option>
//             </select>
//           </div>

//           {/* Product Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {sortedProducts.length > 0 ? (
//               sortedProducts.map((item) => (
//                 <div
//                   key={item.id}
//                   className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
//                 >
//                   <div className="relative">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
//                     />
//                     {item.tag && (
//                       <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
//                         {item.tag}
//                       </span>
//                     )}
//                   </div>
//                   <div className="p-5">
//                     <h3 className="font-semibold text-lg text-gray-800 group-hover:text-pink-500 transition">
//                       {item.name}
//                     </h3>
//                     <p className="text-sm text-gray-500">{item.material}</p>
//                     <div className="flex items-center gap-1 mt-2">
//                       {renderStars(item.rating)}
//                       <span className="text-xs text-gray-500">
//                         ({item.reviews})
//                       </span>
//                     </div>
//                     <div className="mt-3 flex items-center gap-2">
//                       <span className="text-lg font-bold text-gray-900">
//                         ${item.price}
//                       </span>
//                       {item.oldPrice && (
//                         <span className="text-sm line-through text-gray-400">
//                           ${item.oldPrice}
//                         </span>
//                       )}
//                     </div>

//                     {/* ✅ Add to Cart + Wishlist */}
//                     <div className="mt-4 flex justify-between items-center">
//                       <button
//                         onClick={() => addToCart(item)}
//                         className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm transition"
//                       >
//                         <FaShoppingCart /> Add to Cart
//                       </button>

//                       <button
//                         onClick={() =>
//                           wishlist.some((w) => w.id === item.id)
//                             ? removeFromWishlist(item.id)
//                             : addToWishlist(item)
//                         }
//                         className="p-2 rounded-full border hover:bg-pink-100 transition"
//                       >
//                         <FaHeart
//                           className={`${
//                             wishlist.some((w) => w.id === item.id)
//                               ? "text-pink-500"
//                               : "text-gray-400"
//                           }`}
//                         />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-600">
//                 No products match your filters 💔
//               </p>
//             )}
//           </div>
//         </main>
//       </div>

//       {/* Newsletter Banner */}
//       <div className="mt-16 bg-gradient-to-r from-pink-500 to-rose-600 text-white py-12">
//         <div className="max-w-4xl mx-auto text-center px-6">
//           <h3 className="text-2xl sm:text-3xl font-bold">
//             ✨ Sign up & get 15% off your first bracelet ✨
//           </h3>
//           <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="px-5 py-3 rounded-full text-black w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-yellow-300"
//             />
//             <button className="bg-black hover:bg-gray-900 px-6 py-3 rounded-full font-medium shadow-md">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Shop;





//for backend

import React, { useState, useEffect, useContext } from "react"; // ✅ useEffect add kiya (API call ke liye)
import { Link } from "react-router-dom";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";
// ❌ import { braceletProducts } from "../assets/assets"; // ye hata diya kyunki ab backend use hoga
import { WishListContext } from "../context/WishListContext";
import { useCart } from "../context/CartContext"; // ✅ cart context use karenge

// ⭐ Rating UI
const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars.push(<FaStar key={i} className="text-yellow-400" />);
    else if (rating >= i - 0.5)
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    else stars.push(<FaRegStar key={i} className="text-yellow-400" />);
  }
  return stars;
};

const Shop = () => {
  const [sortOption, setSortOption] = useState("Most Popular");
  const [filters, setFilters] = useState({
    type: [],
    size: [],
    style: [],
    color: [],
    price: 200,
  });

  // ✅ Backend products ke liye state
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Contexts
  const { wishlist = [], addToWishlist, removeFromWishlist } =
    useContext(WishListContext);
  const { addToCart } = useCart();

  // ✅ useEffect to fetch products from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/products") // tumhare backend ka route
      .then((res) => res.json())
      .then((data) => {
        setProducts(data); // backend se aaye products save
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  // ✅ Update filters dynamically
  const handleFilterChange = (category, value) => {
    setFilters((prev) => {
      if (category === "price") return { ...prev, price: value };

      const newValues = prev[category].includes(value)
        ? prev[category].filter((v) => v !== value)
        : [...prev[category], value];
      return { ...prev, [category]: newValues };
    });
  };

  // ✅ Filtering logic (backend ke products pe apply)
  const filteredProducts = products.filter((p) => {
    const matchType =
      filters.type.length === 0 || filters.type.includes(p.type);
    const matchSize =
      filters.size.length === 0 || filters.size.includes(p.size);
    const matchStyle =
      filters.style.length === 0 || filters.style.includes(p.style);
    const matchColor =
      filters.color.length === 0 || filters.color.includes(p.color);
    const matchPrice = p.price <= filters.price;

    return matchType && matchSize && matchStyle && matchColor && matchPrice;
  });

  // ✅ Sorting logic (backend ke data ke hisaab se)
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "Price: Low to High":
        return a.price - b.price;
      case "Price: High to Low":
        return b.price - a.price;
      case "Newest":
        return b._id.localeCompare(a._id); // ✅ MongoDB ka _id use kiya
      default:
        return b.rating - a.rating; // Most Popular
    }
  });

  if (loading) {
    return (
      <p className="text-center py-20 text-gray-600">Loading products...</p>
    );
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-gray-600">
        <Link to="/" className="hover:text-pink-500 transition-colors">
          Home
        </Link>{" "}
        &gt; <span className="text-gray-800 font-medium">Bracelets</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters - same as before */}
        <aside className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-6 self-start">
          {/* ... (filters code same hai, no change) */}
        </aside>

        {/* Products Section */}
        <main className="lg:col-span-3">
          {/* Title & Sort */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
              All Bracelets
            </h2>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border rounded-full px-4 py-2 text-sm shadow-sm focus:ring-2 focus:ring-pink-500"
            >
              <option>Most Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {sortedProducts.length > 0 ? (
              sortedProducts.map((item) => (
                <div
                  key={item._id} // ✅ MongoDB ka _id use kiya
                  className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    {item.tag && (
                      <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-lg text-gray-800 group-hover:text-pink-500 transition">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">{item.material}</p>
                    <div className="flex items-center gap-1 mt-2">
                      {renderStars(item.rating)}
                      <span className="text-xs text-gray-500">
                        ({item.reviews})
                      </span>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-lg font-bold text-gray-900">
                        ${item.price}
                      </span>
                      {item.oldPrice && (
                        <span className="text-sm line-through text-gray-400">
                          ${item.oldPrice}
                        </span>
                      )}
                    </div>

                    {/* ✅ Add to Cart + Wishlist */}
                    <div className="mt-4 flex justify-between items-center">
                      <button
                        onClick={() => addToCart(item)}
                        className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm transition"
                      >
                        <FaShoppingCart /> Add to Cart
                      </button>

                      <button
                        onClick={() =>
                          wishlist.some((w) => w._id === item._id) // ✅ id -> _id
                            ? removeFromWishlist(item._id)
                            : addToWishlist(item)
                        }
                        className="p-2 rounded-full border hover:bg-pink-100 transition"
                      >
                        <FaHeart
                          className={`${
                            wishlist.some((w) => w._id === item._id)
                              ? "text-pink-500"
                              : "text-gray-400"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600">
                No products match your filters 💔
              </p>
            )}
          </div>
        </main>
      </div>

      {/* Newsletter Banner - same as before */}
      <div className="mt-16 bg-gradient-to-r from-pink-500 to-rose-600 text-white py-12">
        {/* ... */}
      </div>
    </div>
  );
};

export default Shop;
