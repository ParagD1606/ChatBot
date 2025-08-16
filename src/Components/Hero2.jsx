import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroBg from '../assets/heroBg.jpg';

const words = ["Simple", "Effective", "Powerful"];

const Hero2 = () => {
  const navigate = useNavigate();

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const [count, setCount] = useState(200);
  const targetRef = useRef(Math.floor(Math.random() * (500 - 200 + 1)) + 200);

  const [Available, setAvailable] = useState("Available");
  const [waitTime, setWaitTime] = useState(null);

  useEffect(() => {
    const targetInterval = setInterval(() => {
      targetRef.current = Math.floor(Math.random() * (500 - 200 + 1)) + 200;
    }, 5000);

    const incrementInterval = setInterval(() => {
      setCount(prev => {
        if (prev < targetRef.current) return prev + 1;
        if (prev > targetRef.current) return prev - 1;
        return prev;
      });
    }, 1);

    return () => {
      clearInterval(targetInterval);
      clearInterval(incrementInterval);
    };
  }, []);

  useEffect(() => {
    if (count > 300) {
      setAvailable("Not Available");
      setWaitTime(Math.floor(Math.random() * (20 - 5 + 1)) + 5);
    } else {
      setAvailable("Available");
      setWaitTime(null);
    }
  }, [count]);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingSpeed = isDeleting ? 50 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex(prev => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <div className="relative">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
            <span className="block mb-2">Real-time Mess Updates</span>
            <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              Made {text}
              <span className="border-r-2 border-white animate-pulse ml-1"></span>
            </span>
          </h1>

          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed text-gray-200">
            Stay informed with our real-time mess queue tracker.
            Get instant updates on queue length, estimated wait times, and menu availability so you can plan your meals smarter and save valuable time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate('/menu')}
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="mr-2">🍱</span>
              Todays Menu
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </button>

            <button
              onClick={() =>
                document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg border-2 text-white border-gray-300 hover:border-gray-400 hover:bg-gray-50 hover:text-black dark:text-white dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-700 transition duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Current Status
            </button>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Powerful Features for Smarter Dining</h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-600 dark:text-gray-300">
              Everything you need to know your mess status and plan your meals efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '📈', title: 'Waiting-time Analytics', description: <h1>{Available === "Not Available" && `approx ${waitTime} mins`}</h1> },
              { icon: '👥', title: 'Current Crowd', description: <h1>{count}</h1> },
              { icon: '⏳', title: 'Availability', description: <h1>{Available}</h1> },
            ].map((feature) => (
              <div key={feature.title} className="p-8 rounded-2xl transition duration-300 hover:shadow-lg hover:scale-105 bg-white hover:bg-gray-50 shadow-sm dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="leading-relaxed text-slate-700 font-semi-bold text-3xl dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero2;