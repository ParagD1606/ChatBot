import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";

// --- Data Definitions ---
const socialIcons = [
  { icon: Facebook, url: "#", color: "bg-[#778DA9]", hover: "hover:bg-[#E0E1DD]" },
  { icon: Twitter, url: "#", color: "bg-[#778DA9]", hover: "hover:bg-[#E0E1DD]" },
  { icon: Linkedin, url: "#", color: "bg-[#778DA9]", hover: "hover:bg-[#E0E1DD]" },
];

const quickLinks = [
  { text: "Home", url: "#" },
  { text: "College Info", url: "#" },
  { text: "Admissions", url: "#" },
  { text: "Scholarships", url: "#" },
  { text: "Schedules", url: "#" },
];

const resources = [
  { text: "FAQs", url: "#" },
  { text: "Help Center", url: "#" },
  { text: "Privacy Policy", url: "#" },
  { text: "Terms of Service", url: "#" },
  { text: "Contact Support", url: "#" },
];

// --- Sub-Components ---
const SocialLink = ({ icon: Icon, url, color, hover }) => (
  <a
    href={url}
    className={`${color} ${hover} hover:text-[#1B263B] transition-all w-10 h-10 flex items-center justify-center rounded-full transform hover:scale-110`}
  >
    <Icon size={20} />
  </a>
);

const FooterLinkList = ({ title, links }) => (
  <div>
    <h3 className="font-semibold text-lg mb-4">{title}</h3>
    <ul className="space-y-2 text-sm">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url} className="hover:text-blue-400 transition-colors">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// --- Main Footer Component ---
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B263B] text-white py-16 mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12">
        {/* SAHAYAK Info Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">SAHAYAK</h2>
          <p className="text-sm leading-relaxed max-w-xs text-gray-200">
            SAHAYAK helps you get instant college information, track schedules, check fees, scholarships, and more.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            {socialIcons.map((social, index) => (
              <SocialLink key={index} {...social} />
            ))}
          </div>
        </div>

        {/* Quick Links + Resources */}
        <div className="grid grid-cols-2 md:grid-cols-[1fr_auto] gap-16 md:gap-28">
          <FooterLinkList title="Quick Links" links={quickLinks} />
          <FooterLinkList title="Resources" links={resources} />
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        &copy; {currentYear} SAHAYAK. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
