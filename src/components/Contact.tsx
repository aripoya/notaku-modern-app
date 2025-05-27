import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Mengirim...');

    // TODO: Replace with actual API call to Hono backend
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      console.log('Form data submitted:', formData);
      setStatus('Pesan Anda telah berhasil dikirim! Kami akan segera menghubungi Anda.');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.');
    }
  };

  return (
    <section id="kontak" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Hubungi Kami</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Punya pertanyaan atau butuh bantuan? Jangan ragu untuk menghubungi tim kami.</p>
        </div>
        <div className="max-w-3xl mx-auto bg-light p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Nama Anda"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Alamat Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="email@contoh.com"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subjek</label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                placeholder="Topik pesan Anda"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
              <textarea
                name="message"
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                placeholder="Tulis pesan Anda di sini..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-primary hover:bg-secondary text-white font-bold py-3 px-10 rounded-full transition duration-300 shadow-lg transform hover:scale-105 disabled:opacity-50"
                disabled={status === 'Mengirim...'}
              >
                {status === 'Mengirim...' ? 'Mengirim...' : 'Kirim Pesan'}
              </button>
            </div>
            {status && status !== 'Mengirim...' && (
              <p className={`mt-4 text-center text-sm ${status.includes('berhasil') ? 'text-green-600' : 'text-red-600'}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
