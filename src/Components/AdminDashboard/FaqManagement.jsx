import React, { useState } from "react";
import qaData from "./qaData.json";

const FaqManagement = () => {
  const [newQa, setNewQa] = useState({
    en: { question: "", answer: "" },
    hi: { question: "", answer: "" },
  });

  const handleInputChange = (e, lang, type) => {
    setNewQa(prev => ({ ...prev, [lang]: { ...prev[lang], [type]: e.target.value } }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New QA submitted:", newQa);
    alert("New QA logged in console");
    setNewQa({ en: { question: "", answer: "" }, hi: { question: "", answer: "" } });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">FAQ Management</h1>
      <p className="text-gray-700">Add or remove frequently asked questions to improve chatbot accuracy.</p>

      <div className="bg-white p-6 rounded-lg shadow space-y-6">
        <h3 className="text-lg font-bold text-gray-700">Manage Chatbot Q&A</h3>
        <div className="bg-gray-100 p-4 rounded-lg max-h-64 overflow-y-auto">
          <h4 className="font-semibold mb-2">Existing Questions</h4>
          <ul className="space-y-2">
            {qaData.map((item, i) => (
              <li key={i} className="bg-white p-3 rounded shadow-sm">
                <p className="font-medium">Q: {item.question.en}</p>
                <p className="text-sm text-gray-500">A: {item.answer.en}</p>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">English Question</label>
            <input
              type="text"
              value={newQa.en.question}
              onChange={(e) => handleInputChange(e, "en", "question")}
              className="mt-1 w-full rounded border-gray-300 shadow-sm focus:ring-cyan-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">English Answer</label>
            <textarea
              rows="2"
              value={newQa.en.answer}
              onChange={(e) => handleInputChange(e, "en", "answer")}
              className="mt-1 w-full rounded border-gray-300 shadow-sm focus:ring-cyan-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Hindi Question</label>
            <input
              type="text"
              value={newQa.hi.question}
              onChange={(e) => handleInputChange(e, "hi", "question")}
              className="mt-1 w-full rounded border-gray-300 shadow-sm focus:ring-cyan-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Hindi Answer</label>
            <textarea
              rows="2"
              value={newQa.hi.answer}
              onChange={(e) => handleInputChange(e, "hi", "answer")}
              className="mt-1 w-full rounded border-gray-300 shadow-sm focus:ring-cyan-500"
              required
            />
          </div>
          <button type="submit" className="w-full py-2 px-4 rounded text-white bg-cyan-600 hover:bg-cyan-700">
            Add New Q&A
          </button>
        </form>
      </div>
    </div>
  );
};

export default FaqManagement;
