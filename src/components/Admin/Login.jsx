import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your actual login endpoint
      const response = await axios.post(
        "https://kangaroobackend.onrender.com/api/auth/login",
        { email, password }
      );
      localStorage.setItem("token", response.data.token);
      navigate("/admin/dashboard/users");
    } catch (err) {
      setError(`Invalid credentials,${err}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
