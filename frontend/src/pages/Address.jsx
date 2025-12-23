import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Address() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  });

  const saveAddress = () => {
    if (
      !address.name ||
      !address.phone ||
      !address.street ||
      !address.city ||
      !address.state ||
      !address.pincode
    ) {
      alert("All fields are required");
      return;
    }

    // ✅ USER-WISE ADDRESS SAVE
    localStorage.setItem(
      `address_${user.email}`,
      JSON.stringify(address)
    );

    alert("Address saved successfully ✅");

    navigate("/profile");
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold mb-6">Add Address</h2>

      <div className="bg-white shadow rounded-xl p-6 grid grid-cols-1 gap-4">
        <input placeholder="Full Name" className="border p-2 rounded"
          onChange={(e)=>setAddress({...address,name:e.target.value})} />
        <input placeholder="Phone Number" className="border p-2 rounded"
          onChange={(e)=>setAddress({...address,phone:e.target.value})} />
        <input placeholder="Street / Area" className="border p-2 rounded"
          onChange={(e)=>setAddress({...address,street:e.target.value})} />
        <input placeholder="City" className="border p-2 rounded"
          onChange={(e)=>setAddress({...address,city:e.target.value})} />
        <input placeholder="State" className="border p-2 rounded"
          onChange={(e)=>setAddress({...address,state:e.target.value})} />
        <input placeholder="Pincode" className="border p-2 rounded"
          onChange={(e)=>setAddress({...address,pincode:e.target.value})} />

        <button
          onClick={saveAddress}
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Save Address
        </button>
      </div>
    </div>
  );
}
