import React, { useEffect, useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { FaEdit, FaTimes, FaUpload } from "react-icons/fa";

export default function MissionVisionPage() {
  const [data, setData] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    icon: "",
    text: "",
    image_url: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        "https://kangaroobackend.onrender.com/api/mission-vision"
      );
      setData(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch mission and vision");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openModal = (item) => {
    setEditingItem(item);
    setFormData({ ...item });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingItem(null);
    setFormData({ title: "", icon: "", text: "", image_url: "" });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpload = async (e, field) => {
    const file = e.target.files[0];
    if (!file) return;
    const toastId = toast.loading("Uploading image...");
    try {
      const uploadData = new FormData();
      uploadData.append("file", file);
      uploadData.append("upload_preset", "kangaroo"); // 🔁 Replace with your upload preset
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dny9v95td/image/upload", // 🔁 Replace with your cloud name
        uploadData
      );
      setFormData((prev) => ({ ...prev, [field]: res.data.secure_url }));
      toast.success("Image uploaded successfully", { id: toastId });
    } catch (err) {
      toast.error("Image upload failed", { id: toastId });
      console.error(err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        "https://kangaroobackend.onrender.com/api/mission-vision",
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Updated successfully");
      fetchData();
      closeModal();
    } catch (err) {
      console.error(err);
      toast.error("Update failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-right" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Mission & Vision
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-gray-500 sm:mt-4">
            Manage your organization's mission and vision statements
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {data.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center mb-4">
                      {item.icon?.startsWith("http") ? (
                        <div className="bg-purple-100 p-3 rounded-lg mr-4">
                          <img
                            src={item.icon}
                            alt="icon"
                            className="w-10 h-10 object-contain"
                          />
                        </div>
                      ) : (
                        <div className="bg-purple-100 text-purple-800 p-3 rounded-lg mr-4 text-xl">
                          {item.icon}
                        </div>
                      )}
                      <h3 className="text-xl font-bold text-gray-900">
                        {item.title}
                      </h3>
                    </div>
                    <button
                      onClick={() => openModal(item)}
                      className="text-gray-400 hover:text-purple-600 transition-colors p-2 rounded-full hover:bg-purple-50"
                      aria-label="Edit"
                    >
                      <FaEdit className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 whitespace-pre-line">
                      {item.text}
                    </p>
                  </div>
                </div>

                {item.image_url && (
                  <div className="overflow-hidden">
                    <img
                      src={item.image_url}
                      alt="Mission or Vision"
                      className="w-full h-60 object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white z-10 border-b p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-900">
                Edit {formData.title}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleUpdate} className="p-6 space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Icon
                  </label>
                  <div className="flex space-x-3">
                    <input
                      type="text"
                      name="icon"
                      value={formData.icon}
                      onChange={handleFormChange}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Icon text or URL"
                    />
                    <label className="relative cursor-pointer bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center">
                      <FaUpload className="mr-2" />
                      Upload
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleUpload(e, "icon")}
                        className="sr-only"
                      />
                    </label>
                  </div>
                  {formData.icon && formData.icon.startsWith("http") && (
                    <div className="mt-3 flex items-center">
                      <span className="text-sm text-gray-500 mr-3">
                        Preview:
                      </span>
                      <img
                        src={formData.icon}
                        alt="icon preview"
                        className="w-10 h-10 object-contain border border-gray-200 rounded-lg"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  name="text"
                  rows="6"
                  value={formData.text}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Featured Image
                </label>
                <div className="flex items-center space-x-4">
                  <label className="relative cursor-pointer bg-gray-100 text-gray-700 px-6 py-3 rounded-lg border border-dashed border-gray-300 hover:bg-gray-200 transition-colors flex items-center w-full">
                    <FaUpload className="mr-3 text-gray-500" />
                    <span className="text-gray-600">
                      {formData.image_url ? "Change Image" : "Upload Image"}
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleUpload(e, "image_url")}
                      className="sr-only"
                    />
                  </label>
                </div>
                {formData.image_url && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 mb-2">Image Preview:</p>
                    <img
                      src={formData.image_url}
                      alt="preview"
                      className="rounded-xl border border-gray-200 max-h-60 object-contain"
                    />
                  </div>
                )}
              </div>

              <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow hover:shadow-md transition-all hover:opacity-90"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
