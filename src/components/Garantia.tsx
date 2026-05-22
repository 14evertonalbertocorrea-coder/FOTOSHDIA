import { ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Garantia() {
  const points = [
    'Enviamos uma prévia com marca d\'água da foto melhorada.',
    'Você faz zoom, analisa e só paga se gostar de verdade.',
    'Se desejar ajustes, realizamos a correção gratuitamente.',
    'Se mesmo assim não gostar, o serviço é cancelado sem custos.'
  ];

  return (
    <section id="garantia" className="py-20 relative overflow-hidden bg-[#050508]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        <div className="bg-gradient-to-r from-[#0c101d]/60 to-[#0c101d]/20 border border-emerald-500/20 rounded-xl p-8 md:p-12 shadow-[0_15px_40px_rgba(16,185,129,0.05)]">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
            {/* Visual guarantee badge icon */}
            <div className="flex-shrink-0 text-center lg:text-left">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto lg:mx-0 rounded-xl bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.15)]">
                <ShieldCheck className="w-12 h-12 text-emerald-400" />
                <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-emerald-300 animate-spin-slow" style={{ animationDuration: '6s' }} />
              </div>
              <div className="text-emerald-400 text-xs font-mono tracking-widest font-bold uppercase mt-4 text-center">
                Risco Zero
              </div>
            </div>

            {/* Core guaranteed text */}
            <div className="flex-grow text-center lg:text-left space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Sua Satisfação é Nossa Lei
              </h2>
              
              <p className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
                &ldquo;Você só aprova se gostar do resultado.&rdquo;
              </p>
              
              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl font-normal">
                Queremos que você tenha total tranquilidade ao contratar nosso serviço de restauração por IA. Nós confiamos tanto em nossa tecnologia que oferecemos segurança total para o seu bolso.
              </p>

              {/* Step checks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 text-left border-t border-white/5">
                {points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-gray-300 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
