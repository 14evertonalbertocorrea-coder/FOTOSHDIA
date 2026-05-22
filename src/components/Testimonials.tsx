import { motion } from 'motion/react';
import { Star, MessageSquareCode, Quote, Check, AppWindow } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  category: string;
  avatarInitials: string;
  avatarBg: string;
  text: string;
  rating: number;
  highlightText: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'baby',
    name: 'Camila Ramos',
    role: 'Mãe do Noah',
    category: 'Fotos de Bebê',
    avatarInitials: 'CR',
    avatarBg: 'from-pink-500 to-indigo-500',
    text: 'A única foto que tirei do meu filho nos primeiros minutos na sala de parto estava borrada e escura por causa do nervosismo. Mandar essa foto para a FotoHD AI foi a melhor escolha que fiz. O rostinho e o olhar dele ficaram extremamente nítidos e iluminados. Chorei de emoção ao ver o resultado final.',
    rating: 5,
    highlightText: 'Foco perfeito no olhar do recém-nascido!'
  },
  {
    id: 'food',
    name: 'Roberto Santini',
    role: 'Chef e Proprietário da Santini Burger',
    category: 'Comidas & Restaurantes',
    avatarInitials: 'RS',
    avatarBg: 'from-orange-500 to-amber-600',
    text: 'Substituímos as fotos comuns do nosso cardápio no iFood e no WhatsApp pelas fotos tratadas. O ganho de nitidez e a correção de cores deixaram os hambúrgueres extremamente suculentos. Tivemos um aumento direto de 28% nos pedidos de fim de semana simplesmente pelo apelo visual.',
    rating: 5,
    highlightText: 'Nossos hambúrgueres agora vendem sozinhos!'
  },
  {
    id: 'product',
    name: 'Eduardo Kovacic',
    role: 'Diretor E-commerce - Relógios Imperial',
    category: 'E-commerce e Produtos',
    avatarInitials: 'EK',
    avatarBg: 'from-cyan-500 to-blue-600',
    text: 'No e-commerce, o cliente compra com os olhos. O trabalho de upscale em 4K e realce de relevo que a IA aplicou nos metais e mostradores dos relógios foi surpreendente. Agregou um valor premium absurdo aos nossos anúncios, reduzindo nossas dúvidas no suporte.',
    rating: 5,
    highlightText: 'Padrão estúdio fotográfico oficial.'
  },
  {
    id: 'vintage',
    name: 'Helena Albuquerque',
    role: 'Historiadora e Pesquisadora',
    category: 'Restauração de Fotos Antigas',
    avatarInitials: 'HA',
    avatarBg: 'from-purple-500 to-fuchsia-600',
    text: 'Tinha apenas um registro do casamento dos meus pais em 1974, muito riscado e com as faces esmaecidas pelo tempo. A equipe da FotoHD AI entregou uma restauração impecável: manteve a textura nostálgica da época, mas eliminou cada risco e devolveu o brilho original aos rostos de forma natural.',
    rating: 5,
    highlightText: 'Resgatou as memórias mais raras da família!'
  },
  {
    id: 'landscape',
    name: 'Gustavo Mendes',
    role: 'Fotógrafo Curador de Viagens',
    category: 'Nitidez em Paisagens',
    avatarInitials: 'GM',
    avatarBg: 'from-emerald-500 to-teal-600',
    text: 'Capturei fotos lindas no Salar de Uyuni com o celular, mas a claridade extrema do sol chapou os detalhes das montanhas de sal. Com a ampliação em altíssima resolução e a filtragem inteligente de névoa, as fotos se transformaram em painéis prontos para impressão em quadros grandes.',
    rating: 5,
    highlightText: 'Cores e contraste dignos de câmera DSLR!'
  },
  {
    id: 'portrait',
    name: 'Mariana Frota',
    role: 'Especialista em Atração de Talentos',
    category: 'Retrato Executivo',
    avatarInitials: 'MF',
    avatarBg: 'from-violet-500 to-pink-600',
    text: 'Precisava atualizar minha foto de perfil do LinkedIn, mas só tinha selfies do dia a dia. Fiquei chocada com a qualidade: mantiveram meus traços de forma fiel e sem parecer artificial, ao mesmo tempo em que a luz e o plano de fundo parecem ter sido feitos em um estúdio caro especializado.',
    rating: 5,
    highlightText: 'Excelente para autoridade profissional.'
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 relative overflow-hidden bg-[#06060c] border-t border-white/5">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[25%] right-[-10%] w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <MessageSquareCode className="w-3.5 h-3.5" />
            <span>Opinião de quem já aprovou</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Histórias Reais de Clientes Apaixonados
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            De pais emocionados a donos de restaurantes que vendem mais, veja por que somos a escolha número um em melhoramento de fotos com Inteligência Artificial.
          </p>
        </div>

        {/* Testimonials Grid (Bento Style Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col p-6.5 rounded-2xl border border-white/5 bg-slate-900/15 backdrop-blur-sm relative hover:border-white/10 hover:bg-slate-900/30 transition-all duration-300 group"
            >
              {/* Double Quotes Watermark */}
              <Quote className="absolute top-5 right-5 w-8 h-8 text-white/5 group-hover:text-cyan-500/10 group-hover:scale-110 transition-all duration-300 pointer-events-none" />

              {/* Service Tag Badge */}
              <div className="flex items-center gap-1.5 mb-5">
                <span className="text-[10px] font-bold text-cyan-400 bg-cyan-950/70 border border-cyan-500/20 px-2 py-0.5 rounded uppercase tracking-wider font-mono">
                  {t.category}
                </span>
                <span className="text-xs text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded flex items-center gap-1 font-semibold ml-auto">
                  <Check className="w-3 h-3" /> Aprovada
                </span>
              </div>

              {/* Stars Rating Area */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4.5 h-4.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Highlight Highlight Quote block */}
              <h3 className="text-sm font-extrabold text-white mb-2 leading-tight">
                "{t.highlightText}"
              </h3>

              {/* Testimonial Core Opinion Text */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic flex-grow">
                {t.text}
              </p>

              {/* Client Info Info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-white/5">
                <div className={`w-11 h-11 rounded-lg bg-gradient-to-br ${t.avatarBg} flex items-center justify-center font-bold text-white text-sm shadow`}>
                  {t.avatarInitials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-gray-500 leading-normal">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global summary count beneath reviews */}
        <div className="mt-14 p-5 rounded-xl border border-dashed border-white/10 bg-slate-950/40 text-center max-w-2xl mx-auto">
          <p className="text-xs text-gray-400 leading-relaxed">
            Mais de <strong className="text-cyan-400 font-bold">12.450 fotos restauradas</strong> por fotógrafos de estúdio, agências de marketing, pais de família e heróis de e-commerce de todo o Brasil. <strong className="text-emerald-400 font-extrabold">Taxa de aprovação de 99.4%!</strong>
          </p>
        </div>

      </div>
    </section>
  );
}
