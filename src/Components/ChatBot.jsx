import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Bot,
  Send,
  Menu,
  X,
  HomeIcon,
  Plus,
  FileText,
  PhoneCallIcon,
  MailIcon,
  Image as ImageIcon,
  GraduationCap,
  Trash2,
  MessageCircle,
} from "lucide-react";
import TypingIndicator from "./TypingIndecator";
import VoiceToText from "./VoiceToText";
import TextToSpeech from "./TextToSpeech";
import ProfilePic from "../assets/ProfilePic.jpeg"; // your profile pic
import qaData from "./qaData.json"; // your JSON

const translations = {
  en: { label: "English", welcome1: "Hello! How can I help you today?", prototype: "This is a prototype response 🤖" },
  hi: { label: "हिंदी", welcome1: "नमस्ते! मैं आज आपकी कैसे मदद कर सकता हूँ?", prototype: "यह एक प्रोटोटाइप उत्तर है 🤖" },
  mr: { label: "मराठी", welcome1: "नमस्कार! मी आज तुमची कशी मदत करू शकतो?", prototype: "हा एक प्रोटोटाइप प्रतिसाद आहे 🤖" },
  gu: { label: "ગુજરાતી", welcome1: "નમસ્તે! આજે હું તમારી કેવી રીતે મદદ કરી શકું?", prototype: "આ એક પ્રોટોટાઇપ જવાબ છે 🤖" },
  rj: { label: "राजस्थानी", welcome1: "राम राम सा! आज म्हारो थारी किमें मदद करूं?", prototype: "यो एक प्रोटोटाइप जवाब है 🤖" },
  mw: { label: "मारवाड़ी", welcome1: "खम्मा घणी! आज थारी किमें मदद करूं?", prototype: "ई एक प्रोटोटाइप जवाब है 🤖" },
};

const languageMap = { en: "en-IN", hi: "hi-IN", mr: "mr-IN", gu: "gu-IN", rj: "hi-IN", mw: "hi-IN" };

export default function ChatBot() {
  const [language, setLanguage] = useState("en");
  const [chatSessions, setChatSessions] = useState([
    { id: Date.now(), title: "Welcome", messages: [{ sender: "bot", text: translations.en.welcome1 }] },
  ]);
  const [activeId, setActiveId] = useState(chatSessions[0].id);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  // 🔽 ref for auto-scroll
  const bottomRef = useRef(null);

  const activeChat = chatSessions.find((c) => c.id === activeId) || chatSessions[0];

  // 🔽 scroll to bottom whenever messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeChat.messages]);

  // ---------------- JSON Q&A Lookup ----------------
  const findAnswer = (userInput, lang) => {
    const text = userInput.trim().toLowerCase();

    for (const qa of qaData) {
      // 1️⃣ Check keywords first
      if (qa.keywords && qa.keywords.some(kw => text.includes(kw.toLowerCase()))) {
        return qa.answer[lang];
      }

      // 2️⃣ Fallback: match the localized question exactly/partially
      const qText = qa.question[lang].toLowerCase();
      if (text.includes(qText)) {
        return qa.answer[lang];
      }
    }

    return translations[lang].prototype;
  };
  // ------------------------------------------------

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    let updated = chatSessions.map((c) =>
      c.id === activeId ? { ...c, messages: [...c.messages, userMsg] } : c
    );

    const current = updated.find((c) => c.id === activeId);
    if (current.messages.filter((m) => m.sender === "user").length === 1) {
      const title = input.length > 20 ? input.slice(0, 20) + "…" : input;
      updated = updated.map((c) =>
        c.id === activeId ? { ...c, title } : c
      );
    }

    setChatSessions(updated);
    const tempInput = input;
    setInput("");
    botReply(tempInput);
  };

  useEffect(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return;
    const rec = new SR();
    rec.lang = languageMap[language];
    rec.interimResults = false;
    rec.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      setInput((prev) => (prev ? prev + " " + transcript : transcript));
    };
    rec.onend = () => setListening(false);
    recognitionRef.current = rec;
  }, [language]);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert("Speech recognition not supported.");
      return;
    }
    if (listening) recognitionRef.current.stop();
    else {
      recognitionRef.current.start();
      setListening(true);
    }
  };

  const botReply = (userText = "") => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const botText =
        userText === "image_uploaded"
          ? findAnswer("image_uploaded", language)
          : findAnswer(userText, language);
      setChatSessions((prev) =>
        prev.map((c) =>
          c.id === activeId
            ? { ...c, messages: [...c.messages, { sender: "bot", text: botText }] }
            : c
        )
      );
    }, 1200);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const imageMsg = { sender: "user", image: reader.result };
      setChatSessions((prev) =>
        prev.map((c) =>
          c.id === activeId ? { ...c, messages: [...c.messages, imageMsg] } : c
        )
      );
      botReply("image_uploaded");
    };
    reader.readAsDataURL(file);
  };

  const startNewChat = () => {
    const newChat = {
      id: Date.now(),
      title: "New Chat",
      messages: [{ sender: "bot", text: translations[language].welcome1 }],
    };
    setChatSessions((prev) => [...prev, newChat]);
    setActiveId(newChat.id);
    setSidebarOpen(false); // Close sidebar on mobile after starting new chat
  };

  const deleteChat = (e, id) => {
    e.stopPropagation(); // Prevents the parent button from triggering
    setChatSessions((prev) => {
      const filteredChats = prev.filter((chat) => chat.id !== id);
      if (filteredChats.length === 0) {
        // If all chats are deleted, start a new one
        startNewChat();
        return [];
      }
      if (activeId === id) {
        setActiveId(filteredChats[0].id);
      }
      return filteredChats;
    });
  };

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    setChatSessions((prev) =>
      prev.map((c) =>
        c.id === activeId && c.messages.length === 1
          ? { ...c, messages: [{ sender: "bot", text: translations[newLang].welcome1 }] }
          : c
      )
    );
  };

  return (
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "block" : "hidden"
        } md:flex fixed md:static inset-0 md:inset-auto z-20 w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white flex-col`}
      >
        <div className="flex items-center justify-between px-4 py-5 font-bold text-xl border-b border-white/10">
          <div className="flex items-center gap-2">
            <Bot className="w-6 h-6 text-blue-400" /> SAHAYAK
          </div>
          <button className="md:hidden p-2 rounded-full hover:bg-white/10" onClick={() => setSidebarOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4">
          <button
            onClick={startNewChat}
            className="flex items-center gap-2 w-full px-4 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
          >
            <Plus className="w-5 h-5" /> New Chat
          </button>
        </div>
        <div className="flex-1 overflow-y-auto space-y-2 px-2 pb-2">
          {chatSessions.map((chat) => (
            <button
              key={chat.id}
              onClick={() => {
                setActiveId(chat.id);
                setSidebarOpen(false);
              }}
              className={`relative flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg transition group ${
                activeId === chat.id
                  ? "bg-gray-700 text-white font-semibold"
                  : "hover:bg-gray-700/50 text-gray-300"
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              <span className="flex-1 whitespace-nowrap overflow-hidden text-ellipsis">
                {chat.title}
              </span>
              <Trash2
                onClick={(e) => deleteChat(e, chat.id)}
                className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity absolute right-4"
              />
            </button>
          ))}
        </div>
        <div className="border-t border-white/10 p-4">
          <div className="flex items-center gap-3 mb-4">
            <img src={ProfilePic} alt="Profile" className="w-9 h-9 rounded-full border-2 border-blue-400" />
            <span className="text-md font-semibold text-white">Student User</span>
          </div>
          <Link
            to="/"
            className="flex items-center gap-3 hover:bg-white/10 px-3 py-2 rounded-lg transition"
          >
            <HomeIcon className="w-5 h-5 text-gray-300" /> Home
          </Link>
        </div>
      </div>

      {/* Chat Area - rest of your component */}
      <div className="flex-1 flex flex-col">
        {/* ... (rest of the ChatBot component) ... */}
        <div className="bg-white px-4 py-3 shadow flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-1 rounded hover:bg-gray-200"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
            <h1 className="font-bold text-gray-700 text-xl">SAHAYAK</h1>
          </div>
          <select
            value={language}
            onChange={handleLanguageChange}
            className="border border-gray-300 rounded-lg px-3 py-1 bg-gray-100 hover:bg-gray-200 focus:outline-none"
          >
            {Object.keys(translations).map((key) => (
              <option key={key} value={key}>
                {translations[key].label}
              </option>
            ))}
          </select>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-tr from-blue-200 through-white to-pink-100">
          {activeChat.messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender === "bot" && (
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mr-3 shrink-0">
                  <Bot className="w-5 h-5 text-gray-600" />
                </div>
              )}
              <div
                className={`px-4 py-3 rounded-2xl max-w-xs shadow-lg break-words ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-gray-50 text-gray-800 rounded-bl-none"
                }`}
              >
                {msg.image ? (
                  <img
                    src={msg.image}
                    alt="uploaded"
                    className="rounded-lg max-w-full shadow-sm"
                  />
                ) : (
                  <>
                    <span className="block">{msg.text}</span>
                    {msg.sender === "bot" && (
                      <div className="mt-2 flex justify-start">
                        <TextToSpeech
                          text={msg.text}
                          lang={languageMap[language]}
                        />
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}

          {isTyping && <TypingIndicator />}

          {/* 🔽 Scroll target for auto-scroll */}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="border-t p-3 flex items-center bg-white">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type a message..."
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
          <label
            htmlFor="image-upload"
            className="ml-2 p-2 cursor-pointer rounded-full hover:bg-gray-200"
            title="Send image"
          >
            <ImageIcon className="w-5 h-5 text-gray-600" />
          </label>
          <VoiceToText
            onResult={(text) => setInput((prev) => (prev ? prev + " " + text : text))}
          />
          <button
            onClick={handleSend}
            className="ml-2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="hidden lg:flex flex-col w-64 bg-[#F1F5F9] border-l border-gray-300">
        <div className="bg-white m-4 p-4 rounded-2xl shadow-md flex flex-col items-center">
          <div className="flex items-center justify-center mb-3">
            <FileText className="w-6 h-6 mr-2 text-blue-700" />
            <h1 className="font-semibold text-lg text-gray-700">
              Quick Questions
            </h1>
          </div>
          <ul className="flex-1 w-full px-2 py-2 overflow-y-auto space-y-2">
            {qaData.map((qa, idx) => (
              <li key={idx}>
                <button
                  onClick={() => {
                    const questionText = qa.question[language];
                    setInput(questionText);
                    setTimeout(() => handleSend(), 100);
                  }}
                  className="w-full p-3 rounded-xl hover:bg-blue-50 transition text-gray-800 text-left shadow-sm"
                >
                  {qa.question[language]}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white m-4 p-4 rounded-2xl shadow-md flex flex-col items-center">
          <div className="flex items-center justify-center mb-3">
            <PhoneCallIcon className="w-5 h-5 mr-2 text-green-700" />
            <h1 className="font-semibold text-lg text-gray-700">
              Contact Details
            </h1>
          </div>
          <ul className="flex-1 w-full px-2 py-2 overflow-y-auto space-y-2">
            <li>
              <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition text-gray-800 text-left shadow-sm">
                <PhoneCallIcon className="w-5 h-5 text-blue-600" /> Call Office
              </button>
            </li>
            <li>
              <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition text-gray-800 text-left shadow-sm">
                <MailIcon className="w-5 h-5 text-blue-600" /> Send Email
              </button>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-blue-500 m-4 p-4 rounded-2xl shadow-md flex flex-col items-center">
          <GraduationCap className="w-6 h-6 text-white mb-2" />
        </div>
      </div>
    </div>
  );
}