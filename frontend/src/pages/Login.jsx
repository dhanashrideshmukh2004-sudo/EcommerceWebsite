import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  // State to store email input
  const [email, setEmail] = useState("");

  // State to store password input
  const [password, setPassword] = useState("");

  // State to handle error messages
  const [error, setError] = useState("");

  // Hook for navigation
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Dummy user object (used when backend/API is not connected)
    const user = {
      name: "Dhanashri",
      email: email,
    };

    // ✅ Save logged-in user in localStorage
    localStorage.setItem("currentUser", JSON.stringify(user));
    localStorage.setItem("isLogin", "true"); // ⭐ FIX

    // ❌ REMOVE page reload (this caused auto logout issue)
    // window.location.reload();

    // ✅ Redirect to home page
    navigate("/");
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-6">

        {/* Page heading */}
        <h1 className="text-2xl font-bold text-center mb-6">
          Sign in to your account
        </h1>

        {/* Login form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Email field */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full border rounded-md px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password field */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full border rounded-md px-3 py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Error message */}
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>

        {/* Redirect to Register page */}
        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 font-medium">
            Sign Up
          </Link>
        </p>

      </div>
    </section>
  );
}
