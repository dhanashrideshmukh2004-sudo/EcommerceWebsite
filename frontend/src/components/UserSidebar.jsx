import { NavLink } from "react-router-dom";
import { FaTimes, FaBox, FaUser, FaHeart, FaSignOutAlt } from "react-icons/fa";

export default function UserSidebar({ user, close }) {
  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-40 z-40"
        onClick={close}
      />

      {/* Sidebar */}
      <div className="fixed top-0 right-0 w-80 h-full bg-white z-50 shadow-lg animate-slideIn">
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <h2 className="text-lg font-semibold">
            Hello, {user.name} 👋
          </h2>
          <button onClick={close}>
            <FaTimes size={20} />
          </button>
        </div>

        {/* Menu */}
        <div className="flex flex-col py-4">
          <NavLink
            to="/orders"
            onClick={close}
            className="px-6 py-3 flex items-center gap-3 hover:bg-gray-100"
          >
            <FaBox /> My Orders
          </NavLink>

          <NavLink
            to="/profile"
            onClick={close}
            className="px-6 py-3 flex items-center gap-3 hover:bg-gray-100"
          >
            <FaUser /> My Profile
          </NavLink>

          <NavLink
            to="/wishlist"
            onClick={close}
            className="px-6 py-3 flex items-center gap-3 hover:bg-gray-100"
          >
            <FaHeart className="text-red-500" /> Wishlist
          </NavLink>

          <button
            className="px-6 py-3 flex items-center gap-3 text-red-600 hover:bg-gray-100"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>
    </>
  );
}
