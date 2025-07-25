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
    <section className="w-full h-[500px] sm:h-[600px] md:h-[650px] lg:h-[600px] flex items-center justify-center relative overflow-hidden select-none">
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
            <div key={idx} className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row h-full items-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 lg:py-8 gap-4 sm:gap-6 lg:gap-8">
              {/* Esquerda: Textos */}
              <div className={`flex-1 flex flex-col justify-center h-full text-center lg:text-left gap-4 sm:gap-5 lg:gap-4 transition-all duration-700
                ${direction === "right" ? "animate-slide-in-right" : "animate-slide-in-left"}
              `}>
                <span className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-[#FF9025] animate-fade-in-down" style={{ letterSpacing: 2 }}>{slide.miniTitle}</span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white animate-fade-in-left leading-tight sm:leading-tight" style={{ lineHeight: 1.1 }}>
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
                <p className="text-base sm:text-lg md:text-xl lg:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0 animate-fade-in-left leading-relaxed">{slide.desc}</p>
                <button className="mt-4 sm:mt-6 lg:mt-4 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#FF9025] text-[#660042] font-bold text-base sm:text-lg shadow-lg hover:bg-[#fff] hover:text-[#FF9025] transition-all duration-300 animate-fade-in-up w-fit mx-auto lg:mx-0">
                  {slide.cta}
                </button>
              </div>
              {/* Direita: Imagem - apenas em telas grandes */}
              <div className={`hidden lg:flex flex-1 justify-end items-center h-full transition-all duration-700
                ${direction === "right" ? "animate-slide-in-right" : "animate-slide-in-left"}
              `}>
                <img
                  src={modeloSelos}
                  alt="Banner Ilustração"
                  className="max-h-[350px] xl:max-h-[400px] w-auto drop-shadow-2xl rounded-3xl object-contain"
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
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 bg-black/80 backdrop-blur-sm hover:bg-[#660042] text-white border border-white/20 shadow-xl rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-300"
        aria-label="Anterior"
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>
      <button
        onClick={next}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 bg-black/80 backdrop-blur-sm hover:bg-[#FF9025] text-white border border-white/20 shadow-xl rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-300"
        aria-label="Próximo"
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>
      
      {/* Indicadores */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-30">
        {slides.map((_, idx) => (
          <span
            key={idx}
            onClick={() => goTo(idx)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-[#FF9025] cursor-pointer transition-all duration-300 ${current === idx ? 'bg-[#FF9025] scale-110 shadow-lg' : 'bg-transparent'}`}
          />
        ))}
      </div>
    </section>
  );
};

