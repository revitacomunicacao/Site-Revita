import { useEffect, useRef, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import modeloSelos from "@/assets/Modelo-Selos.png";
import backgroundVideo from "@/assets/video-luzes-vertical.mp4";
import video from "@/assets/video.mp4"
import video2 from "@/assets/video2.mp4"
import video3 from "@/assets/video3.mp4"

const slides = [
  {
    miniTitle: "Especialistas em Clínicas Médicas",
    title: "Marketing Digital para Clínicas Médicas",
    desc: "Transformamos Clínicas Médicas em referências no setor. Estratégias especializadas que aumentam a confiança dos pacientes e geram mais consultas qualificadas.",
    cta: "Fale com um especialista",
    background: backgroundVideo,
    image: modeloSelos,
  },
  {
    miniTitle: "Especialistas em Clínicas Médicas",
    title: "Marketing Digital para Clínicas Médicas",
    desc: "Transformamos Clínicas Médicas em referências no setor. Estratégias especializadas que aumentam a confiança dos pacientes e geram mais consultas qualificadas.",
    cta: "Fale com um especialista",
    background: video,
  },
  {
    miniTitle: "Resultados Comprovados",
    title: "Soluções Digitais para Clínicas Médicas",
    desc: "Utilizamos tecnologia avançada e análise de dados para gerar crescimento sustentável e resultados mensuráveis para sua Clínica Médica.",
    cta: "Solicite um diagnóstico",
    background: video2,
  },
  {
    miniTitle: "Confiança & Credibilidade",
    title: "Sua Clínica Médica em Primeiro Lugar",
    desc: "Transformamos Clínicas Médicas em marcas admiradas no setor, preferidas pelos pacientes e reconhecidas pela excelência. Mais que uma agência, somos parceiros do seu negócio.",
    cta: "Conheça nossos cases",
    background: video3,
  },
];

const AUTOPLAY_INTERVAL = 10000;

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
      {/* Backgrounds individuais com fade */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            current === idx ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={slide.background}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

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
                <a href="https://api.whatsapp.com/send/?phone=5534996374463&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="mt-4 sm:mt-6 lg:mt-4 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#FF9025] text-[#660042] font-bold text-base sm:text-lg shadow-lg hover:bg-[#fff] hover:text-[#FF9025] transition-all duration-300 animate-fade-in-up w-fit mx-auto lg:mx-0 inline-block">
                  {slide.cta}
                </a>
              </div>
              {/* Direita: Imagem - apenas em telas grandes */}
              {slide.image && (
                <div className={`hidden lg:flex flex-1 justify-end items-center h-full transition-all duration-700
                  ${direction === "right" ? "animate-slide-in-right" : "animate-slide-in-left"}
                `}>
                  <img
                    src={slide.image}
                    alt="Banner Ilustração"
                    className="max-h-[350px] xl:max-h-[400px] w-auto drop-shadow-2xl rounded-3xl object-contain"
                    draggable={false}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      {/* Setas para desktop */}
      <button
        onClick={prev}
        className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/80 backdrop-blur-sm hover:bg-[#660042] text-white border border-white/20 shadow-xl rounded-full w-12 h-12 items-center justify-center transition-all duration-300"
        aria-label="Anterior"
      >
        <IoChevronBack className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/80 backdrop-blur-sm hover:bg-[#FF9025] text-white border border-white/20 shadow-xl rounded-full w-12 h-12 items-center justify-center transition-all duration-300"
        aria-label="Próximo"
      >
        <IoChevronForward className="w-6 h-6" />
      </button>
      
      {/* Container para setas e indicadores no mobile */}
      <div className="lg:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30">
        {/* Seta esquerda */}
        <button
          onClick={prev}
          className="bg-black/80 backdrop-blur-sm hover:bg-[#660042] text-white border border-white/20 shadow-xl rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300"
          aria-label="Anterior"
        >
          <IoChevronBack className="w-5 h-5" />
        </button>
        
        {/* Indicadores com animações modernas */}
        <div className="flex items-center gap-3 bg-black/30 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/20 shadow-2xl">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className="group relative"
              aria-label={`Ir para slide ${idx + 1}`}
            >
              {/* Indicador principal */}
              <div className={`relative w-3 h-3 rounded-full transition-all duration-700 ease-out ${
                current === idx 
                  ? 'scale-125' 
                  : 'scale-100'
              }`}>
                {/* Círculo de fundo com gradiente */}
                <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                  current === idx 
                    ? 'bg-gradient-to-r from-[#FF9025] to-[#FF6B35] shadow-lg shadow-[#FF9025]/40' 
                    : 'bg-white/40 group-hover:bg-white/60'
                }`} />
                
                {/* Efeito de pulso para o ativo */}
                {current === idx && (
                  <>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF9025] to-[#FF6B35] animate-ping opacity-75" />
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#FF9025]/30 to-[#FF6B35]/30 blur-sm animate-pulse" />
                  </>
                )}
                
                {/* Círculo interno */}
                <div className={`absolute inset-1 rounded-full transition-all duration-300 ${
                  current === idx 
                    ? 'bg-gradient-to-r from-[#FF9025] to-[#FF6B35]' 
                    : 'bg-white/80 group-hover:bg-white'
                }`} />
              </div>
              
              
            </button>
          ))}
        </div>
        
        {/* Seta direita */}
        <button
          onClick={next}
          className="bg-black/80 backdrop-blur-sm hover:bg-[#FF9025] text-white border border-white/20 shadow-xl rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300"
          aria-label="Próximo"
        >
          <IoChevronForward className="w-5 h-5" />
        </button>
      </div>
      
      {/* Indicadores modernos para desktop */}
      <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 gap-4 z-30">
        <div className="flex items-center gap-4 bg-black/30 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/20 shadow-2xl">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className="group relative"
              aria-label={`Ir para slide ${idx + 1}`}
            >
              {/* Indicador principal */}
              <div className={`relative w-4 h-4 rounded-full transition-all duration-700 ease-out ${
                current === idx 
                  ? 'scale-150' 
                  : 'scale-100'
              }`}>
                {/* Círculo de fundo com gradiente */}
                <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                  current === idx 
                    ? 'bg-gradient-to-r from-[#FF9025] to-[#FF6B35] shadow-lg shadow-[#FF9025]/40' 
                    : 'bg-white/40 group-hover:bg-white/60'
                }`} />
                
                {/* Efeito de pulso para o ativo */}
                {current === idx && (
                  <>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF9025] to-[#FF6B35] animate-ping opacity-75" />
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#FF9025]/30 to-[#FF6B35]/30 blur-sm animate-pulse" />
                  </>
                )}
                
                {/* Círculo interno */}
                <div className={`absolute inset-1 rounded-full transition-all duration-300 ${
                  current === idx 
                    ? 'bg-gradient-to-r from-[#FF9025] to-[#FF6B35]' 
                    : 'bg-white/80 group-hover:bg-white'
                }`} />
              </div>
              
              
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

