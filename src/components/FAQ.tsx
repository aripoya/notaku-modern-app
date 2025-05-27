import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-5">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-dark">{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen mt-4' : 'max-h-0'}`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqData = [
    {
      question: 'Apakah NotaKu.cloud aman digunakan?',
      answer: 'Ya, kami menggunakan enkripsi standar industri dan praktik keamanan terbaik untuk melindungi data nota Anda. Penyimpanan cloud kami juga didukung oleh penyedia terpercaya.',
    },
    {
      question: 'Jenis nota apa saja yang didukung?',
      answer: 'NotaKu.cloud mendukung berbagai jenis nota tercetak maupun digital dalam format gambar (JPG, PNG) dan PDF. Sistem OCR kami dirancang untuk mengenali berbagai layout nota.',
    },
    {
      question: 'Bagaimana cara kerja fitur Tanya Jawab AI?',
      answer: 'Fitur ini menggunakan model bahasa (LLM) yang digabungkan dengan data nota Anda yang terstruktur (RAG & CAG). Anda bisa bertanya dalam bahasa natural, misalnya \"Berapa total pengeluaran makan bulan lalu?\", dan AI akan memberikan jawabannya berdasarkan data nota yang tersimpan.',
    },
    {
      question: 'Bisakah saya mengekspor data saya?',
      answer: 'Tentu saja. Anda dapat mengekspor data nota Anda dalam format CSV atau format lainnya untuk keperluan analisis lebih lanjut atau pencadangan.',
    },
    {
      question: 'Apakah ada aplikasi mobile?',
      answer: 'Saat ini kami fokus pada aplikasi web yang responsif dan dapat diakses dari perangkat apa saja. Pengembangan aplikasi mobile ada dalam rencana kami di masa depan.',
    },
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Pertanyaan yang Sering Diajukan (FAQ)</h2>
          <p className="text-lg text-gray-600">Temukan jawaban atas pertanyaan umum tentang NotaKu.cloud.</p>
        </div>
        <div>
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
