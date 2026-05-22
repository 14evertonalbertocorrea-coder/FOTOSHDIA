import { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';
import { useOnlineCounter } from './useOnlineCounter';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const onlineCount = useOnlineCounter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsappClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre o melhoramento de imagens com IA da FotoHD AI e enviar fotos.');
    window.open(`https://wa.me/27620594136?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const navLinks = [
    { label: 'Comparações', href: '#comparacoes' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Preços', href: '#precos' },
    { label: 'Garantia', href: '#garantia' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.5)] group-hover:scale-105 transition-transform duration-300">
              <span className="font-black text-white text-lg tracking-tighter">HD</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 blur-sm -z-10 opacity-70 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white transition-all">
              FotoHD <span className="text-cyan-400 font-light italic">AI</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-gray-400 hover:text-white transition-colors duration-200 relative py-1.5 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Hand Info & Button */}
          <div className="hidden md:flex items-center gap-6">
            <span className="text-sm text-gray-400 flex items-center gap-2 font-medium bg-slate-900/50 px-3 py-1.5 rounded-full border border-white/5">
              <span className="relative flex h-2.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-white font-black font-mono">{onlineCount}</span>
              <span className="text-xs text-gray-400">ativos agora</span>
            </span>
            <button
              id="header-cta-whatsapp"
              onClick={handleWhatsappClick}
              className="px-6 py-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-semibold hover:bg-cyan-500/20 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.15)] active:scale-95 cursor-pointer flex items-center gap-1.5"
            >
              Pedir no WhatsApp
              <ArrowUpRight className="w-4 h-4 text-cyan-400" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-slate-900/60 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-slate-950 border-b border-white/5 ${
          mobileMenuOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-300 hover:text-white hover:bg-slate-900/50 transition"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/5">
            <button
              id="mobile-header-cta-whatsapp"
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsappClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-base font-bold bg-gradient-to-r from-blue-600/90 to-purple-600/90 hover:from-blue-600 hover:to-purple-600 text-white shadow-md active:scale-95 transition cursor-pointer"
            >
              Pedir no WhatsApp
              <ArrowUpRight className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
