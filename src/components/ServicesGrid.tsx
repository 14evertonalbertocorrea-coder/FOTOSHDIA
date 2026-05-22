import { 
  Sparkles, 
  EyeOff, 
  History, 
  UserCheck, 
  Sun, 
  Utensils, 
  Maximize, 
  Palette,
  ArrowRight
} from 'lucide-react';
import { ServiceItem } from '../types';

const SERVICES: ServiceItem[] = [
  {
    id: 'quality',
    title: 'Melhorar qualidade da foto',
    description: 'Aumentamos a nitidez geral da imagem, removendo ruído digital e imperfeições para um visual limpo e moderno.',
    iconName: 'Sparkles',
    badge: 'Popular',
    neonColor: 'cyan'
  },
  {
    id: 'blur',
    title: 'Remover desfoque',
    description: 'Corrigimos fotos tremidas, em movimento ou fora de foco, redefinindo as bordas e trazendo detalhes esquecidos.',
    iconName: 'EyeOff',
    neonColor: 'purple'
  },
  {
    id: 'restore',
    title: 'Restaurar foto antiga',
    description: 'Eliminamos dobras, ranhuras, sujeiras digitais e reavivamos cores amareladas de fotos físicas escaneadas.',
    iconName: 'History',
    badge: 'Mais Pedido',
    neonColor: 'cyan'
  },
  {
    id: 'face',
    title: 'Melhorar rosto (Retrato)',
    description: 'Realçamos traços faciais, corrigimos olhos fechados/vermelhos e suavizamos a pele de forma super natural.',
    iconName: 'UserCheck',
    neonColor: 'purple'
  },
  {
    id: 'lighting',
    title: 'Corrigir iluminação',
    description: 'Recuperamos fotos tiradas contra a luz ou em ambientes extremamente escuros com reequilíbrio de exposição.',
    iconName: 'Sun',
    neonColor: 'cyan'
  },
  {
    id: 'food',
    title: 'Comidas & Restaurantes',
    description: 'Deixamos fotos de pratos, hambúrgueres, pizzas e combos extremamente nítidas e irresistíveis para o seu cardápio ou iFood.',
    iconName: 'Utensils',
    badge: 'Novo',
    neonColor: 'purple'
  },
  {
    id: 'resolution',
    title: 'Aumentar resolução (4K)',
    description: 'Ampliamos o tamanho físico de imagens pequenas sem perda de qualidade, ótimo para impressões grandes ou banners.',
    iconName: 'Maximize',
    neonColor: 'cyan'
  },
  {
    id: 'colors',
    title: 'Cores mais vivas',
    description: 'Deixamos as paisagens e objetos com cores ricas, brilhantes e realistas ajustando o contraste cromático inteligente.',
    iconName: 'Palette',
    neonColor: 'purple'
  }
];

export default function ServicesGrid() {
  const handleWhatsappClick = (serviceTitle: string) => {
    const message = encodeURIComponent(`Olá! Tenho interesse no serviço de: "${serviceTitle}". Gostaria de saber como posso enviar minhas fotos.`);
    window.open(`https://wa.me/27620594136?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5.5 h-5.5" />;
      case 'EyeOff': return <EyeOff className="w-5.5 h-5.5" />;
      case 'History': return <History className="w-5.5 h-5.5" />;
      case 'UserCheck': return <UserCheck className="w-5.5 h-5.5" />;
      case 'Sun': return <Sun className="w-5.5 h-5.5" />;
      case 'Utensils': return <Utensils className="w-5.5 h-5.5" />;
      case 'Maximize': return <Maximize className="w-5.5 h-5.5" />;
      case 'Palette': return <Palette className="w-5.5 h-5.5" />;
      default: return <Sparkles className="w-5.5 h-5.5" />;
    }
  };

  const getNeonStyle = (color: string) => {
    switch (color) {
      case 'cyan': return 'text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-400 bg-cyan-500/5';
      case 'purple': return 'text-purple-400 group-hover:bg-purple-500/10 group-hover:border-purple-400 bg-purple-500/5';
      default: return 'text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-400 bg-cyan-500/5';
    }
  };

  return (
    <section id="servicos" className="py-24 relative overflow-hidden bg-[#050508]">
      {/* Visual background atmospheric lights */}
      <div className="absolute top-[10%] left-[-15%] w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-[450px] h-[450px] bg-purple-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Serviços de IA Sob Medida
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Nossos algoritmos exclusivos e equipe técnica qualificada cobrem cada necessidade de melhoramento digital. Veja o que podemos fazer por você:
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              onClick={() => handleWhatsappClick(service.title)}
              className="group relative bg-[#0c101d]/40 hover:bg-[#0c101d]/80 border border-white/5 hover:border-cyan-500/30 p-6 rounded-xl transition-all duration-300 cursor-pointer flex flex-col justify-between h-full transform hover:-translate-y-1"
            >
              <div>
                {/* Header card: Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-lg border border-white/10 transition-all duration-300 ${getNeonStyle(service.neonColor)}`}>
                    {getIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Body details */}
                <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Bottom footer pointer */}
              <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors mt-auto">
                <span>Pedir este no WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Inner glowing effect backdrop */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-cyan-400/0 via-purple-600/0 hover:from-cyan-400/3 hover:via-purple-600/3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
