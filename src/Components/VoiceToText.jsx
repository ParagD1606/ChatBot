import React, { useEffect, useRef, useState } from "react";
import { Mic as MicIcon, MicOff as MicOffIcon } from "lucide-react";

export default function VoiceToText({ onResult }) {
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return;
    const rec = new SR();
    rec.lang = "en-IN";
    rec.interimResults = false;
    rec.onresult = e => onResult(e.results[0][0].transcript);
    rec.onend = () => setListening(false);
    recognitionRef.current = rec;
  }, [onResult]);

  const toggle = () => {
    if (!recognitionRef.current) {
      alert("Speech recognition not supported");
      return;
    }
    if (listening) recognitionRef.current.stop();
    else {
      recognitionRef.current.start();
      setListening(true);
    }
  };

  return (
    <button
      onClick={toggle}
      className={`p-2 rounded-full ${listening ? "bg-red-500" : "bg-gray-200"}`}
    >
      {listening ? <MicOffIcon className="w-5 h-5 text-white"/> :
                   <MicIcon className="w-5 h-5 text-gray-700"/>}
    </button>
  );
}
