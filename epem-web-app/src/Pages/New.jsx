// src/Pages/New.jsx
import { useState, useEffect } from "react";

export default function New() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submissions, setSubmissions] = useState([]);

  // Load saved submissions when page loads
  useEffect(() => {
    const saved = localStorage.getItem("newMembers");
    if (saved) {
      setSubmissions(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updated = [...submissions, form];
    setSubmissions(updated);

    // Save to localStorage
    localStorage.setItem("newMembers", JSON.stringify(updated));

    // Reset form
    setForm({ name: "", email: "", phone: "", message: "" });
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 3000); // hide success after 3s
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-green-700 mb-4">
          Welcome to EPEM Church!
        </h1>
        <p className="text-gray-700 mb-6">
          We’re so glad you’re here. Whether you’re visiting for the first time
          or looking for a church family, we want to connect with you. Please
          fill out the form below so we can reach out and share more about our
          church.
        </p>

        {submitted && (
          <div className="bg-green-100 text-green-800 p-4 rounded-xl text-center font-semibold mb-4">
            🎉 Thank you for connecting with us! We’ll reach out soon.
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-500"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-500"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-500"
              placeholder="Tell us a little about yourself"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition"
          >
            Submit
          </button>
        </form>

        {/* Show submissions (for admin preview) */}
        {submissions.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Saved New Members:
            </h2>
            <ul className="space-y-2">
              {submissions.map((s, i) => (
                <li
                  key={i}
                  className="p-3 border rounded-xl bg-gray-50 text-gray-700"
                >
                  <strong>{s.name}</strong> ({s.email}, {s.phone}) <br />
                  <em>{s.message}</em>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-8 text-center text-gray-600">
          <p>
            👉 Join us this Sunday at <span className="font-semibold">9:00 AM</span>  
            for our worship service.
          </p>
          <p className="mt-2">We can’t wait to meet you!</p>
        </div>
      </div>
    </div>
  );
}
