import { Check, MessageSquare, Zap, Shield, Sparkles } from 'lucide-react';
import { PricingPlan } from '../types';

const PLANS: PricingPlan[] = [
  {
    id: 'single',
    name: 'Plano Unitário',
    photosCount: 1,
    price: '7,90',
    pricePerPhoto: 'R$ 7,90 por foto',
    features: [
      '1 foto',
      'HD profissional',
      'Remoção de ruído/desfoque',
      'Entrega em até 12h',
      'Prévia grátis para aprovação',
      'Suporte via chat no WhatsApp'
    ],
    whatsappMessage: 'Olá! Gostaria de contratar o Plano Unitário para melhorar 1 foto por R$ 7,90.'
  },
  {
    id: 'popular',
    name: 'Combo Popular 🔥',
    photosCount: 5,
    price: '24,90',
    pricePerPhoto: 'Apenas R$ 4,98 por foto',
    features: [
      '5 fotos',
      'Super resolução 4K',
      'Correção facial inteligente',
      'Ajuste de iluminação',
      'Entrega rápida',
      'Prévia grátis de cada foto',
      'Suporte prioritário via WhatsApp'
    ],
    isPopular: true,
    whatsappMessage: 'Olá! Gostaria de contratar o Combo Popular de 5 fotos por R$ 24,90.'
  },
  {
    id: 'pack10',
    name: 'Super Combo HD',
    photosCount: 10,
    price: '49,90',
    pricePerPhoto: 'Apenas R$ 4,99 por foto',
    features: [
      '10 fotos',
      'Restauração avançada',
      'Qualidade premium',
      'Ajustes manuais',
      'Prioridade máxima',
      'Prévia grátis de cada foto',
      'Suporte VIP 24h no WhatsApp'
    ],
    whatsappMessage: 'Olá! Gostaria de contratar o Super Combo HD de 10 fotos por R$ 49,90.'
  }
];

export default function Pricing() {
  const handlePurchase = (messageText: string) => {
    const encoded = encodeURIComponent(messageText);
    window.open(`https://wa.me/27620594136?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="precos" className="py-24 relative overflow-hidden bg-[#050508]">
      {/* Decorative gradients */}
      <div className="absolute top-[20%] left-[5%] w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded border border-purple-500/25 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase mb-4 tracking-widest">
            <Zap className="w-3.5 h-3.5" />
            <span>Planos sem assinatura mensal</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Preços Justos, Sem Complicações
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Você não paga nenhuma assinatura ou taxa oculta. Pague apenas pelo número de imagens que deseja que nossa inteligência artificial restaure.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              id={`pricing-card-${plan.id}`}
              className={`relative rounded-xl p-8 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 ${
                plan.isPopular
                  ? 'bg-gradient-to-b from-[#0e1327] to-[#0a0d1a] border-2 border-cyan-500/60 shadow-[0_15px_40px_rgba(6,182,212,0.15)] md:scale-[1.04]'
                  : 'bg-[#0c101d]/40 border border-white/5 hover:border-white/10 hover:bg-[#0c101d]/60'
              }`}
            >
              {/* Popularity Badge */}
              {plan.isPopular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-black px-4.5 py-1.5 rounded bg-cyan-500/10 shadow-lg tracking-wider uppercase flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 animate-bounce" />
                  Mais Escolhido
                </span>
              )}

              <div>
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-sm text-cyan-400 font-semibold mb-4">{plan.pricePerPhoto}</div>
                  
                  {/* Price info */}
                  <div className="flex items-baseline gap-1 mt-4 font-sans">
                    <span className="text-sm font-bold text-gray-400">R$</span>
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs font-medium text-gray-500 ml-1">/ pagamento único</span>
                  </div>
                </div>

                {/* Features list */}
                <div className="pt-6 border-t border-white/5 space-y-4 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-sm text-gray-300">
                      <div className={`mt-0.5 rounded-full p-0.5 flex-shrink-0 ${
                        plan.isPopular ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-gray-400'
                      }`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Purchase Button CTA */}
              <button
                id={`buy-plan-${plan.id}-via-whatsapp`}
                onClick={() => handlePurchase(plan.whatsappMessage)}
                className={`w-full py-4 px-4 rounded-xl font-bold transition-all duration-300 select-none cursor-pointer flex items-center justify-center gap-2 ${
                  plan.isPopular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:opacity-95 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]'
                    : 'bg-[#050508] text-[#22d3ee] border border-cyan-500/30 hover:border-cyan-400 hover:bg-[#0c101d]'
                }`}
              >
                <MessageSquare className="w-4.5 h-4.5" />
                <span>Comprar pelo WhatsApp</span>
              </button>
            </div>
          ))}
        </div>

        {/* Security / Assurance badges under pricing */}
        <div className="max-w-2xl mx-auto mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-xs md:text-sm text-gray-500 font-medium font-sans">
          <div className="flex items-center gap-1.5 bg-[#090d16] px-3.5 py-2 rounded-lg border border-white/5">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>Método de pagamento 100% seguro via Pix</span>
          </div>
          <div className="flex items-center gap-1.5 bg-[#090d16] px-3.5 py-2 rounded-lg border border-white/5">
            <Check className="w-4 h-4 text-cyan-400" />
            <span>Garantia de Satisfação Estrita</span>
          </div>
        </div>

      </div>
    </section>
  );
}
