import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaSearch,
  FaPlus,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";

export default function TeamPage() {
  const [team, setTeam] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    image_url: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [editing, setEditing] = useState(null);

  const fetchTeam = async () => {
    try {
      const res = await axios.get(
        "https://kangaroobackend.onrender.com/api/team"
      );
      setTeam(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch team");
    }
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  const openModal = () => {
    setFormData({ name: "", position: "", image_url: "" });
    setImageFile(null);
    setEditing(null);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async () => {
    if (!imageFile) return formData.image_url;
    const data = new FormData();
    data.append("file", imageFile);
    data.append("upload_preset", "kangaroo");
    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dny9v95td/image/upload",
        data
      );
      return res.data.secure_url;
    } catch (err) {
      console.error("Upload failed", err);
      toast.error("Image upload failed");
      return formData.image_url;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const image_url = await handleImageUpload();
    const payload = { ...formData, image_url };
    try {
      if (editing) {
        await axios.put(
          `https://kangaroobackend.onrender.com/api/team/${editing.id}`,
          payload,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        toast.success("Team member updated");
      } else {
        await axios.post(
          "https://kangaroobackend.onrender.com/api/team",
          payload,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        toast.success("Team member created");
      }
      fetchTeam();
      closeModal();
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  const handleEdit = (member) => {
    setEditing(member);
    setFormData({
      name: member.name,
      position: member.position,
      image_url: member.image_url,
    });
    setImageFile(null);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(
        `https://kangaroobackend.onrender.com/api/team/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Deleted");
      fetchTeam();
    } catch (err) {
      toast.error(`Failed to delete${err.message}`);
    }
  };

  const filtered = team.filter((m) =>
    `${m.name} ${m.position}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <Toaster />
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Team Members</h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border px-4 py-2 rounded-md"
          />
          <button
            onClick={openModal}
            className="bg-purple-600 text-white px-4 py-2 rounded-md"
          >
            <FaPlus className="inline mr-1" /> Add
          </button>
        </div>
      </div>

      <table className="min-w-full bg-white shadow">
        <thead>
          <tr>
            <th className="text-left py-2 px-4">Image</th>
            <th className="text-left py-2 px-4">Name</th>
            <th className="text-left py-2 px-4">Position</th>
            <th className="text-left py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((member) => (
            <tr key={member.id} className="hover:bg-gray-50">
              <td className="py-2 px-4">
                <img
                  src={member.image_url}
                  alt="avatar"
                  className="w-12 h-12 object-cover rounded-full"
                />
              </td>
              <td className="py-2 px-4">{member.name}</td>
              <td className="py-2 px-4">{member.position}</td>
              <td className="py-2 px-4 space-x-2">
                <button
                  className="bg-blue-600 text-white px-2 py-1 rounded"
                  onClick={() => handleEdit(member)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-600 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(member.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">
                {editing ? "Edit Member" : "Add Member"}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600"
              >
                <FaTimes />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Position</label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files[0])}
                  className="w-full border rounded px-4 py-2"
                />
                {formData.image_url && (
                  <img
                    src={formData.image_url}
                    alt="preview"
                    className="w-20 h-20 rounded-full mt-2 object-cover"
                  />
                )}
              </div>
              <button
                type="submit"
                className="bg-purple-600 text-white px-4 py-2 rounded w-full"
              >
                {editing ? "Update" : "Create"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
