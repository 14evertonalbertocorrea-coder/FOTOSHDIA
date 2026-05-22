import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, MessageSquare, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { useOnlineCounter } from './useOnlineCounter';

export default function Hero() {
  const onlineCount = useOnlineCounter();
  
  const handleWhatsappClick = () => {
    const message = encodeURIComponent('Olá! Quero transformar fotos ruins em imagens profissionais em alta definição com IA.');
    window.open(`https://wa.me/27620594136?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const trustBadges = [
    'Entrega rápida pelo WhatsApp',
    'Pagamento somente após aprovação',
    'Privacidade total das suas fotos'
  ];

  return (
    <section id="hero-section" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#050508]">
      {/* Visual background atmospheric lights */}
      <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] -z-10 animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[150px] -z-10 animate-pulse pointer-events-none" style={{ animationDuration: '12s' }} />
      
      {/* Retro/Futuristic grid helper to establish a startup identity */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c101d_1px,transparent_1px),linear-gradient(to_bottom,#0c101d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-30 -z-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Active AI Service Status indicator / technology badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-lg border border-purple-500/20 bg-purple-500/10 text-purple-400 text-xs uppercase tracking-widest font-bold mb-6 shadow-[0_0_20px_rgba(168,85,247,0.05)] hover:border-purple-400/30 transition"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span>Tecnologia Neural V4.0 Ativa</span>
          </motion.div>

          {/* Heading with elegant typography */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-5.5xl md:text-6xl font-black leading-[1.1] tracking-tight bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent mb-6"
          >
            Melhore Suas Fotos com Inteligência Artificial
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mb-6 leading-relaxed font-normal"
          >
            Melhoramos fotos borradas, antigas, escuras ou de baixa qualidade e entregamos em alta definição.
          </motion.p>

          {/* Real-time online counter banner */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full border border-emerald-500/10 bg-emerald-500/5 text-emerald-400 text-xs sm:text-sm font-semibold mb-8 shadow-[0_0_15px_rgba(16,185,129,0.05)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>
              <strong className="font-extrabold font-mono text-white bg-slate-900/80 px-2 py-0.5 rounded border border-white/5 mr-1">{onlineCount} pessoas</strong> 
              online melhorando fotos agora!
            </span>
          </motion.div>

          {/* Dynamic glowing button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="w-full sm:w-auto flex flex-col items-center gap-4 mb-12"
          >
            <button
              id="hero-cta-whatsapp"
              onClick={handleWhatsappClick}
              className="group relative w-full sm:w-auto px-8 py-4.5 rounded-xl text-base sm:text-lg font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-95 shadow-[0_0_30px_rgba(0,242,254,0.3)] hover:scale-[1.02] transition-all duration-300 transform active:scale-98 cursor-pointer flex items-center justify-center gap-3.5"
            >
              <MessageSquare className="w-5 sm:w-6 h-5 sm:h-6 text-white group-hover:rotate-12 transition-transform" />
              <span>Pedir melhoria pelo WhatsApp</span>
              <ArrowUpRight className="w-5 h-5 text-white/85 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 blur-md opacity-20 group-hover:opacity-60 transition-opacity -z-10" />
            </button>
            <span className="text-xs text-gray-500 flex items-center gap-1.5 mt-2 font-medium">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              Você só paga se aprovar e gostar do resultado!
            </span>
          </motion.div>

          {/* Trust badges row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 w-full max-w-3xl pt-8 border-t border-white/5 text-gray-400 text-sm font-medium"
          >
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="flex items-center justify-center gap-2 px-3 py-1 bg-slate-900/30 rounded-lg border border-white/[0.02]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{badge}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
