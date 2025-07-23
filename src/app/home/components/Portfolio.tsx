import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import portfolioImg from "@/assets/portfolio.png";
import logoColorado from "@/assets/logoColorado.png";
import Trofeu from "@/assets/trofeu.svg";

const portfolioData = Array.from({ length: 10 }).map(() => ({
  name: "Choperia Colorado",
  site: "https://choperiacolorado.com.br/",
  logo: logoColorado,
  bg: portfolioImg,
  desc: "A Choperia Colorado é referência em qualidade e tradição, oferecendo experiências únicas para seus clientes. Desenvolvemos soluções digitais completas para potencializar sua presença online.",
  tags: ["Site", "Conteúdo", "SEO", "Branding", "Mídias sociais"],
}));

export const Portfolio = () => {
  return (
    <section className="w-full py-24 bg-background flex flex-col items-center justify-center">
      {/* Título grande e moderno */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-10 justify-center items-center mb-12 w-full">
        <div className="w-1/4 md:w-[20%]">
          <div className="h-2 md:h-[8px] rounded-full bg-[#FF9025]"></div>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-[90px] leading-snug text-white font-bold text-center md:text-left">
          Nosso <br />
          <span className="text-[#FF9025]">Portfólio</span>
        </h1>
        <div className="w-1/4 md:w-[18%] flex justify-center md:justify-start items-start">
          <img src={Trofeu} alt="Troféu" className="w-16 h-16 md:w-28 md:h-28 object-contain" />
        </div>
      </div>
      {/* Grid colado de portfólio */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0">
        {portfolioData.map((item, idx) => (
          <Dialog key={idx}>
            <DialogTrigger asChild>
              <div
                className="relative group aspect-square w-full cursor-pointer select-none overflow-hidden"
              >
                {/* Imagem de fundo preenchendo todo o bloco */}
                <img
                  src={item.bg}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover object-center"
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
                  <img src={item.logo} alt={item.name} className="h-10 w-10 object-contain rounded-lg bg-white p-1" />
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
        ))}
      </div>
    </section>
  );
};