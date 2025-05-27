import React from 'react';
import logo from '../assets/notaku-logo.svg'; // Import the logo

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Use the imported logo */}
          <img src={logo} alt="NotaKu.cloud Logo" className="w-8 h-8 mr-2" /> 
          <h1 className="text-2xl font-bold text-primary">NotaKu.cloud</h1>
        </div>
        <nav>
          <ul className="flex space-x-6 text-gray-700">
            <li><a href="#fitur" className="hover:text-primary transition duration-300">Fitur</a></li>
            <li><a href="#cara-kerja" className="hover:text-primary transition duration-300">Cara Kerja</a></li>
            <li><a href="#harga" className="hover:text-primary transition duration-300">Harga</a></li>
            <li><a href="#faq" className="hover:text-primary transition duration-300">FAQ</a></li>
            <li><a href="#kontak" className="hover:text-primary transition duration-300">Kontak</a></li>
          </ul>
        </nav>
        <div>
          <a href="#login" className="text-gray-700 hover:text-primary mr-4">Login</a>
          <a href="#daftar" className="bg-primary hover:bg-secondary text-white font-semibold py-2 px-6 rounded-full transition duration-300">Daftar Gratis</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
