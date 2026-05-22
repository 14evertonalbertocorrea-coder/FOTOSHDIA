import { MessageSquare, Image, Sparkles, Download, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Chame no WhatsApp',
      desc: 'Clique em qualquer botão do site para iniciar a conversa imediatamente com nosso atendimento automatizado inteligente.',
      icon: MessageSquare,
      neon: 'border-cyan-500/20 text-cyan-400 bg-cyan-500/5 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]',
    },
    {
      num: '02',
      title: 'Envie as fotos',
      desc: 'Mande-nos as fotos que deseja melhorar diretamente pelo chat. Pode ser selfie, foto de família antiga, de produtos ou paisagens.',
      icon: Image,
      neon: 'border-purple-500/20 text-purple-400 bg-purple-500/5 hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(147,51,234,0.15)]',
    },
    {
      num: '03',
      title: 'Melhoria com IA',
      desc: 'Nossa equipe de especialistas processa suas fotos em nossos servidores dedicados de inteligência artificial de alta performance.',
      icon: Sparkles,
      neon: 'border-cyan-500/20 text-cyan-400 bg-cyan-500/5 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]',
    },
    {
      num: '04',
      title: 'Aprovação e Entrega',
      desc: 'Enviamos uma prévia com marca d\'água. Você avalia e, se estiver satisfeito, realiza o pagamento e recebe a foto original em HD cristalino.',
      icon: Download,
      neon: 'border-purple-500/20 text-purple-400 bg-purple-500/5 hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(147,51,234,0.15)]',
    },
  ];

  const handleCta = () => {
    const message = encodeURIComponent('Olá! Quero enviar uma foto para vocês melhorarem com IA.');
    window.open(`https://wa.me/27620594136?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="como-funciona" className="py-24 relative overflow-hidden bg-[#050508]">
      {/* Decorative ambient gradients */}
      <div className="absolute top-[40%] right-[-10%] w-[350px] h-[350px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Como Funciona o Serviço?
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Um processo 100% online, rápido e seguro. Você não precisa baixar nenhum aplicativo ou criar contas complexas. Resolva tudo diretamente no WhatsApp!
          </p>
        </div>

        {/* Dynamic timeline flow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative mt-12">
          
          {/* Connector horizontal lines for desktop */}
          <div className="hidden md:block absolute top-[50px] left-[10%] right-[10%] h-[2px] bg-slate-900 -z-0" />

          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={idx} 
                className="relative group flex flex-col items-center md:items-start text-center md:text-left z-10 animate-fade-in"
              >
                {/* Visual Circle Indicator */}
                <div className={`w-18 h-18 rounded-xl border flex items-center justify-center transition-all duration-300 relative select-none ${step.neon}`}>
                  <IconComponent className="w-8 h-8" />
                  <span className="absolute -top-2.5 -right-2.5 bg-slate-950 border border-white/10 text-[10px] font-mono font-bold tracking-widest text-[#22d3ee] px-2 py-0.5 rounded shadow-lg">
                    {step.num}
                  </span>
                </div>

                {/* Info block */}
                <h3 className="text-xl font-bold text-white mt-6 mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-sm md:max-w-none">
                  {step.desc}
                </p>

                {/* Small indicator arrows */}
                {idx < 3 && (
                  <div className="md:hidden my-4 text-gray-700 animate-bounce">
                    ↓
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Button inside section */}
        <div className="text-center mt-16 font-semibold">
          <button
            id="how-it-works-cta-whatsapp"
            onClick={handleCta}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-cyan-500/30 font-bold text-cyan-400 bg-[#0c101d]/60 hover:bg-[#0c101d] hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)] transition-all duration-300 cursor-pointer active:scale-95 text-base"
          >
            <span>Iniciar Atendimento Grátis</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </button>
        </div>

      </div>
    </section>
  );
}
