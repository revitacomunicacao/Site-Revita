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
    <section className="w-full bg-background relative overflow-hidden sm:py-12">
      {/* Título grande e moderno */}
      <AnimatedElement animation="slide-down" className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-12 justify-center items-center mb-8 sm:mb-12 w-full px-4 sm:px-6">
        <AnimatedElement animation="slide-right" delay={200}>
          <div className="w-16 sm:w-24 md:w-32 lg:w-40">
            <div className="h-2 sm:h-3 md:h-4 lg:h-6 rounded-full bg-[#FF9025] shadow-lg"></div>
          </div>
        </AnimatedElement>
        <AnimatedElement animation="slide-up" delay={300}>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[90px] leading-tight sm:leading-snug text-white font-bold text-center md:text-left">
            Nossos
            <br />
            <span className="shimmer-gradient">
              Clientes
            </span>
          </h1>
        </AnimatedElement>
        <AnimatedElement animation="slide-left" delay={400}>
          <div className="w-16 sm:w-24 md:w-32 lg:w-40 flex justify-center md:justify-start items-start">
            <img src={clientes} alt="Troféu" className="w-12 h-12 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain drop-shadow-lg" />
          </div>
        </AnimatedElement>
      </AnimatedElement>

      {/* Carrossel */}
      <div className="w-full relative px-4 sm:px-6">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {logos.map((item, index) => (
              <CarouselItem key={index} className="pl-2 sm:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/7">
                <div className={`w-full h-20 sm:h-24 md:h-32 ${item.bg} flex items-center justify-center p-3 sm:p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer rounded-lg`}>
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
          <CarouselPrevious className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#660042] border-[#FF9025] hover:bg-[#FF9025] hover:text-[#660042] transition-all duration-300">
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </CarouselPrevious>
          <CarouselNext className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#660042] border-[#FF9025] hover:bg-[#FF9025] hover:text-[#660042] transition-all duration-300">
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
}; 