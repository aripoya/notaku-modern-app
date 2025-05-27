import React, { useState } from 'react';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Mengirim...');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('Terima kasih telah berlangganan!');
        setEmail(''); // Reset email field
      } else {
        setStatus(result.message || 'Gagal berlangganan. Silakan coba lagi.');
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      setStatus('Terjadi kesalahan. Silakan coba lagi.');
    }
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input 
        type="email" 
        placeholder="Email Anda" 
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-grow px-3 py-2 rounded-l-md text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        aria-label="Alamat Email Newsletter"
      />
      <button 
        type="submit" 
        className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-r-md text-sm font-semibold transition duration-300 disabled:opacity-50"
        disabled={status === 'Mengirim...'}
      >
        {status === 'Mengirim...' ? '...' : 'Kirim'}
      </button>
      {status && status !== 'Mengirim...' && (
        <p className={`mt-2 text-xs ${status.includes('Terima kasih') ? 'text-green-400' : 'text-red-400'}`}>{status}</p>
      )}
    </form>
  );
};

export default NewsletterForm;
