import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

export default function Product() {
  const { type } = useParams();
  const [search, setSearch] = useState("");

  const { addToCart, toggleWishlist, wishlist } = useCart();

  const filtered = products.filter(
    (p) =>
      p.category === type &&
      p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 capitalize">
        {type} Products
      </h1>

      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 w-full md:w-1/3 mb-6 rounded"
      />

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-xl p-3 md:p-4 flex flex-col"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-36 md:h-48 w-full object-contain"
            />

            <h3 className="mt-2 text-sm md:text-base font-semibold">
              {item.title}
            </h3>

            <p className="font-bold text-green-600 mt-1">
              ₹ {item.price}
            </p>

            {/* ✅ ACTIONS – SAME ROW (LIKE + ADD + BUY NOW) */}
            <div className="mt-3 flex items-center justify-between gap-2">
              {/* Like */}
              <button
                onClick={() => toggleWishlist(item)}
                className={`text-lg ${
                  wishlist.find((p) => p.id === item.id)
                    ? "text-red-500"
                    : "text-gray-400"
                }`}
              >
                <FaHeart />
              </button>

              {/* Add */}
              <button
                onClick={() => addToCart(item)}
                className="flex items-center gap-1 text-xs border px-3 py-1 rounded-md"
              >
                <FaShoppingCart /> Add
              </button>

              {/* Buy Now */}
              <button className="bg-pink-600 text-white text-xs px-3 py-1 rounded-md">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No products found
        </p>
      )}
    </div>
  );
}
