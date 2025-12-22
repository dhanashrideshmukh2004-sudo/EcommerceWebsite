import { useCart } from "../context/CartContext";

export default function Wishlist() {
  const { wishlist } = useCart();

  if (wishlist.length === 0) {
    return (
      <h2 className="text-center mt-10 text-lg">
        Wishlist is empty ❤️
      </h2>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {wishlist.map((item) => (
        <div key={item.id} className="bg-white p-4 rounded shadow">
          <img
            src={item.image}
            alt={item.title}
            className="h-48 w-full object-contain"
          />
          <h3 className="mt-2 font-semibold">{item.title}</h3>
          <p className="text-green-600 font-bold">₹ {item.price}</p>
        </div>
      ))}
    </div>
  );
}
