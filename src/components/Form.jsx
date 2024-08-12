import React, { useState } from "react";
import axios from "axios"; 
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    concern: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://wizarding-media.onrender.com/api/form/submit", {
        name: formData.name,
        contact: formData.number, 
        email: formData.email,
        concern: formData.concern,
      });

      console.log("Form submitted successfully:", response.status);
      if (response.status===201) {
        setFormData({
          name: "",
          number: "",
          email: "",
          concern: "",
        })
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <div className="p-4 m-6  max-w-md md:mx-auto bg-white border rounded shadow-md">
      <form onSubmit={handleSubmit}>
        <ul className="space-y-4">
          <li>
            <label htmlFor="name" className="block text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </li>
          <li>
            <label htmlFor="number" className="block text-gray-700">
              Number:
            </label>
            <input
              type="tel"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </li>
          <li>
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </li>
          <li>
            <label htmlFor="concern" className="block text-gray-700">
              Concern:
            </label>
            <textarea
              id="concern"
              name="concern"
              value={formData.concern}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              rows="4"
              required
            />
          </li>
          <li>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Form;
