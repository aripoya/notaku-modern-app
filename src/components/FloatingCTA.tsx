import React from 'react';

const FloatingCTA: React.FC = () => {
  return (
    <a
      href="#daftar" // Link to the relevant section or registration page
      className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105 flex items-center animate-pulse"
    >
      {/* Optional: Add an icon */}
      {/* <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="..."></path></svg> */}
      Mulai Sekarang
    </a>
  );
};

export default FloatingCTA;
