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
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 capitalize">
        {type} Products
      </h1>

      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 w-full md:w-1/3 mb-6 rounded"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map(item => (
          <div key={item.id} className="bg-white shadow-md rounded-xl p-4">
            <img
              src={item.image}
              alt={item.title}
              className="h-48 w-full object-contain"
            />

            <h3 className="mt-2 text-sm font-semibold">{item.title}</h3>

            <p className="font-bold text-green-600">₹ {item.price}</p>

            <div className="flex justify-between items-center mt-3">
              {/* ❤️ Like */}
              <button
                onClick={() => toggleWishlist(item)}
                className={`text-lg ${
                  wishlist.find(p => p.id === item.id)
                    ? "text-red-500"
                    : "text-gray-400"
                }`}
              >
                <FaHeart />
              </button>

              {/* 🛒 Add */}
              <button
                onClick={() => addToCart(item)}
                className="flex items-center gap-2 text-sm border px-3 py-1 rounded-md"
              >
                <FaShoppingCart /> Add
              </button>

              {/* Buy Now */}
              <button className="text-xs bg-pink-600 text-white px-3 py-1 rounded-md">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
