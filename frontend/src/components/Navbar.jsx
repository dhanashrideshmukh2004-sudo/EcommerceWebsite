import { NavLink, useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaUserCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import UserSidebar from "./UserSidebar";
import { useSearch } from "../context/SearchContext";

export default function Navbar() {
  const { cart } = useCart();
  const { search, setSearch } = useSearch();
  const navigate = useNavigate();

  const [openUser, setOpenUser] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  // 🔐 GET USER FROM STORAGE
  const user = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <div className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">

          {/* ☰ Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setOpenMenu(true)}
          >
            <FaBars size={22} />
          </button>

          {/* Logo */}
          <NavLink
            to="/"
            className="text-xl md:text-2xl font-bold text-blue-600"
          >
            StockNest
          </NavLink>

          {/* Search */}
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border rounded-md px-3 py-2 text-sm"
          />

          {/* ===== DESKTOP CATEGORIES ===== */}
          <div className="hidden md:flex gap-6 font-medium items-center">
            <NavLink to="/category/men">Men</NavLink>
            <NavLink to="/category/women">Women</NavLink>
            <NavLink to="/category/kids">Kids</NavLink>
            <NavLink to="/category/electronics">Electronics</NavLink>
            <NavLink to="/category/Home & Kitchen">Home & Kitchen</NavLink>
            <NavLink to="/category/Beauty">Beauty</NavLink>
          </div>

          {/* Cart + User */}
          <div className="flex gap-4 items-center">

            {/* CART */}
            <NavLink to="/cart" className="relative">
              <FaShoppingCart size={20} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                  {cart.length}
                </span>
              )}
            </NavLink>

            {/* 🔐 AUTH SECTION */}
            {!user ? (
              // 👉 NOT LOGGED IN
              <button
                onClick={() => navigate("/login")}
                className="px-4 py-1.5 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 text-sm"
              >
                Login / Sign Up
              </button>
            ) : (
              // 👉 LOGGED IN
              <button onClick={() => setOpenUser(true)}>
                <FaUserCircle size={22} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ================= MOBILE CATEGORY DRAWER ================= */}
      {openMenu && (
        <div className="fixed inset-0 bg-black/40 z-50">
          <div className="bg-white w-64 h-full p-5">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold">Categories</h2>
              <button onClick={() => setOpenMenu(false)}>
                <FaTimes />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              <NavLink to="/category/men" onClick={() => setOpenMenu(false)}>Men</NavLink>
              <NavLink to="/category/women" onClick={() => setOpenMenu(false)}>Women</NavLink>
              <NavLink to="/category/kids" onClick={() => setOpenMenu(false)}>Kids</NavLink>
              <NavLink to="/category/electronics" onClick={() => setOpenMenu(false)}>Electronics</NavLink>
              <NavLink to="/category/Home & Kitchen" onClick={() => setOpenMenu(false)}>Home & Kitchen</NavLink>
              <NavLink to="/category/Beauty" onClick={() => setOpenMenu(false)}>Beauty</NavLink>
            </nav>
          </div>
        </div>
      )}

      {/* ================= USER SIDEBAR ================= */}
      {openUser && user && (
        <UserSidebar user={user} close={() => setOpenUser(false)} />
      )}
    </>
  );
}
