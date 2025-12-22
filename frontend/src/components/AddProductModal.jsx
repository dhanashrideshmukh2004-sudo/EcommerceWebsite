import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

export default function AddProductModal({ closeModal, setStaterefersh }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("men");

  const { Auth } = useSelector((state) => state.auth);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:5000/product/create/${Auth._id}`,
        {
          title,
          description,
          image,
          price,
          category, // 👈 VERY IMPORTANT
        }
      );

      if (response.status === 200) {
        toast.success(response.data.message, {
          style: { zIndex: 999 },
        });

        setTitle("");
        setDescription("");
        setImage("");
        setPrice("");
        setCategory("men");

        closeModal();
        setStaterefersh((prev) => !prev);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <dialog id="addProductModal" className="modal">
      <div className="modal-box max-w-2xl">
        <h3 className="font-bold text-xl mb-4">Add Product</h3>

        <form onSubmit={handleUpdate} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input input-bordered w-full"
            required
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea textarea-bordered w-full"
            required
          />

          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="input input-bordered w-full"
            required
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="input input-bordered w-full"
            required
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select select-bordered w-full"
          >
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </select>

          <div className="modal-action">
            <button className="btn btn-primary" type="submit">
              Upload
            </button>
            <button className="btn" type="button" onClick={closeModal}>
              Close
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
