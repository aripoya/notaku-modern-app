import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Screenshots from './components/Screenshots';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // Import
import FloatingCTA from './components/FloatingCTA'; // Import

function App() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Screenshots />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop /> {/* Add */} 
      <FloatingCTA /> {/* Add */} 
      {/* TODO: Add Popup if needed */}
    </div>
  );
}

export default App;
