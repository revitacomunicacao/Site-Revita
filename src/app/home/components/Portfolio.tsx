import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Trofeu from "@/assets/trofeu.svg";
import { AnimatedElement } from "@/components/AnimatedElement";

import colorado1 from "@/assets/portfolioHome/colorado1.png"
import colorado2 from "@/assets/portfolioHome/colorado2.png"
import colorado3 from "@/assets/portfolioHome/colorado3.png"

import dicasa1 from "@/assets/portfolioHome/dicasa1.png"
import dicasa2 from "@/assets/portfolioHome/dicasa2.png"
import dicasa3 from "@/assets/portfolioHome/dicasa3.png"

import cxx1 from "@/assets/portfolioHome/cxx01.png"
import cxx2 from "@/assets/portfolioHome/cxx02.png"
import cxx3 from "@/assets/portfolioHome/cxx03.png"

const portfolioData = [
  {
    name: "Choperia Colorado",
    site: "https://choperiacolorado.com.br/",
    bg: colorado1,
    desc: "Choperia Colorado: Há 17 anos em Uberaba, a Choperia Colorado é referência em chopp gelado, gastronomia variada e música ao vivo, reunindo tradição, qualidade e momentos inesquecíveis.",
    tags: ["REBRANDING", "DESIGN", "TRÁFEGO PAGO", "CARDÁPIO", "ESTRATÉGIAS MARKETING", "DESENVOLVIVENTO WEB"],
  },
  {
    name: "Choperia Colorado",
    site: "https://choperiacolorado.com.br/",
    bg: colorado2,
    desc: "Choperia Colorado: Há 17 anos em Uberaba, a Choperia Colorado é referência em chopp gelado, gastronomia variada e música ao vivo, reunindo tradição, qualidade e momentos inesquecíveis.",
    tags: ["REBRANDING", "DESIGN", "TRÁFEGO PAGO", "CARDÁPIO", "ESTRATÉGIAS MARKETING", "DESENVOLVIVENTO WEB"],
  },
  {
    name: "Choperia Colorado",
    site: "https://choperiacolorado.com.br/",
    bg: colorado3,
    desc: "Choperia Colorado: Há 17 anos em Uberaba, a Choperia Colorado é referência em chopp gelado, gastronomia variada e música ao vivo, reunindo tradição, qualidade e momentos inesquecíveis.",
    tags: ["REBRANDING", "DESIGN", "TRÁFEGO PAGO", "CARDÁPIO", "ESTRATÉGIAS MARKETING", "DESENVOLVIVENTO WEB"],
  },





  {
    name: "Dicasa & Campo",
    site: "https://dicasaecampo.com.br/",
    bg: dicasa1,
    desc: "Di Casa & Campo: A Di Casa & Campo é especialista em soluções para casa, campo e lazer, com amplo mix de ferramentas, jardinagem, elétricos e hidráulicos, sempre com atendimento próximo e confiável.",
    tags: ["DESIGN", "TRÁGEFO PAGO", "DESENVOLVIVENTO WEB", "ESTRATÉGIAS MARKETING"],
  },
  {
    name: "Dicasa & Campo",
    site: "https://dicasaecampo.com.br/",
    bg: dicasa2,
    desc: "Di Casa & Campo: A Di Casa & Campo é especialista em soluções para casa, campo e lazer, com amplo mix de ferramentas, jardinagem, elétricos e hidráulicos, sempre com atendimento próximo e confiável.",
    tags: ["DESIGN", "TRÁGEFO PAGO", "DESENVOLVIVENTO WEB", "ESTRATÉGIAS MARKETING"],
  },
  {
    name: "Dicasa & Campo",
    site: "https://dicasaecampo.com.br/",
    bg: dicasa3,
    desc: "Di Casa & Campo: A Di Casa & Campo é especialista em soluções para casa, campo e lazer, com amplo mix de ferramentas, jardinagem, elétricos e hidráulicos, sempre com atendimento próximo e confiável.",
    tags: ["DESIGN", "TRÁGEFO PAGO", "DESENVOLVIVENTO WEB", "ESTRATÉGIAS MARKETING"],
  },



  {
    name: "Rede Caxuxa Triangulo",
    site: "https://redecaxuxatriangulo.com.br/",
    bg: cxx1,
    desc: "Rede Caxuxa Triângulo: A Rede Caxuxa Triângulo é sinônimo de confiança no segmento automotivo, oferecendo postos de combustíveis, conveniência e serviços de qualidade em toda a região.",
    tags: ["DESIGN", "TRÁGEFO PAGO", "DESENVOLVIVENTO WEB", "ESTRATÉGIAS MARKETING"],
  },
  {
    name: "Rede Caxuxa Triangulo",
    site: "https://redecaxuxatriangulo.com.br/",
    bg: cxx2,
    desc: "Rede Caxuxa Triângulo: A Rede Caxuxa Triângulo é sinônimo de confiança no segmento automotivo, oferecendo postos de combustíveis, conveniência e serviços de qualidade em toda a região.",
    tags: ["DESIGN", "TRÁGEFO PAGO", "DESENVOLVIVENTO WEB", "ESTRATÉGIAS MARKETING"],
  },
  {
    name: "Rede Caxuxa Triangulo",
    site: "https://redecaxuxatriangulo.com.br/",
    bg: cxx3,
    desc: "Rede Caxuxa Triângulo: A Rede Caxuxa Triângulo é sinônimo de confiança no segmento automotivo, oferecendo postos de combustíveis, conveniência e serviços de qualidade em toda a região.",
    tags: ["DESIGN", "TRÁGEFO PAGO", "DESENVOLVIVENTO WEB", "ESTRATÉGIAS MARKETING"],
  },
]

export const Portfolio = () => {
  return (
    <section className="w-full pt-14 bg-background flex flex-col items-center justify-center">
      {/* Título grande e moderno */}
      <AnimatedElement animation="slide-down" className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center mb-12 w-full px-6">
        <AnimatedElement animation="slide-right" delay={200}>
          <div className="w-24 md:w-32 lg:w-40">
            <div className="h-3 md:h-4 lg:h-6 rounded-full bg-[#FF9025] shadow-lg"></div>
          </div>
        </AnimatedElement>
        <AnimatedElement animation="slide-up" delay={300}>
          <h1 className="text-3xl sm:text-5xl md:text-[90px] text-white font-bold text-center md:text-left">
            Cases de <br />
            <span className="shimmer-gradient">
              Sucesso
            </span>
          </h1>
        </AnimatedElement>
        <AnimatedElement animation="slide-left" delay={400}>
          <div className="w-24 md:w-32 lg:w-40 flex justify-center md:justify-start items-start">
            <img src={Trofeu} alt="Troféu" className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain drop-shadow-lg" />
          </div>
        </AnimatedElement>
      </AnimatedElement>

      {/* Grid colado de portfólio */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {portfolioData.map((item, idx) => (
          <AnimatedElement key={idx} animation="scale-in" delay={500 + (idx * 100)}>
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative group w-full cursor-pointer select-none overflow-hidden">
                  {/* Imagem de fundo preenchendo todo o bloco */}
                  <img
                    src={item.bg}
                    alt={item.name}
                    draggable={false}
                  />
                  {/* Overlay escuro */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-300 z-10" />
                  {/* Botão flutuante no hover */}
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute bottom-5 right-5 z-30 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 shadow-lg bg-[#FF9025] text-[#660042] hover:bg-white hover:text-[#FF9025]"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </Button>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-lg bg-[#181828] border-[#FF9025] text-white rounded-2xl shadow-2xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3 text-2xl">
                    {item.name}
                  </DialogTitle>
                  <DialogDescription className="text-white/80 mt-2">
                    {item.desc}
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map((tag, i) => (
                    <Badge key={i} className="bg-[#FF9025] text-[#660042] px-3 py-1 rounded-full text-xs font-semibold">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <a
                    href={item.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#FF9025] hover:underline font-semibold text-base"
                  >
                    Visitar site
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </DialogContent>
            </Dialog>
          </AnimatedElement>
        ))}
      </div>
    </section>
  );
};