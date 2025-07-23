import { useEffect, useRef, useState } from "react";
import modeloSelos from "@/assets/Modelo-Selos.png";
import backgroundVideo from "@/assets/video-luzes-vertical.mp4";

const slides = [
  {
    miniTitle: "Sua Marca em Primeiro Lugar",
    title: "Marketing Digital com Resultados Reais",
    desc: "Impulsione sua presença online com estratégias inteligentes, criativas e personalizadas. Somos especialistas em transformar negócios em marcas de sucesso.",
    cta: "Fale com um especialista",
  },
  {
    miniTitle: "Tecnologia & Performance",
    title: "Soluções Digitais para Crescer",
    desc: "Utilizamos tecnologia de ponta e análise de dados para gerar crescimento sustentável e resultados mensuráveis para sua empresa.",
    cta: "Solicite um diagnóstico",
  },
  {
    miniTitle: "Confiança & Credibilidade",
    title: "Sua Agência Parceira de Verdade",
    desc: "Transformamos clínicas em marcas admiradas no setor, preferidas pelos pacientes e reconhecidas pela excelência. Mais que uma agência, somos parceiros do seu negócio.",
    cta: "Conheça nossos cases",
  },
];

const AUTOPLAY_INTERVAL = 6000;

export const Banner = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const numSlides = slides.length;

  // Autoplay
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDirection("right");
      setCurrent((prev) => (prev + 1) % numSlides);
    }, AUTOPLAY_INTERVAL);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [current, numSlides]);

  // Navegação manual
  const goTo = (idx: number) => {
    setDirection(idx > current || (current === numSlides - 1 && idx === 0) ? "right" : "left");
    setCurrent(idx);
  };
  const prev = () => {
    setDirection("left");
    setCurrent((prev) => (prev - 1 + numSlides) % numSlides);
  };
  const next = () => {
    setDirection("right");
    setCurrent((prev) => (prev + 1) % numSlides);
  };

  return (
    <section className="w-full h-[540px] flex items-center justify-center relative overflow-hidden select-none">
      {/* Vídeo de fundo fixo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Overlay escuro sobre o vídeo */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Conteúdo animado */}
      <div className="w-full h-full relative z-10 flex items-center justify-center">
        {slides.map((slide, idx) => {
          if (idx !== current) return null;
          return (
            <div key={idx} className="w-full max-w-7xl mx-auto flex flex-row h-full items-center px-8 gap-8">
              {/* Esquerda: Textos */}
              <div className={`flex-1 flex flex-col justify-center h-full text-left gap-4 transition-all duration-700
                ${direction === "right" ? "animate-slide-in-right" : "animate-slide-in-left"}
              `}>
                <span className="uppercase tracking-widest text-sm font-semibold text-[#FF9025] animate-fade-in-down" style={{ letterSpacing: 2 }}>{slide.miniTitle}</span>
                                 <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in-left" style={{ lineHeight: 1.1 }}>
                   {slide.title.split(' ').map((word, index) => {
                     if (word.includes('Marketing') || word.includes('Soluções') || word.includes('Agência')) {
                       return (
                         <span key={index} className="shimmer-gradient">
                           {word}{' '}
                         </span>
                       );
                     }
                     return word + ' ';
                   })}
                 </h1>
                <p className="text-lg md:text-xl text-white/80 max-w-xl animate-fade-in-left">{slide.desc}</p>
                <button className="mt-2 px-6 py-2 rounded-full bg-[#FF9025] text-[#660042] font-bold text-base shadow-lg hover:bg-[#fff] hover:text-[#FF9025] transition-all duration-300 animate-fade-in-up">
                  {slide.cta}
                </button>
              </div>
              {/* Direita: Imagem */}
              <div className={`flex-1 flex justify-end items-center h-full transition-all duration-700
                ${direction === "right" ? "animate-slide-in-right" : "animate-slide-in-left"}
              `}>
                <img
                  src={modeloSelos}
                  alt="Banner Ilustração"
                  className="max-h-[400px] w-auto drop-shadow-2xl rounded-3xl object-contain"
                  draggable={false}
                />
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Setas */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-[#1a1a1a]/70 hover:bg-[#660042] text-white border-none shadow-lg rounded-full w-10 h-10 flex items-center justify-center transition-all"
        aria-label="Anterior"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-[#1a1a1a]/70 hover:bg-[#FF9025] text-white border-none shadow-lg rounded-full w-10 h-10 flex items-center justify-center transition-all"
        aria-label="Próximo"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>
      
      {/* Indicadores */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, idx) => (
          <span
            key={idx}
            onClick={() => goTo(idx)}
            className={`w-4 h-4 rounded-full border-2 border-[#FF9025] cursor-pointer transition-all duration-300 ${current === idx ? 'bg-[#FF9025] scale-110 shadow-lg' : 'bg-transparent'}`}
          />
        ))}
      </div>
    </section>
  );
};

// Animações customizadas para slide lateral
// Adicione no seu index.css:
//
// @keyframes slide-in-right {
//   0% { opacity: 0; transform: translateX(80px); }
//   100% { opacity: 1; transform: translateX(0); }
// }
// .animate-slide-in-right { animation: slide-in-right 0.7s cubic-bezier(.4,0,.2,1) both; }
//
// @keyframes slide-in-left {
//   0% { opacity: 0; transform: translateX(-80px); }
//   100% { opacity: 1; transform: translateX(0); }
// }
// .animate-slide-in-left { animation: slide-in-left 0.7s cubic-bezier(.4,0,.2,1) both; }