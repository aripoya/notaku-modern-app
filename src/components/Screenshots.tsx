import React, { useState, useEffect, useRef } from 'react';

interface ScreenshotItem {
  title: string;
  description: string;
  icon: string; // Using Font Awesome class names for placeholders
}

const Screenshots: React.FC = () => {
  const screenshotData: ScreenshotItem[] = [
    {
      title: 'Dashboard Intuitif',
      description: 'Pantau ringkasan pengeluaran, nota terbaru, dan statistik penting lainnya dalam satu tampilan.',
      icon: 'fa-tachometer-alt',
    },
    {
      title: 'Upload & OCR Cepat',
      description: 'Unggah nota via kamera atau file, sistem OCR kami akan mengekstrak data secara otomatis.',
      icon: 'fa-camera',
    },
    {
      title: 'Analisis Mendalam',
      description: 'Visualisasikan data pengeluaran Anda dengan grafik interaktif berdasarkan kategori dan waktu.',
      icon: 'fa-chart-pie',
    },
    {
      title: 'Tanya Jawab AI',
      description: 'Ajukan pertanyaan dalam bahasa natural tentang data nota Anda dan dapatkan jawaban cerdas.',
      icon: 'fa-robot',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshotData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + screenshotData.length) % screenshotData.length);
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
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section id="interaksi" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Lihat Cara NotaKu.cloud Bekerja</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Rasakan kemudahan mengelola nota dengan antarmuka yang intuitif dan modern.</p>
        </div>
        
        <div className="relative overflow-hidden rounded-lg shadow-xl bg-gray-100 p-4 md:p-8">
          <div ref={sliderRef} className="flex overflow-x-hidden scroll-snap-x mandatory">
            {screenshotData.map((item, index) => (
              <div key={index} className="w-full flex-shrink-0 scroll-snap-align-start flex flex-col md:flex-row items-center justify-center p-6 md:p-12 min-h-[400px]">
                {/* Placeholder Image */}
                <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0 md:mr-8">
                    <div className="screenshot-image-placeholder w-full max-w-md h-64 md:h-80 bg-gray-200 rounded-lg flex flex-col justify-center items-center">
                        <i className={`fas ${item.icon} text-6xl text-primary mb-4`}></i>
                        <h3 className="text-xl font-semibold text-dark">Placeholder Screenshot</h3>
                    </div>
                </div>
                {/* Description */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-dark mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button onClick={prevSlide} className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition duration-300 z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition duration-300 z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {screenshotData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-primary' : 'bg-gray-400'} hover:bg-primary transition duration-300`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
