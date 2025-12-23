import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  // State to store email input
  const [email, setEmail] = useState("");

  // State to store password input
  const [password, setPassword] = useState("");

  // State to show error message if any
  const [error, setError] = useState("");

  // Hook to navigate between pages
  const navigate = useNavigate();

  // Handle login form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    // Dummy user object (used when API is not available)
    const user = {
      name: "Dhanashri",
      email: email,
    };

    // Save logged-in user data in localStorage
    localStorage.setItem("currentUser", JSON.stringify(user));

    // Reload page so Navbar updates after login
    window.location.reload();

    // Redirect user to home page
    navigate("/");
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-6">

        {/* Login heading */}
        <h1 className="text-2xl font-bold text-center mb-6">
          Sign in to your account
        </h1>

        {/* Login form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Email input field */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full border rounded-md px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              required
            />
          </div>

          {/* Password input field */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full border rounded-md px-3 py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              required
            />
          </div>

          {/* Error message display */}
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

        {/* Redirect to register page */}
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
