import { Check, X, ArrowRight } from 'lucide-react';

export default function StaticBeforeAfter() {
  const cases = [
    {
      title: 'Restauração de Fotos de Bebê em Alta Definição',
      desc: 'Recupere os momentos mais fofos do seu bebê com foco perfeito nos olhos e pele super suave.',
      imageUrl: '/src/assets/images/baby_portrait_1779484130101.png',
      beforeFilter: 'blur-[1.2px] brightness-[0.9] contrast-[0.85] saturate-[0.75]',
      beforeLabels: ['Olhar embaçado', 'Baixa iluminação', 'Ruídos de foto tremida'],
      afterLabels: ['Olhos super expressivos', 'Pele fofa e nítida', 'Brilho profissional'],
    },
    {
      title: 'Colorização e Ajuste de Fotos Antigas',
      desc: 'Recuperando o aspect de época, adicionando cor vibrante e brilho realista.',
      imageUrl: '/src/assets/images/vintage_car_memory_1779482302002.png',
      beforeFilter: 'sepia-[0.8] blur-[0.8px] contrast-[1.0] scale-[1.01] saturate-[0.5]',
      beforeLabels: ['Arranhões visuais', 'Desgastada e desbotada', 'Tons amarelados'],
      afterLabels: ['Cores vivas e ricas', 'Superfícies polidas HD', 'Nitidez fotográfica'],
    },
    {
      title: 'Fotos de Comida e Cardápios para Restaurantes',
      desc: 'Deixe as fotos dos pratos do seu restaurante extremamente nítidas, com cores vibrantes e texturas realistas para encantar clientes no iFood e redes sociais.',
      imageUrl: '/src/assets/images/gourmet_food_plate_1779484313597.png',
      beforeFilter: 'blur-[1.2px] contrast-[0.85] brightness-[0.82] saturate-[0.65]',
      beforeLabels: ['Cores opacas e sem força', 'Falta de foco e textura', 'Iluminação amadora e fria'],
      afterLabels: ['Hambúrguer suculento em foco', 'Cores apetitosas e ricas', 'Pronto para vender mais'],
    },
    {
      title: 'Nitidez Absoluta em Paisagens & Viagens',
      desc: 'Transformação de registros de viagens e natureza em cartões postais nítidos com cores e sombras balanceadas.',
      imageUrl: '/src/assets/images/landscape_nature_1779483422678.png',
      beforeFilter: 'blur-[1.2px] saturate-[0.65] contrast-[0.85] brightness-[0.88]',
      beforeLabels: ['Cores desbotadas', 'Falta de nitidez no infinito', 'Névoa digital e ruídos'],
      afterLabels: ['Ultra HD com cores ricas', 'Contraste atmosférico', 'Detalhes perfeitos de relevo'],
    },
    {
      title: 'Imagens de Produtos de Altíssima Conversão',
      desc: 'Valorize os detalhes, materiais e texturas das mercadorias de sua loja online com tratamento premium de estúdio.',
      imageUrl: '/src/assets/images/product_watch_1779483438307.png',
      beforeFilter: 'blur-[1.5px] contrast-[0.8] brightness-[0.85] saturate-[0.8]',
      beforeLabels: ['Visual amador e desfocado', 'Falta de apelo premium', 'Foco ruim nas texturas'],
      afterLabels: ['Texturas metálicas nítidas', 'Iluminação profissional', 'Pronto para anúncios e e-commerce'],
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#050508]">
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block py-1.5 px-3.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">
            Amostra de casos reais
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Amostra de Casos de Sucesso
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Veja abaixo o comparativo direto de fotos enviadas por clientes em suas respectivas categorias e admire o poder do processamento neural.
          </p>
        </div>

        {/* Dynamic Static cards layout */}
        <div className="space-y-16">
          {cases.map((item, idx) => (
            <div 
              key={idx}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Comparative Dual Image Frame */}
              <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                {/* ANTES Block */}
                <div className="relative aspect-square overflow-hidden rounded-xl border border-red-500/20 bg-[#0c101d]/60 shadow-lg">
                  <img
                    src={item.imageUrl}
                    alt="Antes de melhorar com IA"
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover pointer-events-none select-none ${item.beforeFilter}`}
                  />
                  <div className="absolute left-3 top-3 bg-red-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-wide uppercase">
                    Antes
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 to-transparent p-4 flex flex-col gap-1.5">
                    {item.beforeLabels.map((lbl, li) => (
                      <span key={li} className="text-red-300 text-xs flex items-center gap-1.5 font-medium">
                        <X className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                        {lbl}
                      </span>
                    ))}
                  </div>
                </div>

                {/* DEPOIS Block */}
                <div className="relative aspect-square overflow-hidden rounded-xl border border-cyan-500/30 bg-[#0c101d]/60 shadow-lg">
                  <img
                    src={item.imageUrl}
                    alt="Depois de melhorar com IA"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover pointer-events-none select-none hover:scale-102 transition duration-500"
                  />
                  <div className="absolute left-3 top-3 bg-cyan-500/90 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded tracking-wide uppercase">
                    Depois HD
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 to-transparent p-4 flex flex-col gap-1.5">
                    {item.afterLabels.map((lbl, li) => (
                      <span key={li} className="text-cyan-300 text-xs flex items-center gap-1.5 font-semibold">
                        <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        {lbl}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Informative text side */}
              <div className="w-full lg:w-1/2 text-left space-y-4">
                <span className="text-xs text-purple-400 font-mono font-bold tracking-widest uppercase">
                  Caso de Uso {idx + 1}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
                
                <div className="pt-4 border-t border-white/5 space-y-3">
                  <div className="text-xs text-gray-500 font-bold tracking-wider">
                    PROCESSO DE OTIMIZAÇÃO APLICADO:
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300 font-medium">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      Remoção de borrão por IA
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      Alinhamento cromático
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      Super resolução 4K
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      Curadoria manual final
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
