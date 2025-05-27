import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-gray-400 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">NotaKu.cloud</h4>
            <p className="text-sm leading-relaxed">Solusi cerdas pengelolaan nota digital dengan OCR dan AI untuk personal dan bisnis.</p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#fitur" className="hover:text-white transition duration-300">Fitur</a></li>
              <li><a href="#harga" className="hover:text-white transition duration-300">Harga</a></li>
              <li><a href="#faq" className="hover:text-white transition duration-300">FAQ</a></li>
              <li><a href="#kontak" className="hover:text-white transition duration-300">Kontak</a></li>
            </ul>
          </div>
          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#kebijakan-privasi" className="hover:text-white transition duration-300">Kebijakan Privasi</a></li>
              <li><a href="#syarat-ketentuan" className="hover:text-white transition duration-300">Syarat & Ketentuan</a></li>
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Berlangganan Newsletter</h4>
            <p className="text-sm mb-3">Dapatkan update fitur dan tips pengelolaan nota.</p>
            <form className="flex">
              <input type="email" placeholder="Email Anda" className="flex-grow px-3 py-2 rounded-l-md text-sm text-gray-800 focus:outline-none" />
              <button type="submit" className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-r-md text-sm font-semibold transition duration-300">Kirim</button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} NotaKu.cloud. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
