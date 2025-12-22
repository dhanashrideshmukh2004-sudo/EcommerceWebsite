import { createContext, useContext, useState, useEffect } from "react";

const OrderContext = createContext();
const STORAGE_KEY = "my_app_orders"; // 🔥 FIX

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
  }, [orders]);

  const placeOrder = (cartItems) => {
    if (!cartItems || cartItems.length === 0) return;

    const newOrder = {
      id: Date.now(),
      items: cartItems.map(item => ({ ...item })), // deep copy
      date: new Date().toLocaleDateString(),
      status: "Placed",
    };

    setOrders(prev => [...prev, newOrder]);
  };

  const deleteOrder = (orderId) => {
    setOrders(prev => prev.filter(o => o.id !== orderId));
  };

  return (
    <OrderContext.Provider value={{ orders, placeOrder, deleteOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export const useOrders = () => useContext(OrderContext);
