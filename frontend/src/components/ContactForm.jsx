import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    mobile: "",
    city: "",
    comments: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch(
        "https://abhi-chem-backend.onrender.com/api/contact",  // <-- Replace with your Render URL
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("Thank you! We’ll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          company: "",
          mobile: "",
          city: "",
          comments: "",
        });
      } else {
        setStatus("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Server error. Please try again later.");
    }
  };

  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-emerald-800 mb-6">Contact Us</h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border rounded"
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company (optional)"
            value={formData.company}
            onChange={handleChange}
            className="p-3 border rounded"
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="p-3 border rounded"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="p-3 border rounded"
          />
          <textarea
            name="comments"
            placeholder="Message"
            value={formData.comments}
            onChange={handleChange}
            className="p-3 border rounded md:col-span-2"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-emerald-600 text-white px-6 py-3 rounded hover:bg-emerald-700 md:col-span-2"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
      </div>
    </section>
  );
}
