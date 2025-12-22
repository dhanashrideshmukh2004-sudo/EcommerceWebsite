import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct({ setProducts }) {

  // State to store product title
  const [title, setTitle] = useState("");

  // State to store product price
  const [price, setPrice] = useState("");

  // State to store product image URL
  const [image, setImage] = useState("");

  // State to store selected category (default: men)
  const [category, setCategory] = useState("men");

  // Hook for programmatic navigation
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Add new product to existing product list
    setProducts((prev) => [
      ...prev,
      {
        id: Date.now(), // Generate unique id
        title,
        price,
        image,
        category,
      },
    ]);

    // Redirect user to selected category page
    navigate(`/category/${category}`);
  };

  return (
    <div style={{ padding: "40px" }}>
      {/* Page heading */}
      <h2>Add Product</h2>

      {/* Product input form */}
      <form onSubmit={handleSubmit}>

        {/* Product name input */}
        <input
          placeholder="Product name"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br /><br />

        {/* Product price input */}
        <input
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <br /><br />

        {/* Product image URL input */}
        <input
          placeholder="Image URL"
          onChange={(e) => setImage(e.target.value)}
        />
        <br /><br />

        {/* Category selection dropdown */}
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>

        <br /><br />

        {/* Submit button */}
        <button>Add Product</button>
      </form>
    </div>
  );
}
