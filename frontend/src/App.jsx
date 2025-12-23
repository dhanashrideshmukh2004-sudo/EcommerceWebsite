import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Landing from "./pages/Landing";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Address from "./pages/Address"; // ✅ ADDRESS PAGE

import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";
import { SearchProvider } from "./context/SearchContext";

export default function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <OrderProvider>
          <CartProvider>

            {/* ✅ NAVBAR ALWAYS VISIBLE */}
            <Navbar />

            <Routes>
              {/* HOME */}
              <Route path="/" element={<Landing />} />

              {/* AUTH */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* PAGES */}
              <Route path="/cart" element={<Cart />} />
              <Route path="/category/:type" element={<Product />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/address" element={<Address />} /> {/* ✅ NEW */}

              {/* FALLBACK */}
              <Route path="*" element={<Landing />} />
            </Routes>

          </CartProvider>
        </OrderProvider>
      </SearchProvider>
    </BrowserRouter>
  );
}
