// src/Pages/Events.jsx
import { useState, useEffect } from "react";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventId: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  useEffect(() => {
    // Mock data — replace with API later
    const sampleEvents = [
      {
        id: 1,
        title: "Sunday Worship Service",
        date: "2025-08-25",
        time: "9:00 AM",
        location: "EPEM Main Auditorium",
      },
      {
        id: 2,
        title: "Youth Prayer Night",
        date: "2025-08-30",
        time: "6:00 PM",
        location: "Youth Hall",
      },
      {
        id: 3,
        title: "Bible Study & Discipleship",
        date: "2025-09-02",
        time: "7:00 PM",
        location: "Conference Room",
      },
    ];
    setEvents(sampleEvents);
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form
  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      tempErrors.email = "Valid email is required";
    if (!formData.phone.match(/^\d{10}$/))
      tempErrors.phone = "Valid 10-digit phone number required";
    if (!formData.eventId) tempErrors.eventId = "Please select an event";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Normally, send to backend here
    console.log("Form Submitted:", formData);

    setSuccess(
      `Thank you, ${formData.name}! You have registered for ${
        events.find((ev) => ev.id === parseInt(formData.eventId))?.title
      }.`
    );

    // Reset form
    setFormData({ name: "", email: "", phone: "", eventId: "" });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-10">
        Upcoming Events
      </h1>

      {/* Events Section */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mb-16">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-green-800">
              {event.title}
            </h2>
            <p className="text-gray-600 mt-1">
              {event.date} • {event.time}
            </p>
            <p className="text-gray-500 mt-2">{event.location}</p>
          </div>
        ))}
      </div>

      {/* Registration Form */}
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Register for an Event
        </h2>

        {success && (
          <p className="mb-4 text-green-600 font-medium text-center">
            {success}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Select Event
            </label>
            <select
              name="eventId"
              value={formData.eventId}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            >
              <option value="">-- Choose an event --</option>
              {events.map((event) => (
                <option key={event.id} value={event.id}>
                  {event.title} ({event.date})
                </option>
              ))}
            </select>
            {errors.eventId && (
              <p className="text-red-500 text-sm mt-1">{errors.eventId}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
