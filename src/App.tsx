import Header from './components/Header';
import Hero from './components/Hero';
import ComparisonSlider from './components/ComparisonSlider';
import HowItWorks from './components/HowItWorks';
import ServicesGrid from './components/ServicesGrid';
import StaticBeforeAfter from './components/StaticBeforeAfter';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Garantia from './components/Garantia';
import FAQ from './components/FAQ';
import SEOSection from './components/SEOSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen text-white bg-[#050508] overflow-x-hidden selection:bg-cyan-500/30 selection:text-white">
      {/* Floating Call-to-action Whatsapp icon */}
      <a
        id="floating-whatsapp-action"
        href="https://wa.me/27620594136?text=Ol%C3%A1!%20Encontrei%20a%20FotoHD%20AI%20e%20gostaria%20de%20saber%20como%20funciona%20para%20enviar%20minhas%20fotos."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-4 rounded-2xl bg-emerald-500 text-white shadow-[0_4px_22px_rgba(16,185,129,0.35)] hover:bg-emerald-400 hover:shadow-[0_4px_30px_rgba(16,185,129,0.6)] transition-all duration-300 transform hover:scale-108 active:scale-95 flex items-center justify-center group"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg
          className="w-6.5 h-6.5 text-white transform group-hover:rotate-12 transition-transform"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.022-.008-.115-.062-.245-.125s-.857-.423-.99-.47-.115-.008-.115-.008-.073.062-.224.234c-.161.18-.328.375-.401.442-.047.042-.094.022-.115-.003-.13-.06-.525-.236-.932-.596-.316-.273-.615-.658-.705-.813-.075-.13-.008-.2.03-.298.035-.088.073-.17.11-.255s.052-.14.078-.208a.333.333 0 00-.015-.298c-.02-.042-.115-.278-.224-.542-.11-.266-.23-.625-.33-.823-.047-.094-.093-.078-.115-.078h-.073a.35.35 0 00-.234.1c-.083.083-.318.312-.318.76s.328.88.375.942c.047.062.646.983 1.564 1.38.22.094.39.15.52.193.22.07.42.06.58.035.18-.026.542-.224.615-.44a.6.6 0 00.041-.44c-.02-.03-.094-.073-.245-.145zm-5.467 4.152a7.48 7.48 0 01-3.81-1.03l-.273-.162-2.146.562.573-2.09-.177-.282a7.48 7.48 0 01-1.15-3.81 7.51 7.51 0 0115.02 0 7.51 7.51 0 01-7.51 7.512H12.01l-.005.01zm0-16.142A8.61 8.61 0 003.36 10.97c0 1.566.42 3.09 1.21 4.45L3.38 20l4.7-.1.22-.04A8.58 8.58 0 0012 21c4.76 0 8.64-3.88 8.64-8.64s-3.88-8.64-8.64-8.64z" />
        </svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-[150px] group-hover:ml-2.5 transition-all duration-300 ease-in-out text-sm font-extrabold whitespace-nowrap">
          Chamar no WhatsApp
        </span>
      </a>

      {/* Sticky Top Header */}
      <Header />

      {/* Landing Layout Sections */}
      <Hero />
      <ComparisonSlider />
      <HowItWorks />
      <ServicesGrid />
      <StaticBeforeAfter />
      <Testimonials />
      <Pricing />
      <Garantia />
      <FAQ />
      <SEOSection />

      {/* Bottom Footer Details */}
      <Footer />
    </div>
  );
}
