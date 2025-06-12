import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import {
  FaPlus,
  FaTimes,
  FaEdit,
  FaTrash,
  FaCloudUploadAlt,
} from "react-icons/fa";

export default function HeaderPage() {
  const [headers, setHeaders] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    image_url: "",
  });
  const [editing, setEditing] = useState(null);

  const fetchHeaders = async () => {
    try {
      const res = await axios.get(
        "https://kangaroobackend.onrender.com/api/headers"
      );
      setHeaders(res.data);
    } catch (err) {
      toast.error("Failed to load headers");
    }
  };

  useEffect(() => {
    fetchHeaders();
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const toastId = toast.loading("Uploading...");
    try {
      const uploadData = new FormData();
      uploadData.append("file", file);
      uploadData.append("upload_preset", "kangaroo"); // <-- Add your Cloudinary upload preset
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dny9v95td/image/upload", // <-- Add your Cloudinary URL
        uploadData
      );
      setFormData((prev) => ({ ...prev, image_url: res.data.secure_url }));
      toast.success("Uploaded", { id: toastId });
    } catch (err) {
      toast.error("Upload failed", { id: toastId });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      if (editing) {
        await axios.put(
          `https://kangaroobackend.onrender.com/api/headers/${editing.id}`,
          formData,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        toast.success("Header updated");
      } else {
        await axios.post(
          "https://kangaroobackend.onrender.com/api/headers",
          formData,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        toast.success("Header created");
      }
      fetchHeaders();
      setShowModal(false);
    } catch (err) {
      toast.error("Failed to save header");
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(
        `https://kangaroobackend.onrender.com/api/headers/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Header deleted");
      fetchHeaders();
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  const openModal = (header = null) => {
    setEditing(header);
    setFormData(
      header || {
        title: "",
        subtitle: "",
        description: "",
        image_url: "",
      }
    );
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 md:p-8">
      <Toaster position="top-right" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Header Management
            </h1>
            <p className="text-gray-600 mt-2">
              Create and manage homepage headers
            </p>
          </div>
          <button
            onClick={() => openModal()}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            <FaPlus className="text-sm" /> Create New Header
          </button>
        </div>

        {headers.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm p-8 text-center border-2 border-dashed border-gray-300">
            <div className="mx-auto bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <FaPlus className="text-2xl text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No headers created
            </h3>
            <p className="text-gray-500 mb-4">
              Get started by creating your first header
            </p>
            <button
              onClick={() => openModal()}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg shadow-md transition-colors"
            >
              Create Header
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {headers.map((header) => (
              <div
                key={header.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl"
              >
                {header.image_url && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={header.image_url}
                      alt="Header"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 truncate">
                        {header.title}
                      </h3>
                      <h4 className="text-indigo-600 font-medium mt-1">
                        {header.subtitle}
                      </h4>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => openModal(header)}
                        className="text-gray-500 hover:text-indigo-600 p-2 rounded-full hover:bg-indigo-50 transition-colors"
                        title="Edit"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(header.id)}
                        className="text-gray-500 hover:text-red-600 p-2 rounded-full hover:bg-red-50 transition-colors"
                        title="Delete"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>

                  <p className="mt-3 text-gray-600 line-clamp-3">
                    {header.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b p-5 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800">
                {editing ? "Edit Header" : "Create New Header"}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
              >
                <FaTimes size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-5 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title*
                  </label>
                  <input
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 transition"
                    placeholder="Main title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subtitle
                  </label>
                  <input
                    name="subtitle"
                    value={formData.subtitle}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 transition"
                    placeholder="Subtitle text"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description*
                </label>
                <textarea
                  name="description"
                  rows="3"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 transition"
                  placeholder="Header description..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Header Image
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                    {formData.image_url ? (
                      <div className="relative w-full h-full">
                        <img
                          src={formData.image_url}
                          alt="Preview"
                          className="w-full h-full object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                          <span className="bg-white/80 text-gray-800 px-3 py-1 rounded-full text-sm">
                            Change Image
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <FaCloudUploadAlt className="w-10 h-10 text-gray-400 mb-3" />
                        <p className="text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          PNG, JPG, GIF (MAX. 5MB)
                        </p>
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md transition-colors duration-300 flex items-center gap-2"
                >
                  {editing ? "Update Header" : "Create Header"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
