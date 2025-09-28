// src/utils/translate.js
import axios from "axios";

// Translate text from English to a target language using LibreTranslate
export async function translateText(text, targetLang) {
  const res = await axios.post("https://libretranslate.com/translate", {
    q: text,
    source: "en",
    target: targetLang,
    format: "text",
  }, { headers: { accept: "application/json" } });

  return res.data.translatedText;
}
