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
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  const fetchHeaders = async () => {
    setFetching(true);
    try {
      const res = await axios.get(
        "https://kangaroobackend.onrender.com/api/headers"
      );
      setHeaders(res.data);
    } catch (err) {
      toast.error("Failed to load headers");
    } finally {
      setFetching(false);
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

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image must be under 5MB");
      return;
    }

    const toastId = toast.loading("Uploading...");
    try {
      const uploadData = new FormData();
      uploadData.append("file", file);
      uploadData.append("upload_preset", "kangaroo");
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dny9v95td/image/upload",
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
    setLoading(true);
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
      closeModal();
    } catch (err) {
      toast.error("Failed to save header");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this header?")) return;
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

  const closeModal = () => {
    setShowModal(false);
    setEditing(null);
    setFormData({
      title: "",
      subtitle: "",
      description: "",
      image_url: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Header Management
            </h1>
            <p className="text-gray-600 mt-1">
              Create and manage homepage headers
            </p>
          </div>
          <button
            onClick={() => openModal()}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg shadow-md transition-all"
          >
            <FaPlus className="text-sm" /> Create New Header
          </button>
        </div>

        {fetching ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-500 border-t-transparent mx-auto mb-4"></div>
            <p className="text-gray-600">Loading headers...</p>
          </div>
        ) : headers.length === 0 ? (
          <div className="bg-white rounded-xl p-8 text-center border-2 border-dashed border-gray-300">
            <FaPlus className="text-3xl text-gray-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              No headers created
            </h3>
            <p className="text-gray-500 mb-4">
              Get started by creating your first header
            </p>
            <button
              onClick={() => openModal()}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg"
            >
              Create Header
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {headers.map((header) => (
              <div
                key={header.id}
                className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all"
              >
                {header.image_url && (
                  <img
                    src={header.image_url}
                    alt="Header"
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 truncate">
                        {header.title}
                      </h3>
                      <p className="text-indigo-600">{header.subtitle}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => openModal(header)}
                        className="text-gray-500 hover:text-indigo-600 p-2 rounded-full hover:bg-indigo-50"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(header.id)}
                        className="text-gray-500 hover:text-red-600 p-2 rounded-full hover:bg-red-50"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-3">
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
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b p-5 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800">
                {editing ? "Edit Header" : "Create Header"}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600"
              >
                <FaTimes />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-5 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Title*
                  </label>
                  <input
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="Enter title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Subtitle
                  </label>
                  <input
                    name="subtitle"
                    value={formData.subtitle}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="Optional subtitle"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Description*
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Image Upload
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                />
                {formData.image_url && (
                  <img
                    src={formData.image_url}
                    alt="Preview"
                    className="w-full h-48 object-cover mt-4 rounded-md border"
                  />
                )}
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-6 py-2 ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-indigo-600 hover:bg-indigo-700"
                  } text-white rounded-lg`}
                >
                  {loading
                    ? editing
                      ? "Updating..."
                      : "Creating..."
                    : editing
                    ? "Update Header"
                    : "Create Header"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
