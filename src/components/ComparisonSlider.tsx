import { useState, useRef, useEffect, MouseEvent, TouchEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, MoveHorizontal, RefreshCcw, User, Utensils, Calendar, Image, ShoppingBag } from 'lucide-react';
import { SliderExample } from '../types';

const EXAMPLES: SliderExample[] = [
  {
    id: 'portrait',
    category: 'Fotos de Bebê',
    title: 'Nitidez e Suavidade em Fotos de Bebês',
    subtitle: 'Recupere detalhes preciosos dos primeiros meses, suavizando ruídos e realçando o brilho do olhar.',
    originalUrl: '/src/assets/images/baby_portrait_1779484130101.png',
    beforeFilterClass: 'blur-[1.2px] contrast-[0.85] saturate-[0.75] brightness-[0.9]'
  },
  {
    id: 'vintage',
    category: 'Restaurar Foto Antiga',
    title: 'Revitalização de Fotos Antigas',
    subtitle: 'Eliminamos ruídos de scanner, ajustamos o contraste e restauramos cores quentes originais.',
    originalUrl: '/src/assets/images/vintage_car_memory_1779482302002.png',
    beforeFilterClass: 'sepia-[0.75] contrast-[1.0] brightness-[0.85] blur-[0.8px] saturate-[0.5] opacity-[0.92]'
  },
  {
    id: 'food',
    category: 'Pratos & Delivery',
    title: 'Fotos de Comidas e Cardápios',
    subtitle: 'Torne seus pratos, hambúrgueres e combos de restaurante extremamente apetitosos para o iFood e WhatsApp.',
    originalUrl: '/src/assets/images/gourmet_food_plate_1779484313597.png',
    beforeFilterClass: 'blur-[1.2px] contrast-[0.85] brightness-[0.82] saturate-[0.65]'
  },
  {
    id: 'landscape',
    category: 'Paisagem & Viagem',
    title: 'Nitidez Extrema para Paisagens',
    subtitle: 'Deixe montanhas, florestas e águas cristalinas com contraste cromático rico e realismo 4K.',
    originalUrl: '/src/assets/images/landscape_nature_1779483422678.png',
    beforeFilterClass: 'blur-[1.2px] saturate-[0.65] contrast-[0.85] brightness-[0.88]'
  },
  {
    id: 'product',
    category: 'Fotos de Produtos',
    title: 'Ajuste de Luz e Claridade para E-commerce',
    subtitle: 'Aumente o valor percebido das suas mercadorias com iluminação de estúdio profissional.',
    originalUrl: '/src/assets/images/product_watch_1779483438307.png',
    beforeFilterClass: 'blur-[1.5px] contrast-[0.8] brightness-[0.85] saturate-[0.8]'
  }
];

export default function ComparisonSlider() {
  const [activeTab, setActiveTab] = useState<string>('portrait');
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage (0 to 100)
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentExample = EXAMPLES.find(ex => ex.id === activeTab) || EXAMPLES[0];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches.length === 0) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  const handleReset = () => {
    setSliderPosition(50);
  };

  return (
    <section id="comparacoes" className="py-24 relative overflow-hidden bg-[#050508]">
      {/* Decorative ambient gradients */}
      <div className="absolute top-[30%] left-[-10%] w-[45%] h-[45%] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[45%] h-[35%] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/5 text-cyan-400 text-sm font-medium mb-4 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            <span>Resultado Interativo Realístico</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
            Veja a Diferença com Seus Próprios Olhos
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Garantimos o melhoramento absoluto das suas fotos. Arraste a linha central para comparar o <span className="text-rose-400 font-semibold">Antes</span> e o <span className="text-cyan-400 font-bold">Depois HD</span>.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {EXAMPLES.map((example) => {
            const isActive = example.id === activeTab;
            return (
              <button
                key={example.id}
                id={`tab-${example.id}`}
                onClick={() => {
                  setActiveTab(example.id);
                  setSliderPosition(50);
                }}
                className={`px-5 py-3 rounded-xl border text-sm md:text-base font-semibold transition-all duration-300 flex items-center gap-2 transform active:scale-95 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white border-transparent shadow-[0_4px_20px_rgba(6,182,212,0.25)] scale-[1.02]'
                    : 'bg-slate-900/60 border-white/5 text-gray-400 hover:text-white hover:border-white/10 hover:bg-slate-900'
                }`}
              >
                {example.id === 'portrait' && <User className="w-4.5 h-4.5 text-cyan-400" />}
                {example.id === 'vintage' && <Calendar className="w-4.5 h-4.5 text-purple-400" />}
                {example.id === 'food' && <Utensils className="w-4.5 h-4.5 text-cyan-400" />}
                {example.id === 'landscape' && <Image className="w-4.5 h-4.5 text-purple-400" />}
                {example.id === 'product' && <ShoppingBag className="w-4.5 h-4.5 text-cyan-400" />}
                {example.category}
              </button>
            );
          })}
        </div>

        {/* Inner Tab Context description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-center max-w-xl mx-auto mb-8 bg-slate-900/40 p-4 rounded-xl border border-white/5"
          >
            <h3 className="font-bold text-white text-lg mb-1">{currentExample.title}</h3>
            <p className="text-gray-400 text-sm">{currentExample.subtitle}</p>
          </motion.div>
        </AnimatePresence>

        {/* Slider Box */}
        <div className="max-w-4xl mx-auto relative">
          <div
            id="interactive-comparison-box"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full select-none overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] cursor-ew-resize group bg-[#050508]"
          >
            {/* DEPOIS Image (Always background at 100% size) */}
            <img
              src={currentExample.originalUrl}
              alt="Depois - Imagem com IA FotoHD"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            {/* Banner Labels: Depois */}
            <div className="absolute right-4 bottom-4 bg-cyan-500/90 backdrop-blur-sm text-white text-xs md:text-sm px-3.5 py-1.5 rounded-md font-bold tracking-wider uppercase z-20 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              Depois (HD)
            </div>

            {/* ANTES Image and Container (Clipped based on slider position) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none z-10 border-r border-cyan-400/35"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="absolute top-0 left-0 h-full w-full pointer-events-none" style={{ width: containerRef.current?.getBoundingClientRect().width }}>
                <img
                  src={currentExample.originalUrl}
                  alt="Antes - Foto desfocada e escura"
                  referrerPolicy="no-referrer"
                  className={`absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none ${currentExample.beforeFilterClass}`}
                  style={{ width: containerRef.current?.getBoundingClientRect().width, height: '100%' }}
                />
              </div>
              {/* Banner Labels: Antes */}
              <div className="absolute left-4 bottom-4 bg-red-600/95 backdrop-blur-sm text-white text-xs md:text-sm px-3.5 py-1.5 rounded-md font-bold tracking-wider uppercase z-20 shadow-md whitespace-nowrap">
                Antes
              </div>
            </div>

            {/* Slider line and grabber button */}
            <div
              className="absolute top-0 bottom-0 z-30 pointer-events-none touch-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-0 bottom-0 -left-[1.5px] w-1 bg-cyan-400 shadow-[0_0_15px_rgba(0,242,254,1)]" />
              
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 bg-slate-950 border-2 border-cyan-400 text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.5)] group-hover:scale-110 group-hover:border-white transition-all pointer-events-auto cursor-ew-resize">
                <MoveHorizontal className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-4 px-2">
            <span className="text-xs text-gray-500 italic flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Arraste a linha central para comparar os detalhes
            </span>
            <button
              id="reset-slider-button"
              onClick={handleReset}
              className="text-xs text-cyan-400 hover:text-cyan-300 transition flex items-center gap-1.5 font-semibold bg-slate-900/60 hover:bg-slate-900 py-1.5 px-3.5 rounded-lg border border-white/5 cursor-pointer"
            >
              <RefreshCcw className="w-3 h-3" /> Reajustar Centrar (50%)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
