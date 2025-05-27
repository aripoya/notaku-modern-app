import React from 'react';

interface PricingCardProps {
  plan: string;
  price: string;
  pricePeriod?: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaLink: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, price, pricePeriod = '/bulan', features, isPopular = false, ctaText, ctaLink }) => {
  return (
    <div className={`relative border rounded-lg p-8 flex flex-col ${isPopular ? 'border-primary shadow-xl scale-105 bg-white' : 'border-gray-200 bg-white'}`}>
      {isPopular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent text-white text-xs font-semibold px-4 py-1 rounded-full">Paling Populer</div>
      )}
      <h3 className="text-xl font-semibold text-center mb-2 text-dark">{plan}</h3>
      <div className="text-center mb-6">
        <span className={`text-4xl font-bold ${isPopular ? 'text-primary' : 'text-dark'}`}>{price}</span>
        {price !== 'Hubungi Kami' && <span className="text-gray-500">{pricePeriod}</span>}
      </div>
      <ul className="space-y-3 mb-8 flex-grow text-gray-600">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <a href={ctaLink} className={`w-full text-center font-semibold py-3 px-6 rounded-full transition duration-300 ${isPopular ? 'bg-primary hover:bg-secondary text-white' : 'bg-gray-100 hover:bg-gray-200 text-primary'}`}>
        {ctaText}
      </a>
    </div>
  );
};

const Pricing: React.FC = () => {
  const pricingData = [
    {
      plan: 'Personal',
      price: 'Rp 50.000',
      features: [
        'Penyimpanan 1 GB di Cloud',
        'Upload Maks. 30 Nota/Hari',
        'OCR Otomatis',
        'Analisis Dasar',
        'Tanya Jawab AI (Terbatas)',
      ],
      ctaText: 'Pilih Personal',
      ctaLink: '#daftar-personal',
    },
    {
      plan: 'Bisnis',
      price: 'Rp 500.000',
      features: [
        'Penyimpanan 100 GB di Cloud',
        'Upload Maks. 500 Nota/Hari',
        'OCR Otomatis Prioritas',
        'Analisis Mendalam & Laporan',
        'Tanya Jawab AI Penuh',
        'Manajemen Maks. 10 User',
        'Dukungan Prioritas',
      ],
      isPopular: true,
      ctaText: 'Pilih Bisnis',
      ctaLink: '#daftar-bisnis',
    },
    {
      plan: 'Enterprise',
      price: 'Hubungi Kami',
      pricePeriod: '',
      features: [
        'Semua Fitur Bisnis',
        'Penyimpanan & User Kustom',
        'Integrasi API',
        'Dukungan Khusus 24/7',
        'SLA (Service Level Agreement)',
      ],
      ctaText: 'Hubungi Sales',
      ctaLink: '#kontak-enterprise',
    },
  ];

  return (
    <section id="harga" className="py-20 bg-gradient-to-b from-light to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Paket Harga Fleksibel</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Pilih paket yang paling sesuai dengan kebutuhan pengelolaan nota Anda.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-end">
          {pricingData.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan.plan}
              price={plan.price}
              pricePeriod={plan.pricePeriod}
              features={plan.features}
              isPopular={plan.isPopular}
              ctaText={plan.ctaText}
              ctaLink={plan.ctaLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
