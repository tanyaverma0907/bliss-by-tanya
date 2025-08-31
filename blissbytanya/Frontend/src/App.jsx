// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import Shop from "./pages/Shop";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import NewArrivalsPage from "./pages/NewArrivalPage";
// import BestSellers from "./pages/BestSellers";
// import WishList from "./pages/WishList";
// import Cart from "./pages/Cart";
// import User from "./pages/User";
// import Contact from "./pages/Contact";
// import About from "./pages/About";

// function App() {
//   return (
//     <div>
//       <Header />

//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/new-arrivals" element={<NewArrivalsPage />} />
//         <Route path="/best-sellers" element={<BestSellers />} />
//         <Route path="/contact" element={<Contact /> } />
//         <Route path="/about" element={<About />} />
//         <Route path="/wishlist" element={<WishList />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/user" element={<User />} />
//       </Routes>

//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewArrivalsPage from "./pages/NewArrivalPage";
import BestSellers from "./pages/BestSellers";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import User from "./pages/User";
import Contact from "./pages/Contact";
import About from "./pages/About";

// ✅ Import your providers
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishListContext.jsx";
import BraceletPage from "./pages/BraceletPage.jsx";

function App() {
  return (
    // ✅ Wrap entire app with providers
    <CartProvider>
      <WishlistProvider>
        <div className="flex flex-col min-h-screen">
          <Header />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/new-arrivals" element={<NewArrivalsPage />} />
              <Route path="/best-sellers" element={<BestSellers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/wishlist" element={<WishList />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/user" element={<User />} />
              <Route path="/bracelets" element={<BraceletPage />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;



