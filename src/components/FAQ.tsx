import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItem } from '../types';

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'q1',
    question: 'Quanto tempo leva para as minhas fotos ficarem prontas?',
    answer: 'O tempo de entrega depende do plano escolhido por você. O Plano Unitário é entregue em até 12 horas. O Combo Popular de 5 fotos é entregue em até 6 horas, e o Super Combo de 10 fotos tem prioridade expressa máxima, sendo entregue em até 3 horas.'
  },
  {
    id: 'q2',
    question: 'Como faço para enviar as minhas fotos para vocês?',
    answer: 'É extremamente simples! Você não precisa usar formulários ou e-mails. Basta clicar em qualquer botão de compra do site que você será direcionado para o nosso WhatsApp comercial. Lá, basta nos enviar as imagens que você quer tratar como se estivesse enviando para um amigo!'
  },
  {
    id: 'q3',
    question: 'E se eu não gostar do resultado final das fotos?',
    answer: 'Você não tem risco nenhum conosco! Primeiro, nós tratamos suas fotos e enviamos a você um arquivo de amostra com marca d\'água para avaliação. Se você ficar totalmente satisfeito, realiza o pagamento e nós liberamos o arquivo final em alta definição total (HD). Se não gostar, pode pedir reajustes ou simplesmente desistir sem pagar absolutamente nada.'
  },
  {
    id: 'q4',
    question: 'Quais são as formas de pagamento disponíveis?',
    answer: 'Aceitamos PIX (que é a forma mais prática, rápida e que garante a entrega imediata dos seus arquivos HD) ou Cartão de Crédito parcelado. Lembrando que o pagamento é feito de forma totalmente segura e após a sua aprovação das prévias.'
  },
  {
    id: 'q5',
    question: 'A IA funciona com fotos muito antigas, rasgadas ou riscadas?',
    answer: 'Sim! Nossa inteligência artificial avançada foi treinada especificamente para preencher lacunas, reconstruir rostos, suavizar arranhões e restaurar o brilho e contraste de fotografias analógicas envelhecidas ou guardadas por décadas.'
  },
  {
    id: 'q6',
    question: 'Minhas fotos ficam salvas de forma segura? Como funciona a privacidade?',
    answer: 'A privacidade das suas fotos é nossa preocupação número um. Seus arquivos originais e restaurados são manipulados estritamente para o propósito do serviço e são deletados de forma permanente de todos os nossos bancos de dados em até 48 horas úteis após a entrega e conclusão do pedido.'
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('q1');

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#050508]">
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded border border-cyan-500/25 bg-cyan-500/5 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Dúvidas comuns</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Se você ainda tem alguma dúvida sobre o nosso serviço de melhoramento com Inteligência Artificial, confira as respostas abaixo:
          </p>
        </div>

        {/* Accordions container */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                id={`faq-item-${item.id}`}
                className="bg-[#0c101d]/40 border border-white/5 hover:border-cyan-500/20 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-white focus:outline-none focus:ring-0 group select-none cursor-pointer"
                >
                  <span className="text-base md:text-lg group-hover:text-cyan-400 transition-colors duration-200">
                    {item.question}
                  </span>
                  <div className={`ml-4 flex-shrink-0 p-1.5 rounded bg-slate-950 border border-white/5 text-gray-400 group-hover:text-white transition-all duration-300 ${
                    isOpen ? 'rotate-180 border-cyan-500/30 text-cyan-400' : ''
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Answer body with expanding clip height */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-80 border-t border-white/5' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 text-sm md:text-base text-gray-400 leading-relaxed bg-[#0c101d]/20 font-medium">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
