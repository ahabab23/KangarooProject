import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
  FaSpinner,
} from "react-icons/fa"; // Added FaSpinner

export default function ContactsPage() {
  // -------------- STATE --------------
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true); // Added loading state

  // Pagination state:
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // -------------- FETCH --------------
  const fetchContacts = async () => {
    try {
      const token = localStorage.getItem("token");
      const resp = await axios.get(
        "https://kangaroobackend.onrender.com/api/contacts",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setContacts(resp.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false); // Always set loading to false after fetch
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // -------------- SEARCH & FILTER --------------
  const filtered = contacts.filter((c) => {
    const lower = searchTerm.toLowerCase();
    return (
      c.name.toLowerCase().includes(lower) ||
      c.email_address.toLowerCase().includes(lower) ||
      c.message.toLowerCase().includes(lower)
    );
  });

  // -------------- PAGINATION LOGIC --------------
  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentContacts = filtered.slice(startIndex, endIndex);

  // -------------- RENDER --------------
  return (
    <div className="space-y-6">
      {/* Header: Title + Search */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl font-semibold">Contacts</h2>

        <div className="relative">
          <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search contacts..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-64"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded">
          <thead className="bg-white">
            <tr>
              {["ID", "Name", "Email", "Message", "Date"].map((col) => (
                <th
                  key={col}
                  scope="col"
                  className="px-4 py-2 text-left text-sm font-bold text-blue-600"
                >
                  {col}
                </th>
              ))}
            </tr>
            {/* Pink Underline */}
            <tr>
              <td colSpan={5}>
                <div className="h-[2px] bg-pink-300 w-full"></div>
              </td>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-100">
            {/* Loading Spinner */}
            {loading ? (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center">
                  <div className="flex justify-center">
                    <FaSpinner className="animate-spin text-purple-600 text-2xl" />
                  </div>
                </td>
              </tr>
            ) : currentContacts.length > 0 ? (
              // Data Rows
              currentContacts.map((c) => (
                <tr key={c.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border text-sm text-gray-700">
                    # {c.id}
                  </td>
                  <td className="px-4 py-2 border text-sm text-gray-700">
                    {c.name}
                  </td>
                  <td className="px-4 py-2 border text-sm text-gray-700">
                    {c.email_address}
                  </td>
                  <td className="px-4 py-2 border text-sm text-gray-700">
                    {c.message}
                  </td>
                  <td className="px-4 py-2 border text-sm text-gray-700">
                    {c.date}
                  </td>
                </tr>
              ))
            ) : (
              // Empty State
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-4 text-center text-gray-500 italic"
                >
                  No contacts found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination - Only show when not loading */}
      {!loading && (
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
      )}
    </div>
  );
}
