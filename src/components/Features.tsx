import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105">
      <div className="text-5xl text-primary mb-6">{icon}</div>
      <h4 className="text-xl font-semibold mb-3 text-dark">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const featuresData = [
    {
      icon: '📄',
      title: 'OCR Akurat & Cepat',
      description: 'Ekstrak informasi penting dari nota fisik atau digital secara otomatis dengan teknologi OCR terdepan.',
    },
    {
      icon: '📊',
      title: 'Analisis Pengeluaran Mendalam',
      description: 'Visualisasikan pola pengeluaran Anda berdasarkan kategori, merchant, dan periode waktu.',
    },
    {
      icon: '🤖',
      title: 'Tanya Jawab AI Cerdas',
      description: 'Dapatkan jawaban instan atas pertanyaan Anda mengenai data nota yang tersimpan menggunakan AI.',
    },
    {
      icon: '☁️',
      title: 'Penyimpanan Cloud Aman',
      description: 'Simpan semua nota Anda dengan aman di cloud dan akses kapan saja, di mana saja.',
    },
    {
      icon: '🔍',
      title: 'Pencarian & Filter Mudah',
      description: 'Temukan nota spesifik dengan cepat menggunakan fitur pencarian dan filter yang intuitif.',
    },
    {
      icon: '👥',
      title: 'Manajemen Multi-User (Bisnis)',
      description: 'Kelola akses dan nota untuk tim Anda dengan mudah (tersedia di paket Bisnis & Enterprise).',
    },
  ];

  return (
    <section id="fitur" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Fitur Unggulan NotaKu.cloud</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Semua yang Anda butuhkan untuk mengelola nota dan keuangan Anda dengan lebih efisien.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
