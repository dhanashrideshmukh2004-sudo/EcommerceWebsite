import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import UserSidebar from "./UserSidebar";
import { useSearch } from "../context/SearchContext"; // Search context for global search state

export default function Navbar() {
  // Get cart items from Cart Context
  const { cart } = useCart();

  // Get search value and setter from Search Context
  const { search, setSearch } = useSearch();

  // State to open / close user sidebar
  const [openUser, setOpenUser] = useState(false);

  // Dummy logged-in user data
  const user = { name: "Dhanashri" };

  return (
    <>
      {/* Sticky navbar container */}
      <div className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-6">

          {/* Logo / Brand name */}
          <NavLink to="/" className="text-2xl font-bold text-blue-600">
            StockNest
          </NavLink>

          {/* Search input - updates global search state */}
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border rounded-md px-4 py-2"
          />

          {/* Navigation links and icons */}
          <div className="flex gap-6 font-medium items-center">

            {/* Category navigation links */}
            <NavLink to="/category/men">Men</NavLink>
            <NavLink to="/category/women">Women</NavLink>
            <NavLink to="/category/kids">Kids</NavLink>
            <NavLink to="/category/electronics">Electronics</NavLink>
            <NavLink to="/category/Home & Kitchen">Home & Kitchen</NavLink>
            <NavLink to="/category/Beauty">Beauty</NavLink>

            {/* Cart icon with item count */}
            <NavLink to="/cart" className="relative">
              <FaShoppingCart size={20} />

              {/* Show cart count only if cart is not empty */}
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-1 rounded-full">
                  {cart.length}
                </span>
              )}
            </NavLink>

            {/* User profile icon */}
            <button onClick={() => setOpenUser(true)}>
              <FaUserCircle size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* User sidebar - opens when user icon is clicked */}
      {openUser && (
        <UserSidebar user={user} close={() => setOpenUser(false)} />
      )}
    </>
  );
}
