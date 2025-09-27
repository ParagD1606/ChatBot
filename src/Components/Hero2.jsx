import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/bgImage.jpg';

// ✅ Lucide icons
import {
  MessageSquare,
  ArrowRight,
  Globe,
  Users,
  Clock,
  BarChart3,
  Shield,
  MessageCircle,
} from 'lucide-react';

const words = ['Simple', 'Effective', 'Quick'];

const Hero2 = () => {
  const navigate = useNavigate();

  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 50 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev)  => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  const features = [
    {
      icon: <Globe className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
      title: 'Multilingual Support',
      description: 'Chat in Hindi, English, and regional languages',
    },
    {
      icon: <Users className="w-10 h-10 text-purple-600 dark:text-purple-400" />,
      title: 'Human Handoff',
      description: 'Seamless transfer to staff for complex queries',
    },
    {
      icon: <Clock className="w-10 h-10 text-green-600 dark:text-green-400" />,
      title: '24/7 Availability',
      description: 'Round-the-clock information access for students',
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-pink-600 dark:text-pink-400" />,
      title: 'Analytics Dashboard',
      description: 'Insights into dining hall usage and preferences',
    },
    {
      icon: <Shield className="w-10 h-10 text-yellow-600 dark:text-yellow-400" />,
      title: 'Data Security',
      description: 'Robust measures to protect user information',
    },
    {
      icon: <MessageCircle className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />,
      title: 'Context Aware',
      description: 'Maintains conversation context across queries',
    },
  ];

  return (
    <div className="relative bg-gray-200">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
            <span className="block mb-2">Campus Information</span>
            <span className="bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
              Made {text}
              <span className="border-r-2 border-white animate-pulse ml-1"></span>
            </span>
          </h1>

          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed text-gray-200">
            Multilingual AI assistant that helps students get instant answers to campus queries in
            their preferred language. No more long queues, no more confusion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate('/chat')}
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Try ChatBot
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() =>
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg border-2 text-white border-gray-300 hover:border-gray-400 hover:bg-gray-50 hover:text-black dark:text-white dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-700 transition duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Features
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Built for Modern Campus Life</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-600 dark:text-gray-300">
              Designed to bridge communication gaps and provide equitable access to information for
              all students
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-8 rounded-2xl transition duration-300 hover:shadow-lg hover:scale-105 bg-white hover:bg-gray-50 shadow-sm dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="leading-relaxed text-slate-700 dark:text-gray-300 text-lg">
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
