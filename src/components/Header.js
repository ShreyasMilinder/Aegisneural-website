import React from 'react';

const Header = () => {
  return (
    <header className="bg-black shadow-lg py-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Make the image bigger */}
        <a href="/">
          <img
            src="/Screenshot 2024-09-10 144351.jpg" 
            alt="AegisNeural Logo"
            className="h-20 w-auto"  // Increase height to make the image bigger
          />
        </a>
        <ul className="flex space-x-8 text-lg font-medium">
          <li><a href="#" className="nav-link text-white">Candidate Login</a></li>
          <li><a href="#" className="nav-link text-white">Admin Login</a></li>
          <li><a href="#" className="nav-link text-white">Courses</a></li>
          <li><a href="#" className="nav-link text-white">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
