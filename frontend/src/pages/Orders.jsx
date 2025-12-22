import { useOrders } from "../context/OrderContext";
import { useEffect, useState } from "react";

export default function Orders() {

  // Get orders list and deleteOrder function from Order Context
  const { orders, deleteOrder } = useOrders();

  // State to control success message visibility
  const [showSuccess, setShowSuccess] = useState(true);

  // Show success message when page loads, then hide after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSuccess(false);
    }, 3000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">

      {/* Success message displayed on page load */}
      {showSuccess && (
        <div className="mb-4 bg-green-600 text-white text-center py-3 rounded font-semibold">
          🎉 Order placed successfully!
        </div>
      )}

      {/* Page heading */}
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>

      {/* Show message if no orders exist */}
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            className="border rounded-lg p-4 mb-6 shadow-sm bg-white"
          >
            {/* Order summary information */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm text-gray-500">
                  Order Date: {order.date}
                </p>
                <p className="text-green-600 font-medium">
                  Status: {order.status}
                </p>
              </div>

              {/* Cancel order button */}
              <button
                onClick={() => deleteOrder(order.id)}
                className="text-red-500 border border-red-400 px-3 py-1 rounded hover:bg-red-500 hover:text-white transition"
              >
                Cancel Order
              </button>
            </div>

            {/* Display order id */}
            <p className="font-semibold mb-2">
              Order ID: #{order.id}
            </p>

            {/* Render order items safely */}
            {order.items && order.items.length > 0 ? (
              order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 items-center border-t pt-4 mt-4"
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
              ))
            ) : (
              // Fallback message if order has no items
              <p className="text-gray-500 mt-4">
                No items in this order
              </p>
            )}
          </div>
        ))
      )}
    </div>
  );
}
