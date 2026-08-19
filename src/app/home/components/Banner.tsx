import { useEffect, useRef, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import banner1 from "@/assets/fullbanner-revita-1.jpg";
import banner3 from "@/assets/fullbanner-revita-3.jpg";

const slides = [
  {
    image: banner1,
    alt: "Marketing Digital para Clínicas Médicas. Transformamos clínicas em referência no setor com estratégias que aumentam a confiança dos pacientes e geram mais consultas qualificadas.",
  },
  {
    image: banner3,
    alt: "Sua clínica em primeiro lugar. A decisão pela clínica começa muito antes do agendamento.",
  },
];

const AUTOPLAY_INTERVAL = 10000;

export const Banner = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const numSlides = slides.length;

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % numSlides);
    }, AUTOPLAY_INTERVAL);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, numSlides]);

  const goTo = (idx: number) => setCurrent(idx);
  const prev = () => setCurrent((prev) => (prev - 1 + numSlides) % numSlides);
  const next = () => setCurrent((prev) => (prev + 1) % numSlides);

  return (
    <section className="relative w-full overflow-hidden select-none bg-black">
      <h1 className="sr-only">Marketing Digital para Clínicas Médicas</h1>

      {slides.map((slide, idx) => (
        <img
          key={slide.alt}
          src={slide.image}
          alt={slide.alt}
          draggable={false}
          className={`w-full h-auto block transition-opacity duration-1000 ${
            current === idx ? "relative opacity-100" : "absolute inset-0 opacity-0"
          }`}
        />
      ))}

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

      <div className="lg:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30">
        <button
          onClick={prev}
          className="bg-black/80 backdrop-blur-sm hover:bg-[#660042] text-white border border-white/20 shadow-xl rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300"
          aria-label="Anterior"
        >
          <IoChevronBack className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 bg-black/30 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/20 shadow-2xl">
          {slides.map((slide, idx) => (
            <button
              key={slide.alt}
              onClick={() => goTo(idx)}
              className="group relative"
              aria-label={`Ir para slide ${idx + 1}`}
            >
              <div className={`relative w-3 h-3 rounded-full transition-all duration-700 ease-out ${
                current === idx ? "scale-125" : "scale-100"
              }`}>
                <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                  current === idx
                    ? "bg-gradient-to-r from-[#FF9025] to-[#FF6B35] shadow-lg shadow-[#FF9025]/40"
                    : "bg-white/40 group-hover:bg-white/60"
                }`} />
                {current === idx && (
                  <>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF9025] to-[#FF6B35] animate-ping opacity-75" />
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#FF9025]/30 to-[#FF6B35]/30 blur-sm animate-pulse" />
                  </>
                )}
                <div className={`absolute inset-1 rounded-full transition-all duration-300 ${
                  current === idx
                    ? "bg-gradient-to-r from-[#FF9025] to-[#FF6B35]"
                    : "bg-white/80 group-hover:bg-white"
                }`} />
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={next}
          className="bg-black/80 backdrop-blur-sm hover:bg-[#FF9025] text-white border border-white/20 shadow-xl rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300"
          aria-label="Próximo"
        >
          <IoChevronForward className="w-5 h-5" />
        </button>
      </div>

      <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 gap-4 z-30">
        <div className="flex items-center gap-4 bg-black/30 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/20 shadow-2xl">
          {slides.map((slide, idx) => (
            <button
              key={slide.alt}
              onClick={() => goTo(idx)}
              className="group relative"
              aria-label={`Ir para slide ${idx + 1}`}
            >
              <div className={`relative w-4 h-4 rounded-full transition-all duration-700 ease-out ${
                current === idx ? "scale-150" : "scale-100"
              }`}>
                <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                  current === idx
                    ? "bg-gradient-to-r from-[#FF9025] to-[#FF6B35] shadow-lg shadow-[#FF9025]/40"
                    : "bg-white/40 group-hover:bg-white/60"
                }`} />
                {current === idx && (
                  <>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF9025] to-[#FF6B35] animate-ping opacity-75" />
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#FF9025]/30 to-[#FF6B35]/30 blur-sm animate-pulse" />
                  </>
                )}
                <div className={`absolute inset-1 rounded-full transition-all duration-300 ${
                  current === idx
                    ? "bg-gradient-to-r from-[#FF9025] to-[#FF6B35]"
                    : "bg-white/80 group-hover:bg-white"
                }`} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
