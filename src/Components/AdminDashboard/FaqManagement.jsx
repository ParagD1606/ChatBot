import React, { useState } from "react";
import qaData from "../qaData.json";
import { Upload } from "lucide-react";

const FaqManagement = () => {
  const [faqData, setFaqData] = useState(qaData);
  const [newQa, setNewQa] = useState({
    en: { question: "", answer: "", keywords: [] },
  });
  const [pdfFile, setPdfFile] = useState(null);

  const handleInputChange = (e, type) => {
    setNewQa((prev) => ({
      ...prev,
      en: { ...prev.en, [type]: e.target.value },
    }));
  };

  const handleAddQa = (e) => {
    e.preventDefault();
    const newEntry = {
      question: { en: newQa.en.question },
      answer: { en: newQa.en.answer },
      keywords: newQa.en.keywords,
    };

    // Simulate adding to the list
    setFaqData((prev) => [...prev, newEntry]);

    console.log("New QA submitted:", newEntry);
    alert("New Q&A added successfully! (Logged to console)");

    // Reset form fields
    setNewQa({
      en: { question: "", answer: "", keywords: [] },
    });
  };

  const handlePdfUpload = (e) => {
    e.preventDefault();
    if (!pdfFile) {
      alert("Please select a PDF file first.");
      return;
    }

    // Simulate file upload
    console.log("PDF file uploaded:", pdfFile.name, pdfFile);
    alert(`PDF file "${pdfFile.name}" uploaded successfully! (Logged to console)`);

    // Reset file input
    setPdfFile(null);
    e.target.reset();
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">FAQ Management</h1>
      <p className="text-gray-700">
        Add or remove frequently asked questions to improve chatbot accuracy.
      </p>

      {/* Existing Questions Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
        <h3 className="text-xl font-bold text-gray-700">Manage Chatbot Q&A</h3>
        <div className="bg-gray-100 p-4 rounded-lg max-h-64 overflow-y-auto">
          <h4 className="font-semibold mb-2">Existing Questions</h4>
          <ul className="space-y-2">
            {faqData.map((item, i) => (
              <li key={i} className="bg-white p-3 rounded shadow-sm">
                <p className="font-medium">Q: {item.question.en}</p>
                <p className="text-sm text-gray-500">A: {item.answer.en}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Add New Q&A Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <form onSubmit={handleAddQa} className="space-y-4">
          <h4 className="font-semibold text-gray-700">Add New Q&A</h4>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              English Question
            </label>
            <input
              type="text"
              value={newQa.en.question}
              onChange={(e) => handleInputChange(e, "question")}
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:ring-cyan-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              English Answer
            </label>
            <textarea
              rows="2"
              value={newQa.en.answer}
              onChange={(e) => handleInputChange(e, "answer")}
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:ring-cyan-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md text-white bg-cyan-600 hover:bg-cyan-700"
          >
            Add New Q&A
          </button>
        </form>
      </div>

      {/* PDF Upload Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
        <h4 className="font-semibold text-gray-700">Upload Knowledge Base PDF</h4>
        <form onSubmit={handlePdfUpload} className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Select a PDF file to add to the knowledge base:
          </label>
          <div className="mt-1 flex justify-center items-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-cyan-600 hover:text-cyan-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    accept=".pdf"
                    onChange={(e) => setPdfFile(e.target.files[0])}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PDF up to 10MB</p>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md text-white bg-cyan-600 hover:bg-cyan-700"
          >
            Process PDF
          </button>
        </form>
      </div>
    </div>
  );
};

export default FaqManagement;
