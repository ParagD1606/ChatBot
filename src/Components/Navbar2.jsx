import React, { useState } from 'react';

export default function Navbar2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Dashboard', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('dark', !isDark);
  };

  return (
    <header className={`p-4 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'} shadow`}>
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-bold">MyApp</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="hover:underline">
              {item.name}
            </a>
          ))}
        </nav>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded border"
        >
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden px-3 py-1 border rounded"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 space-y-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block p-2 hover:bg-gray-200 rounded"
            >
              {item.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
