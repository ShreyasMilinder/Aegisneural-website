import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-lg py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-semibold">AegisNeural Learning</h1>
        <ul className="flex space-x-8 text-lg font-medium">
          <li><a href="#" className="nav-link">Candidate Login</a></li>
          <li><a href="#" className="nav-link">Admin Login</a></li>
          <li><a href="#" className="nav-link">Courses</a></li>
          <li><a href="#" className="nav-link">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
