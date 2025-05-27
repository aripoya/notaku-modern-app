import React, { useState, useEffect, useRef } from 'react';

interface TestimonialItem {
  quote: string;
  author: string;
  title: string;
  avatarInitial: string; // Placeholder for avatar image
}

const Testimonials: React.FC = () => {
  const testimonialData: TestimonialItem[] = [
    {
      quote: 'NotaKu.cloud benar-benar mengubah cara saya mengelola keuangan bisnis. OCR-nya akurat dan analisisnya sangat membantu!',
      author: 'Budi Santoso',
      title: 'Pemilik Toko Kelontong',
      avatarInitial: 'BS',
    },
    {
      quote: 'Sebagai freelancer, mencatat pengeluaran dulunya merepotkan. Sekarang dengan NotaKu.cloud, semuanya jadi otomatis dan terorganisir.',
      author: 'Citra Dewi',
      title: 'Desainer Grafis Freelance',
      avatarInitial: 'CD',
    },
    {
      quote: 'Fitur tanya jawab AI sangat menghemat waktu saya. Saya bisa langsung bertanya total pengeluaran untuk proyek tertentu tanpa perlu cek manual.',
      author: 'Agus Wijaya',
      title: 'Manajer Proyek Konstruksi',
      avatarInitial: 'AW',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialData.length) % testimonialData.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: currentIndex * sliderRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
    // Auto slide
    const interval = setInterval(() => {
        nextSlide();
    }, 7000); // Slower interval for testimonials
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section id="testimoni" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Apa Kata Pengguna Kami?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Dengarkan pengalaman mereka yang telah merasakan manfaat NotaKu.cloud.</p>
        </div>

        <div className="relative overflow-hidden max-w-3xl mx-auto">
          <div ref={sliderRef} className="flex overflow-x-hidden scroll-snap-x mandatory">
            {testimonialData.map((item, index) => (
              <div key={index} className="w-full flex-shrink-0 scroll-snap-align-start p-8 text-center">
                <div className="mb-6">
                  {/* Placeholder Avatar */}
                  <div className="author-avatar-placeholder w-16 h-16 mx-auto rounded-full bg-secondary text-white flex items-center justify-center text-2xl font-bold mb-4">
                    {item.avatarInitial}
                  </div>
                  <p className="text-xl italic text-gray-700 leading-relaxed">"{item.quote}"</p>
                </div>
                <p className="font-semibold text-dark">{item.author}</p>
                <p className="text-sm text-gray-500">{item.title}</p>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition duration-300 z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition duration-300 z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10 mb-4">
            {testimonialData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full ${currentIndex === index ? 'bg-primary' : 'bg-gray-300'} hover:bg-primary transition duration-300`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
