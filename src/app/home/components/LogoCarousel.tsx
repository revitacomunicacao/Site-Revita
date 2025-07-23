import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import logoColorado from "@/assets/logoColorado.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clientes from "@/assets/clientes.svg"
import { AnimatedElement } from "@/components/AnimatedElement";

const logos = [
  { name: "Colorado", logo: logoColorado, bg: "bg-gradient-to-br from-[#660042] to-[#8B008B]" },
  { name: "Colorado", logo: logoColorado, bg: "bg-gradient-to-br from-[#FF9025] to-[#FF6B35]" },
  { name: "Colorado", logo: logoColorado, bg: "bg-gradient-to-br from-[#4A148C] to-[#7B1FA2]" },
  { name: "Colorado", logo: logoColorado, bg: "bg-gradient-to-br from-[#FF8C00] to-[#FFA500]" },
  { name: "Colorado", logo: logoColorado, bg: "bg-gradient-to-br from-[#6A0DAD] to-[#8E24AA]" },
  { name: "Colorado", logo: logoColorado, bg: "bg-gradient-to-br from-[#FF7F50] to-[#FF6347]" },
  { name: "Colorado", logo: logoColorado, bg: "bg-gradient-to-br from-[#5D3FD3] to-[#7C4DFF]" },
];

export const LogoCarousel = () => {
  return (
    <section className="w-full bg-background relative overflow-hidden">
      {/* Título grande e moderno */}
      <AnimatedElement animation="slide-down" className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center mb-12 w-full px-6">
        <AnimatedElement animation="slide-right" delay={200}>
          <div className="w-24 md:w-32 lg:w-40">
            <div className="h-3 md:h-4 lg:h-6 rounded-full bg-[#FF9025] shadow-lg"></div>
          </div>
        </AnimatedElement>
        <AnimatedElement animation="slide-up" delay={300}>
          <h1 className="text-3xl sm:text-5xl md:text-[90px] leading-snug text-white font-bold text-center md:text-left">
            Nossos <br />
            <span className="shimmer-gradient">
              Clientes
            </span>
          </h1>
        </AnimatedElement>
        <AnimatedElement animation="slide-left" delay={400}>
          <div className="w-24 md:w-32 lg:w-40 flex justify-center md:justify-start items-start">
            <img src={clientes} alt="Troféu" className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain drop-shadow-lg" />
          </div>
        </AnimatedElement>
      </AnimatedElement>

      {/* Carrossel */}
      <div className="w-full relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-0">
            {logos.map((item, index) => (
              <CarouselItem key={index} className="pl-0" style={{ flex: '0 0 calc(100% / 7)' }}>
                <div className={`w-full h-32 ${item.bg} flex items-center justify-center p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer`}>
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Setas de navegação */}
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#660042] border-[#FF9025] hover:bg-[#FF9025] hover:text-[#660042] transition-all duration-300">
            <ChevronLeft className="w-6 h-6" />
          </CarouselPrevious>
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#660042] border-[#FF9025] hover:bg-[#FF9025] hover:text-[#660042] transition-all duration-300">
            <ChevronRight className="w-6 h-6" />
          </CarouselNext>
        </Carousel>
      </div>


    </section>
  );
}; 