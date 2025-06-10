import React, { useEffect, useState, useCallback } from "react";
import {
  FaSearch,
  FaPlus,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaSpinner,
  FaCloudUploadAlt,
  FaUpload,
  FaSync,
  FaExclamationCircle,
} from "react-icons/fa";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

// Cloudinary configuration (should be in .env in production)
const CLOUD_NAME = "dny9v95td";
const UPLOAD_PRESET = "kangaroo";

export default function PostsPage() {
  // -------------- STATE --------------
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const initialForm = {
    title: "",
    description: "",
    published: "",
    category: "",
    image_url: "",
    status: "Pending",
  };
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [editing, setEditing] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // -------------- FETCH POSTS --------------
  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const resp = await axios.get("http://127.0.0.1:5000/api/posts", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPosts(resp.data);
    } catch (err) {
      console.error("Failed to fetch posts:", err);
      toast.error("Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  // -------------- SEARCH & FILTER --------------
  const filteredPosts = posts.filter((p) => {
    const lower = searchTerm.toLowerCase();
    return (
      p.title?.toLowerCase().includes(lower) ||
      p.category?.toLowerCase().includes(lower)
    );
  });

  // -------------- PAGINATION --------------
  const totalItems = filteredPosts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // -------------- MODAL HANDLERS --------------
  const openModal = () => {
    setFormData(initialForm);
    setImageFile(null);
    setImagePreview("");
    setErrors({});
    setEditing(null);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setErrors({});
  };

  // -------------- IMAGE HANDLING --------------
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // -------------- FORM HANDLING --------------
  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    let val;

    if (type === "checkbox") {
      val = checked;
    } else {
      val = value;
    }
    setFormData((prev) => ({ ...prev, [name]: val }));

    // Clear error when field changes
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const errs = {};
    if (!formData.title.trim()) errs.title = "Title is required";
    if (!formData.description.trim())
      errs.description = "Description is required";
    if (!formData.category.trim()) errs.category = "Category is required";
    if (!imageFile && !formData.image_url) errs.image = "Image is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const token = localStorage.getItem("token");
      let imageUrl = formData.image_url;

      // Upload new image if file exists
      if (imageFile) {
        const formData = new FormData();
        formData.append("file", imageFile);
        formData.append("upload_preset", UPLOAD_PRESET);

        const res = await axios.post(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
          formData
        );
        imageUrl = res.data.secure_url;
      }

      // Prepare data for API
      const postData = {
        ...formData,
        image_url: imageUrl,
        // Published date is handled as formatted string
        published: formData.published,
      };

      // Make API request
      if (editing) {
        await axios.put(
          `http://127.0.0.1:5000/api/posts/${editing.id}`,
          postData,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        toast.success("Post updated successfully");
      } else {
        await axios.post("http://127.0.0.1:5000/api/posts", postData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast.success("Post created successfully");
      }

      closeModal();
      fetchPosts();
    } catch (err) {
      console.error("Form submission failed:", err);
      setErrors({
        submit: "An error occurred. Please try again.",
      });
      toast.error("Failed to submit post");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEditClick = (post) => {
    setEditing(post);
    setFormData({
      title: post.title,
      description: post.description,
      published: post.published || "", // Use formatted string directly
      category: post.category,
      image_url: post.image_url,
      status: post.status || "Pending",
    });
    setImageFile(null);
    setImagePreview(post.image_url);
    setErrors({});
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://127.0.0.1:5000/api/posts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Post deleted successfully");
      fetchPosts();
    } catch (err) {
      console.error("Delete failed:", err);
      toast.error("Failed to delete post");
    }
  };

  // -------------- RENDER --------------
  return (
    <div className="space-y-6">
      <Toaster position="top-center" />
      {/* Header: Title + Search + Add New */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl font-semibold">Posts</h2>
        <div className="flex flex-col sm:flex-row gap-2">
          {/* Search */}
          <div className="relative">
            <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-72"
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
              {["ID", "Title", "Category", "Status", "Actions"].map((col) => (
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
              <td colSpan={5}>
                <div className="h-[2px] bg-pink-300 w-full"></div>
              </td>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-100">
            {loading ? (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center">
                  <div className="flex justify-center">
                    <FaSpinner className="animate-spin text-purple-600 text-2xl" />
                  </div>
                </td>
              </tr>
            ) : currentPosts.length > 0 ? (
              currentPosts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border text-sm text-gray-700">
                    # {post.id}
                  </td>
                  <td className="px-4 py-2 border text-sm text-gray-700">
                    {post.title}
                  </td>
                  <td className="px-4 py-2 border text-sm text-gray-700">
                    {post.category}
                  </td>
                  <td className="px-4 py-2 border text-sm text-gray-700">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        post.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {post.status}
                    </span>
                  </td>

                  <td className="px-4 py-2 border space-x-2">
                    <button
                      onClick={() => handleEditClick(post)}
                      className="px-3 py-1 bg-blue-700 text-white rounded hover:bg-blue-300 text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-4 text-center text-gray-500 italic"
                >
                  {searchTerm
                    ? "No matching posts found"
                    : "No posts available"}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {!loading && totalItems > 0 && (
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-700">
          <div>
            Showing {startIndex + 1} to {endIndex} of {totalItems} entries
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

      {/* ─────────────── MODAL ─────────────── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop with fade-in animation */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeModal}
          />

          {/* Modal container with scale-in animation */}
          <div className="relative z-10 w-full max-w-2xl mx-4 animate-scaleIn">
            <div className="bg-gradient-to-br from-white to-gray-50  shadow-xl overflow-hidden border border-gray-200/80 max-h-[90vh] flex flex-col">
              {/* Header with gradient background */}
              <div className="bg-blue-600 px-6 py-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    {editing ? "Edit Post" : "Create New Post"}
                  </h3>
                  <button
                    onClick={closeModal}
                    className="text-white/90 hover:text-white transition-transform hover:scale-110"
                    disabled={isSubmitting}
                  >
                    <FaTimes className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Form container */}
              <form
                onSubmit={handleFormSubmit}
                className="flex-1 overflow-y-auto"
              >
                <div className="px-6 py-6 space-y-6">
                  {/* Submission Error */}
                  {errors.submit && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start">
                      <FaExclamationCircle className="flex-shrink-0 mr-2 mt-0.5 text-red-500" />
                      <span>{errors.submit}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Title */}
                    <div className="md:col-span-2">
                      <FormInput
                        label="Title"
                        name="title"
                        value={formData.title}
                        onChange={handleFormChange}
                        error={errors.title}
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                      <FormTextarea
                        label="Description"
                        name="description"
                        value={formData.description}
                        onChange={handleFormChange}
                        error={errors.description}
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Category */}
                    <FormInput
                      label="Category"
                      name="category"
                      value={formData.category}
                      onChange={handleFormChange}
                      error={errors.category}
                      disabled={isSubmitting}
                    />

                    {/* Status */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-1.5">
                        Status <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="status"
                        value={formData.status}
                        onChange={handleFormChange}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none transition-colors text-sm ${
                          errors.status
                            ? "border-red-400 focus:ring-2 focus:ring-red-200"
                            : "border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                        }`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Ongoing">Ongoing</option>
                        <option value="Completed">Completed</option>
                      </select>
                      {errors.status && (
                        <p className="text-red-500 text-sm mt-1.5 flex items-center">
                          <FaExclamationCircle className="mr-1.5" />{" "}
                          {errors.status}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Published toggle */}
                  <PublishedDateInput
                    initialFormattedDate={formData.published}
                    onChange={handleFormChange}
                    disabled={isSubmitting}
                  />

                  {/* Image upload */}
                  <div className="pt-4">
                    <label className="block text-gray-700 font-medium mb-2">
                      Image <span className="text-red-500">*</span>
                    </label>

                    <div
                      className={`border-2 border-dashed rounded-xl p-4 text-center transition-colors ${
                        errors.image
                          ? "border-red-400 bg-red-50"
                          : "border-gray-300 hover:border-purple-400"
                      }`}
                    >
                      {imagePreview ? (
                        <div className="relative group">
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="max-w-full max-h-60 object-contain mx-auto rounded-lg"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                            <FaSync className="text-white text-2xl" />
                          </div>
                        </div>
                      ) : (
                        <div className="py-8">
                          <FaCloudUploadAlt className="mx-auto text-3xl text-gray-400 mb-3" />
                          <p className="text-gray-500 mb-2">
                            Drag & drop your image here
                          </p>
                          <p className="text-gray-400 text-sm">or</p>
                        </div>
                      )}

                      <label className="mt-4 cursor-pointer">
                        <span className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium text-sm transition-colors inline-flex items-center">
                          <FaUpload className="mr-2" />
                          Browse Files
                        </span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          disabled={isSubmitting}
                          className="hidden"
                        />
                      </label>
                      {errors.image && (
                        <p className="text-red-500 text-sm mt-2 flex items-center justify-center">
                          <FaExclamationCircle className="mr-1" />{" "}
                          {errors.image}
                        </p>
                      )}
                      <p className="text-xs text-gray-500 mt-2">
                        JPG, PNG up to 5MB
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-end pt-6 space-x-3 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={closeModal}
                      disabled={isSubmitting}
                      className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition font-medium flex items-center text-sm"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2.5 rounded-lg font-medium hover:opacity-90 transition disabled:opacity-70 flex items-center text-sm shadow-md hover:shadow-lg"
                    >
                      {isSubmitting && (
                        <FaSpinner className="animate-spin mr-2" />
                      )}
                      {editing ? "Update Post" : "Publish Post"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Enhanced Form Input Component
const FormInput = ({ label, name, value, onChange, error, disabled }) => (
  <div>
    <label className="block text-gray-700 font-medium mb-1.5">
      {label} <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none transition-colors text-sm ${
        error
          ? "border-red-400 focus:ring-2 focus:ring-red-200"
          : "border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
      }`}
    />
    {error && (
      <p className="text-red-500 text-sm mt-1.5 flex items-center">
        <FaExclamationCircle className="mr-1.5" /> {error}
      </p>
    )}
  </div>
);

// Enhanced Textarea Component
const FormTextarea = ({ label, name, value, onChange, error, disabled }) => (
  <div>
    <label className="block text-gray-700 font-medium mb-1.5">
      {label} <span className="text-red-500">*</span>
    </label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      rows={4}
      className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none transition-colors text-sm ${
        error
          ? "border-red-400 focus:ring-2 focus:ring-red-200"
          : "border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
      }`}
    />
    {error && (
      <p className="text-red-500 text-sm mt-1.5 flex items-center">
        <FaExclamationCircle className="mr-1.5" /> {error}
      </p>
    )}
  </div>
);

// Converts "June 18, 2019" => "2019-06-18" (date input format)
function formattedToDateInput(formatted) {
  if (!formatted) return "";
  const date = new Date(formatted);
  if (isNaN(date.getTime())) return "";
  // Format as YYYY-MM-DD with leading zeros
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// Converts "2019-06-18" => "June 18, 2019"
function dateInputToFormatted(dateInput) {
  if (!dateInput) return "";
  const date = new Date(dateInput);
  if (isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function PublishedDateInput({ initialFormattedDate, onChange, disabled }) {
  // Local state for date input value (YYYY-MM-DD)
  const [dateValue, setDateValue] = useState(() =>
    formattedToDateInput(initialFormattedDate)
  );

  // Update local dateValue if initialFormattedDate changes from parent
  useEffect(() => {
    setDateValue(formattedToDateInput(initialFormattedDate));
  }, [initialFormattedDate]);

  // When user changes input, convert to formatted and pass up
  function handleDateChange(e) {
    const newDateValue = e.target.value;
    setDateValue(newDateValue);

    // Convert to formatted string and send up
    const formatted = dateInputToFormatted(newDateValue);
    onChange({
      target: {
        name: "published",
        value: formatted,
      },
    });
  }

  return (
    <div className="flex flex-col pt-2">
      <label htmlFor="published" className="mb-1 text-gray-700 font-medium">
        Published Date
      </label>
      <input
        type="date"
        id="published"
        name="published"
        value={dateValue}
        onChange={handleDateChange}
        disabled={disabled}
        className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
      />
      <p className="mt-1 text-sm text-gray-500">
        Use the date picker to select the published date.
      </p>
    </div>
  );
}
