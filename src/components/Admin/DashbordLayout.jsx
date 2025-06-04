import React from "react";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import {
  FaUsers,
  FaFileAlt,
  FaAddressBook,
  FaSignOutAlt,
} from "react-icons/fa";

import UsersPage from "./UsersPage";
import PostsPage from "./PostsPage";
import ContactsPage from "./ContactsPage";
import logo from "./WhatsApp-Image-2023-03-04-at-07.20.271.jpeg";
import { useNavigate } from "react-router-dom";

export default function DashboardLayout() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  const linkClasses = (isActive) =>
    `flex items-center px-4 py-3 rounded-lg transition-colors ${
      isActive
        ? "bg-purple-100 text-purple-700"
        : "text-gray-700 hover:bg-purple-50 hover:text-purple-700"
    }`;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-white shadow-lg flex flex-col">
        <div className="px-6 py-8 flex items-center justify-center border-b border-gray-200">
          <img
            src={logo}
            className="rounded-full h-30 w-30 "
            alt="Admin Logo"
          />
        </div>

        <nav className="mt-6 flex-1">
          <ul className="space-y-1">
            <li>
              <NavLink
                to="/admin/dashboard/users"
                className={({ isActive }) => linkClasses(isActive)}
              >
                <FaUsers className="mr-3 h-8 w-8 text-lg" />
                <span className="font-medium">Users</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/dashboard/posts"
                className={({ isActive }) => linkClasses(isActive)}
              >
                <FaFileAlt className="mr-3 h-8 w-8 text-lg" />
                <span className="font-medium">Posts</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/dashboard/contacts"
                className={({ isActive }) => linkClasses(isActive)}
              >
                <FaAddressBook className="h-8 w-8 mr-3 text-lg" />
                <span className="font-medium">Contacts</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="px-6 py-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <FaSignOutAlt className="mr-3 h-8 w-8 text-lg" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* RIGHT CONTENT */}
      <main className="flex-1 p-8 overflow-auto">
        {/* SECTION HEADER */}
        {/* <div className="mb-6">
          <Routes>
            <Route
              path="users"
              element={<h1 className="text-3xl font-bold">Users</h1>}
            />
            <Route
              path="posts"
              element={<h1 className="text-3xl font-bold">Posts</h1>}
            />
            <Route
              path="contacts"
              element={<h1 className="text-3xl font-bold">Contacts</h1>}
            />
            <Route path="*" element={<Navigate to="users" />} />
          </Routes>
        </div> */}

        {/* PAGE CONTENT */}
        <div className="bg-white rounded-lg shadow p-6">
          <Routes>
            <Route path="users" element={<UsersPage />} />
            <Route path="posts" element={<PostsPage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="*" element={<Navigate to="users" />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
