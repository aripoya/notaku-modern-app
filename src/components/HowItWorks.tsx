import React from 'react';

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  icon: string;
}

const StepCard: React.FC<StepCardProps> = ({ step, title, description, icon }) => {
  return (
    <div className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      <div className="absolute -top-6 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">{step}</div>
      <div className="text-4xl text-secondary mt-8 mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-dark">{title}</h3>
      <p className="text-gray-600 text-center text-sm">{description}</p>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const stepsData = [
    {
      step: 1,
      title: 'Upload Nota Anda',
      description: 'Ambil foto nota fisik atau unggah file digital (PDF/JPG/PNG) melalui aplikasi web atau mobile.',
      icon: '📤',
    },
    {
      step: 2,
      title: 'Proses OCR & AI',
      description: 'Sistem kami akan secara otomatis mengekstrak data penting dan menganalisis konten nota Anda.',
      icon: '✨',
    },
    {
      step: 3,
      title: 'Lihat Hasil & Analisis',
      description: 'Akses data terstruktur, visualisasi pengeluaran, dan ajukan pertanyaan tentang nota Anda.',
      icon: '💡',
    },
  ];

  return (
    <section id="cara-kerja" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Bagaimana NotaKu.cloud Bekerja?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Hanya dalam 3 langkah mudah, ubah tumpukan nota Anda menjadi data berharga.</p>
        </div>
        <div className="relative">
          {/* Connecting line (visible on larger screens) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 border-t-2 border-dashed border-primary transform -translate-y-1/2"></div>
          
          <div className="relative grid md:grid-cols-3 gap-16 md:gap-8">
            {stepsData.map((step) => (
              <StepCard key={step.step} step={step.step} title={step.title} description={step.description} icon={step.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
