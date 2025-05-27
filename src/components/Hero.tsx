import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-24 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Solusi Cerdas Pengelolaan Nota dengan AI</h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">Otomatiskan pencatatan, analisis pengeluaran secara mendalam, dan dapatkan wawasan berharga dari tumpukan nota Anda dengan teknologi OCR dan AI terdepan.</p>
        <div className="flex justify-center space-x-4">
            <a href="#daftar" className="bg-accent hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg transform hover:scale-105">Mulai Uji Coba Gratis</a>
            <a href="#cara-kerja" className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg transform hover:scale-105">Lihat Cara Kerja</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
