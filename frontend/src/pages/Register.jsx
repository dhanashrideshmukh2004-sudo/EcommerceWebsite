import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const alreadyExists = users.find((u) => u.email === email);
    if (alreadyExists) {
      alert("Email already registered");
      return;
    }

    const newUser = { name, email, password };
    users.push(newUser);

    // ✅ SAVE USERS
    localStorage.setItem("users", JSON.stringify(users));

    // ✅ AUTO LOGIN AFTER REGISTER
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    localStorage.setItem("isLogin", "true");

    alert("Registration successful ✅");

    // ✅ DIRECT HOME PAGE
    navigate("/");
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="bg-white p-8 rounded-xl shadow w-[360px]">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <input
          placeholder="Full Name"
          className="w-full border px-3 py-2 mb-4 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border px-3 py-2 mb-4 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border px-3 py-2 mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Register
        </button>

        <p className="text-sm mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
