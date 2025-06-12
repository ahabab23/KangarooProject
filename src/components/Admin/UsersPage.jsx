import React, { useEffect, useState } from "react";
import {
  FaSearch,
  FaPlus,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

export default function UsersPage() {
  // -------------- STATE --------------
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // “Add/Edit” Modal:
  const [showModal, setShowModal] = useState(false);
  const initialForm = {
    full_name: "",
    email_address: "",
    telephone_number: "",
    password: "",
    role: "Admin",
  };
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [editing, setEditing] = useState(null);

  // Pagination:
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // -------------- FETCH USERS --------------
  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const resp = await axios.get(
        "https://kangaroobackend.onrender.com/api/users",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUsers(resp.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // -------------- SEARCH & FILTER --------------
  const filteredUsers = users.filter((u) => {
    const lower = searchTerm.toLowerCase();
    return (
      u.full_name.toLowerCase().includes(lower) ||
      u.email_address.toLowerCase().includes(lower) ||
      u.telephone_number.toLowerCase().includes(lower) ||
      u.role.toLowerCase().includes(lower)
    );
  });

  // -------------- PAGINATION --------------
  const totalItems = filteredUsers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  // -------------- MODAL HANDLERS --------------
  const openModal = () => {
    setFormData(initialForm);
    setErrors({});
    setEditing(null);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setErrors({});
  };

  // -------------- FORM CHANGE & VALIDATION --------------
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const errs = {};
    if (!formData.full_name.trim()) errs.full_name = "Full name is required";
    if (!formData.email_address.trim())
      errs.email_address = "Email is required";
    if (!formData.telephone_number.trim())
      errs.telephone_number = "Telefone is required";
    if (!editing && !formData.password.trim())
      errs.password = "Password is required";
    if (!formData.role.trim()) errs.role = "Role is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const token = localStorage.getItem("token");
      if (editing) {
        // Update existing user
        await axios.put(
          `https://kangaroobackend.onrender.com/api/users/${editing.id}`,
          formData,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        toast.success("User updated successfully");
      } else {
        // Create new user
        await axios.post(
          "https://kangaroobackend.onrender.com/api/users",
          formData,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        toast.success("User created successfully");
      }
      setShowModal(false);
      fetchUsers();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleEditClick = (user) => {
    setEditing(user);
    setFormData({
      full_name: user.full_name,
      email_address: user.email_address,
      telephone_number: user.telephone_number,
      password: "",
      role: user.role,
    });
    setErrors({});
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `https://kangaroobackend.onrender.com/api/users/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("User deleted");
      fetchUsers();
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete user");
    }
  };

  // -------------- RENDER --------------
  return (
    <div className="space-y-6">
      <Toaster position="top-center" />
      {/* Header: Title + Search + Add New */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl font-semibold">Users</h2>
        <div className="flex flex-col sm:flex-row gap-2">
          {/* Search */}
          <div className="relative">
            <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-64"
            />
          </div>
          {/* Add New */}
          <button
            onClick={openModal}
            className="flex items-center justify-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            <FaPlus className="mr-2" /> Add New
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded">
          <thead className="bg-white">
            <tr>
              {[
                "ID",
                "Full Name",
                "Email",
                "Telephone Number",
                "Role",
                "Actions",
              ].map((col) => (
                <th
                  key={col}
                  className="px-4 py-2 text-left text-sm font-bold text-blue-600"
                >
                  {col}
                </th>
              ))}
            </tr>
            {/* Pink Underline */}
            <tr>
              <td colSpan={6}>
                <div className="h-[2px] bg-pink-300 w-full"></div>
              </td>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-100">
            {currentUsers.length > 0 ? (
              currentUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border text-sm text-gray-700">
                    # {user.id}
                  </td>
                  <td className="px-4 py-2 border text-sm text-gray-700">
                    {user.full_name}
                  </td>
                  <td className="px-4 py-2 border text-sm text-gray-700">
                    {user.email_address}
                  </td>
                  <td className="px-4 py-2 border text-sm text-gray-700">
                    {user.telephone_number}
                  </td>
                  <td className="px-4 py-2 border text-sm text-gray-700">
                    {user.role}
                  </td>
                  <td className="px-4 py-2 border space-x-2">
                    <button
                      onClick={() => handleEditClick(user)}
                      className="px-2 py-1 bg-blue-700 text-white rounded hover:bg-blue-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-4 text-center text-gray-500 italic"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-700">
        <div>
          Showing {totalItems === 0 ? 0 : startIndex + 1} to {endIndex} of{" "}
          {totalItems} entries
        </div>
        <div className="flex items-center space-x-1">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className={`p-2 rounded-md ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <FaChevronLeft />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`px-3 py-1 rounded-lg transition ${
                num === currentPage
                  ? "bg-purple-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {num}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-md ${
              currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* ─────────────── MODAL ─────────────── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl mx-4 animate-fade-in">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h3 className="text-2xl font-bold text-gray-800">
                {editing ? "Edit User" : "Add New User"}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="px-6 py-6 space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleFormChange}
                  placeholder="John Doe"
                  className={`w-full px-4 py-2 border rounded-lg text-sm focus:outline-none transition ${
                    errors.full_name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-2 focus:ring-purple-500"
                  }`}
                />
                {errors.full_name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.full_name}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email_address"
                  value={formData.email_address}
                  onChange={handleFormChange}
                  placeholder="user@example.com"
                  className={`w-full px-4 py-2 border rounded-lg text-sm focus:outline-none transition ${
                    errors.email_address
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-2 focus:ring-purple-500"
                  }`}
                />
                {errors.email_address && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email_address}
                  </p>
                )}
              </div>

              {/* Telephone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telephone Number
                </label>
                <input
                  type="text"
                  name="telephone_number"
                  value={formData.telephone_number}
                  onChange={handleFormChange}
                  placeholder="+1 234 567 8900"
                  className={`w-full px-4 py-2 border rounded-lg text-sm focus:outline-none transition ${
                    errors.telephone_number
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-2 focus:ring-purple-500"
                  }`}
                />
                {errors.telephone_number && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.telephone_number}
                  </p>
                )}
              </div>

              {/* Password (only on Add) */}
              {!editing && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleFormChange}
                    placeholder="Enter a secure password"
                    className={`w-full px-4 py-2 border rounded-lg text-sm focus:outline-none transition ${
                      errors.password
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-2 focus:ring-purple-500"
                    }`}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>
              )}

              {/* Role */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleFormChange}
                  className={`w-full px-4 py-2 border rounded-lg text-sm focus:outline-none transition ${
                    errors.role
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-2 focus:ring-purple-500"
                  }`}
                >
                  <option value="">Select role</option>
                  <option>Admin</option>
                  <option>Publisher</option>
                  <option>Content_Creator</option>
                </select>
                {errors.role && (
                  <p className="text-red-500 text-xs mt-1">{errors.role}</p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="bg-purple-600 text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-purple-700 transition"
                >
                  {editing ? "Update" : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
