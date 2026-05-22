import { Sparkles, MessageSquare, Shield, ShieldCheck, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsappClick = () => {
    const message = encodeURIComponent('Olá! Vim pelo rodapé do site FotoHD AI e gostaria de falar com um atendente.');
    window.open(`https://wa.me/27620594136?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer id="footer-section" className="bg-[#050508] border-t border-cyan-500/10 pt-16 pb-12 relative overflow-hidden">
      {/* Visual background atmospheric lights */}
      <div className="absolute bottom-[10%] left-[10%] w-[250px] h-[250px] bg-cyan-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Logo brand info column */}
          <div className="space-y-4 md:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold tracking-wider text-white">
                FotoHD<span className="text-cyan-400 font-black">.AI</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              O melhoramento inteligente que suas lembranças merecem. Restauramos fotos com o poder da Inteligência Artificial em tempo recorde via WhatsApp, garantindo risco zero para nossos clientes.
            </p>
          </div>

          {/* Links column */}
          <div>
            <h4 className="text-sm font-bold text-gray-200 tracking-wider uppercase mb-4">Links Rápidos</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#comparacoes" className="text-gray-400 hover:text-white transition">Comparações Interativas</a>
              </li>
              <li>
                <a href="#como-funciona" className="text-gray-400 hover:text-white transition">Entenda Como Funciona</a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-white transition">Catálogo de Serviços</a>
              </li>
              <li>
                <a href="#precos" className="text-gray-400 hover:text-white transition">Nossos Preços Justos</a>
              </li>
              <li>
                <a href="#garantia" className="text-gray-400 hover:text-white transition">Termos de Garantia</a>
              </li>
            </ul>
          </div>

          {/* Support / Contacts column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-gray-200 tracking-wider uppercase mb-4">Central de Atendimento</h4>
            <div className="space-y-3">
              <button
                id="footer-whatsapp-anchor"
                onClick={handleWhatsappClick}
                className="flex items-center gap-2 group text-left cursor-pointer"
              >
                <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 group-hover:bg-emerald-500/20 group-hover:text-emerald-300 transition-all duration-300">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase font-mono tracking-widest font-bold">Atendimento WhatsApp</div>
                  <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                    21 97165-6649
                  </div>
                </div>
              </button>
              
              <div className="text-xs text-gray-500 flex items-center gap-2 pt-2 border-t border-white/5">
                <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Privacidade de arquivos garantida</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright rules & details bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs text-gray-500 text-center md:text-left space-y-2">
            <div>
              &copy; {new Date().getFullYear()} FotoHD AI. Todos os direitos reservados.
            </div>
            <div className="max-w-xl text-[10px] leading-relaxed text-gray-600">
              Isenção de responsabilidade: Este site é um serviço independente de aprimoramento de fotos digitais. Não somos afiliados, associados, autorizados ou de qualquer forma conectados oficialmente com a Meta Platforms, WhatsApp Inc., ou qualquer uma de suas subsidiárias.
            </div>
          </div>

          {/* Go top action handle */}
          <button
            id="go-top-button"
            onClick={handleScrollToTop}
            className="p-3 bg-[#0c101d] hover:bg-cyan-500/10 text-cyan-400 hover:text-cyan-300 rounded-xl border border-cyan-500/20 hover:border-cyan-400 transition active:scale-95 cursor-pointer flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.1)] select-none"
            aria-label="Voltar para o topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
