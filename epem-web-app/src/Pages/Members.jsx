// src/Pages/Members.jsx
import { useState, useEffect } from "react";

export default function Members() {
  const [members, setMembers] = useState([]);

  // Load saved members on page load
  useEffect(() => {
    const saved = localStorage.getItem("newMembers");
    if (saved) {
      setMembers(JSON.parse(saved));
    }
  }, []);

  const handleClear = () => {
    localStorage.removeItem("newMembers");
    setMembers([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-green-700 mb-6">
          📋 New Member Submissions
        </h1>

        {members.length === 0 ? (
          <p className="text-gray-600 text-center">No submissions found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="py-3 px-4 text-left">#</th>
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Email</th>
                  <th className="py-3 px-4 text-left">Phone</th>
                  <th className="py-3 px-4 text-left">Message</th>
                </tr>
              </thead>
              <tbody>
                {members.map((m, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{i + 1}</td>
                    <td className="py-2 px-4">{m.name}</td>
                    <td className="py-2 px-4">{m.email}</td>
                    <td className="py-2 px-4">{m.phone}</td>
                    <td className="py-2 px-4">{m.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {members.length > 0 && (
          <button
            onClick={handleClear}
            className="mt-6 w-full bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 transition"
          >
            🗑️ Clear All Submissions
          </button>
        )}
      </div>
    </div>
  );
}
