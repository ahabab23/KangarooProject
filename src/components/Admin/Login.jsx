// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Replace with your actual login endpoint
//       const response = await axios.post(
//         "https://kangaroobackend.onrender.com/api/auth/login",
//         { email, password }
//       );
//       localStorage.setItem("token", response.data.token);
//       navigate("/admin/dashboard/users");
//     } catch (err) {
//       setError(`Invalid credentials,${err}`);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-lg shadow w-full max-w-md"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
//         {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Email Address</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 mb-2">Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800 transition"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast"; // Import toast components

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Added loading state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://kangaroobackend.onrender.com/api/auth/login",
        { email, password }
      );

      localStorage.setItem("token", response.data.token);

      // Show success toast
      toast.success("Login successful! Redirecting...", {
        duration: 2000,
        icon: "✅",
      });

      // Wait for toast to show before navigating
      setTimeout(() => {
        navigate("/admin/dashboard/users");
      }, 2000);
    } catch (err) {
      // Show error toast
      toast.error(err.response?.data?.message || "Invalid credentials", {
        duration: 4000,
        icon: "❌",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Toaster position="top-center" /> {/* Toast container */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-200"
      >
        <div className="text-center mb-8">
          <div className="mx-auto bg-blue-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4" />
          <h2 className="text-3xl font-bold text-gray-800">Admin Login</h2>
          <p className="text-gray-500 mt-2">
            Enter your credentials to continue
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="admin@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-all ${
              isLoading
                ? "bg-purple-400 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-md hover:shadow-lg"
            }`}
          >
            {isLoading ? (
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
              </div>
            ) : (
              "Sign In"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
