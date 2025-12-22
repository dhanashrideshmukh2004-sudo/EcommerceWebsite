import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../redux/wishlistSlice";

export default function Card({ product }) {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  
  // 🔑 Create a unique key for each product
  // If id is not available, fallback to _id or title
  const uniqueKey = product.id || product._id || product.title;

  // Check whether the product is already added to wishlist
  const isLiked = wishlist.some(
    (item) =>
      (item.id || item._id || item.title) === uniqueKey
  );

  // Handle add/remove wishlist functionality
  const handleWishlist = () => {
    if (isLiked) {
      // Remove product from wishlist if already liked
      dispatch(removeFromWishlist(uniqueKey));
    } else {
      // Add product to wishlist if not liked
      dispatch(
        addToWishlist({
          ...product,
          _wishlistKey: uniqueKey, // store unique key for tracking
        })
      );
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 relative">

      {/* ❤️ Wishlist / Like button */}
      <button
        onClick={handleWishlist}
        className={`absolute top-3 right-3 text-xl ${
          isLiked ? "text-red-500" : "text-gray-400"
        }`}
      >
        <FaHeart />
      </button>

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-3"
      />

      {/* Product Title */}
      <h2 className="text-sm font-semibold">{product.title}</h2>

      {/* Product Price */}
      <p className="text-green-600 font-bold">₹{product.price}</p>

      {/* Action Buttons */}
      <div className="flex items-center justify-between mt-3">
        {/* Add to Cart button */}
        <button className="flex items-center gap-2 text-sm border px-3 py-1 rounded-md hover:bg-gray-100">
          <FaShoppingCart /> Add
        </button>

        {/* Buy Now button */}
        <button className="text-xs bg-pink-600 text-white px-3 py-1 rounded-md hover:bg-pink-700">
          Buy Now
        </button>
      </div>
    </div>
  );
}
