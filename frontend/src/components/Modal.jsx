import React, { useState } from "react";
import axios from "axios";

function Modal({ show }) {
  const [formData, setFormData] = useState({
    name: "",
    points: 0,
  });
  const handleChange = (e) => {
    const {name,value}=e.target;
    setFormData({
      ...formData,
      [name]: name === "points" ? Number(value) : value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://leaderboard-backend-hc7r.onrender.com//user", formData,{
        withCredentials:true
      });
      show(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-20 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-96">
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl text-amber-500 font-bold mb-4">
            Add New User
          </h2>

          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter name" className="w-full p-2 border border-gray-300 rounded mb-3"
            required
          />

          <input type="number" name="points" value={formData.points} onChange={handleChange} placeholder="Enter points" className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          />

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => show(false)}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
