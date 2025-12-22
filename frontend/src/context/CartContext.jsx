import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  // 🔥 ADD THIS
  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (product) => {
    setWishlist(prev =>
      prev.find(p => p.id === product.id)
        ? prev.filter(p => p.id !== product.id)
        : [...prev, product]
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        clearCart,     // 🔥 PASS HERE
        toggleWishlist
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
