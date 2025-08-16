import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1B263B] text-white py-10 mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-[300px_1fr] gap-10">
        
        {/* Trove Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Eatly</h2>
          <p className="text-sm leading-relaxed max-w-xs">
            Eatly helps you track queue lengths, check menu updates, and dine smarter with real-time information
          </p>

          {/* Social Icons */}
          <div className="flex space-x-3 mt-4">
            
            {/* Facebook */}
            <a href="#" className="bg-[#778DA9] hover:bg-[#E0E1DD] hover:text-[#1B263B] transition-colors w-10 h-10 flex items-center justify-center rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.497v-9.294H9.692v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.464.098 2.794.142v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0z"/>
              </svg>
            </a>

            {/* Twitter */}
            <a href="#" className="bg-[#778DA9] hover:bg-[#E0E1DD] hover:text-[#1B263B] transition-colors w-10 h-10 flex items-center justify-center rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.924 4.924 0 0 0 16.616 3c-2.723 0-4.932 2.209-4.932 4.932 0 .387.044.763.127 1.124C7.728 8.87 4.1 6.92 1.671 3.905a4.93 4.93 0 0 0-.666 2.475c0 1.708.87 3.215 2.19 4.099a4.904 4.904 0 0 1-2.23-.616v.06c0 2.385 1.693 4.374 3.946 4.827a4.935 4.935 0 0 1-2.224.085c.626 1.956 2.444 3.377 4.6 3.417A9.869 9.869 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.056 0 14.01-7.506 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" className="bg-[#778DA9] hover:bg-[#E0E1DD] hover:text-[#1B263B] transition-colors w-10 h-10 flex items-center justify-center rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                <path d="M7.75 2h8.5C19.54 2 22 4.46 22 7.75v8.5c0 3.29-2.46 5.75-5.75 5.75h-8.5C4.46 22 2 19.54 2 16.25v-8.5C2 4.46 4.46 2 7.75 2zm0 1.5C5.68 3.5 4 5.18 4 7.25v9.5C4 18.82 5.68 20.5 7.75 20.5h8.5c2.07 0 3.75-1.68 3.75-3.75v-9.5C20 5.18 18.32 3.5 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.88a1.12 1.12 0 1 1-2.25 0 1.12 1.12 0 0 1 2.25 0z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="#" className="bg-[#778DA9] hover:bg-[#E0E1DD] hover:text-[#1B263B] transition-colors w-10 h-10 flex items-center justify-center rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.759 0 5-2.24 5-5V5c0-2.76-2.241-5-5-5zM8.337 18.667H5.333V9.333h3.004v9.334zM6.835 8.146c-.959 0-1.738-.78-1.738-1.739 0-.96.779-1.739 1.738-1.739.96 0 1.739.779 1.739 1.739 0 .959-.779 1.739-1.739 1.739zM18.667 18.667h-3.004v-4.5c0-1.073-.021-2.454-1.494-2.454-1.497 0-1.727 1.167-1.727 2.375v4.579H9.438V9.333h2.879v1.276h.041c.401-.758 1.379-1.558 2.839-1.558 3.034 0 3.597 2 3.597 4.6v5.016z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links + Resources */}
        <div className="grid grid-cols-2 md:grid-cols-[1fr_auto] gap-16 md:gap-28">
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;