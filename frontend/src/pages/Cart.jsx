import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrderContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Cart() {

  // Get cart items and clearCart function from Cart Context
  const { cart, clearCart } = useCart();

  // Get placeOrder function from Order Context
  const { placeOrder } = useOrders();

  // Hook for programmatic navigation
  const navigate = useNavigate();

  // State to control success message visibility
  const [showSuccess, setShowSuccess] = useState(false);

  // Calculate total price of cart items
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // Handle order placement
  const handlePlaceOrder = () => {
    // Do nothing if cart is empty
    if (cart.length === 0) return;

    // Create a copy of cart before clearing it
    const cartCopy = [...cart];   // IMPORTANT: prevent data loss

    // Save order with cart items
    placeOrder(cartCopy);

    // Clear all items from cart
    clearCart();

    // Show order success message
    setShowSuccess(true);

    // Redirect to Orders page after delay
    setTimeout(() => {
      navigate("/orders");
    }, 2000);
  };

  return (
    <>
      {/* Success notification after placing order */}
      {showSuccess && (
        <div
          style={{
            position: "fixed",
            top: "80px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "green",
            color: "white",
            padding: "12px 24px",
            borderRadius: "6px",
            zIndex: 999999,
            fontWeight: "bold",
          }}
        >
          🎉 Order placed successfully!
        </div>
      )}

      {/* Cart page container */}
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">My Cart</h1>

        {/* Show message if cart is empty */}
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {/* Render all cart items */}
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 items-center bg-white p-4 mb-4 rounded shadow"
              >
                {/* Product image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain"
                />

                {/* Product details */}
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-green-600 font-bold">
                    ₹ {item.price}
                  </p>
                </div>
              </div>
            ))}

            {/* Total price and place order button */}
            <div className="flex justify-between items-center mt-6">
              <h2 className="text-xl font-bold">
                Total: ₹ {total}
              </h2>

              {/* Place order button */}
              <button
                onClick={handlePlaceOrder}
                className="bg-green-600 text-white px-6 py-2 rounded-lg"
              >
                Place Order
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
