import React from "react";
import { Volume2 } from "lucide-react";   // any icon you like

export default function TextToSpeech({ text, lang = "en-IN" }) {
  const speak = () => {
    if (!text) return;
    // Stop any current speech first
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = lang;
    window.speechSynthesis.speak(utter);
  };

  return (
    <button
      onClick={speak}
      className=" p-1 rounded-full hover:bg-white hover:shadow-md transition"
      title="Read aloud"
    >
      <Volume2 className="w-5 h-5 text-gray-600" />
    </button>
  );
}
