import { Sparkles, ArrowRight, ShieldCheck, Search, Image as ImageIcon, Zap } from 'lucide-react';

export default function SEOSection() {
  return (
    <section id="seo-recursos" className="py-20 relative overflow-hidden bg-[#07070d] border-t border-white/5">
      {/* Dynamic background styling */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" style={{ animationDuration: '12s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <Search className="w-3.5 h-3.5 text-purple-400" />
            <span>Recursos Avançados de Restauração</span>
          </div>
          <h2 className="text-xl text-cyan-400 font-extrabold tracking-tight mb-2">
            Tecnologia de Ponta para Seus Arquivos Digitais
          </h2>
          <p className="text-gray-400 text-sm">
            Nossa plataforma utiliza algoritmos treinados para reconstruir dados de imagem pixel por pixel com precisão absoluta.
          </p>
        </div>

        {/* H2 SEO Optimized Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Melhorar qualidade da foto online */}
          <div className="p-6.5 rounded-2xl border border-white/5 bg-slate-900/20 hover:border-cyan-500/20 hover:shadow-[0_0_20px_rgba(34,211,238,0.05)] transition-all duration-300">
            <div className="w-11 h-11 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5">
              <Zap className="w-5.5 h-5.5" />
            </div>
            <h2 className="text-xl font-bold text-white mb-3">
              Melhorar qualidade da foto online
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Otimize seus retratos, fotos casuais e profissionais diretamente do seu navegador. O processo de melhoria utiliza super-resolução para trazer vida nova às suas capturas mais significativas instantaneamente.
            </p>
          </div>

          {/* Card 2: Restaurar fotos antigas com IA */}
          <div className="p-6.5 rounded-2xl border border-white/5 bg-slate-900/20 hover:border-purple-500/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.05)] transition-all duration-300">
            <div className="w-11 h-11 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5">
              <ImageIcon className="w-5.5 h-5.5" />
            </div>
            <h2 className="text-xl font-bold text-white mb-3">
              Restaurar fotos antigas com IA
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Recupere memórias de família desgastadas, fotos amareladas ou com ruído de digitalização. Nosso modelo inteligente reconstrói texturas originais, suaviza imperfeições e traz as cores originais de volta.
            </p>
          </div>

          {/* Card 3: Transformar imagem em HD e 4K */}
          <div className="p-6.5 rounded-2xl border border-white/5 bg-slate-900/20 hover:border-cyan-500/20 hover:shadow-[0_0_20px_rgba(34,211,238,0.05)] transition-all duration-300">
            <div className="w-11 h-11 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5">
              <Sparkles className="w-5.5 h-5.5" />
            </div>
            <h2 className="text-xl font-bold text-white mb-3">
              Transformar imagem em HD e 4K
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Eleve a resolução de qualquer arquivo gráfico ou foto de câmera de celular. Aumente o tamanho sem perder nitidez, perfeito para impressões de banner, quadros artísticos ou anúncios de alta conversão.
            </p>
          </div>

          {/* Card 4: Melhorar fotos borradas automaticamente */}
          <div className="p-6.5 rounded-2xl border border-white/5 bg-slate-900/20 hover:border-purple-500/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.05)] transition-all duration-300 md:col-span-1 lg:col-span-1">
            <div className="w-11 h-11 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5">
              <ShieldCheck className="w-5.5 h-5.5" />
            </div>
            <h2 className="text-xl font-bold text-white mb-3">
              Melhorar fotos borradas automaticamente
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Acabe com tremores de foco rápido ou fotos tiradas em movimento. Nossa inteligência artificial corrige a dispersão de luz dos pixels embaçados de forma inteligente em poucos segundos.
            </p>
          </div>

          {/* Card 5: IA profissional para melhorar imagens */}
          <div className="p-6.5 rounded-2xl border border-white/5 bg-slate-900/20 hover:border-cyan-500/20 hover:shadow-[0_0_20px_rgba(34,211,238,0.05)] transition-all duration-300 md:col-span-2 lg:col-span-2">
            <div className="w-11 h-11 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5">
              <ArrowRight className="w-5.5 h-5.5" />
            </div>
            <h2 className="text-xl font-bold text-white mb-3">
              IA profissional para melhorar imagens
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Obtenha um acabamento profissional de agência fotográfica para suas imagens corporativas, fotos de bebês, produtos de e-commerce e cardápios de restaurantes. Resultados consistentes de alta fidelidade sem complicação.
            </p>
          </div>

        </div>

        {/* Visually Hidden (Accessible) SEO Optimized keyword cloud */}
        <div className="sr-only">
          <p>
            melhorar foto com ia, restaurar imagem antiga, upscale foto, foto hd online, melhorar selfie, imagem 4k, remover borrado, melhorar resolução da imagem, inteligência artificial fotos
          </p>
        </div>

      </div>
    </section>
  );
}
