import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import portfolioImg from "@/assets/portfolio.png";
import logoColorado from "@/assets/logoColorado.png";
import Trofeu from "@/assets/trofeu.svg";
import { AnimatedElement } from "@/components/AnimatedElement";

const portfolioData = Array.from({ length: 6 }).map(() => ({
  name: "Clínica CardioVida",
  site: "https://clinicacardiovida.com.br/",
  logo: logoColorado,
  bg: portfolioImg,
  desc: "Clínica especializada em cardiologia que se tornou referência na região. Desenvolvemos estratégias digitais completas para aumentar a confiança dos pacientes e gerar mais consultas.",
  tags: ["Site Médico", "SEO Médico", "Branding", "Redes Sociais", "Tráfego Pago"],
}));

export const Portfolio = () => {
  return (
    <section className="w-full py-24 bg-background flex flex-col items-center justify-center">
      {/* Título grande e moderno */}
      <AnimatedElement animation="slide-down" className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center mb-12 w-full px-6">
        <AnimatedElement animation="slide-right" delay={200}>
          <div className="w-24 md:w-32 lg:w-40">
            <div className="h-3 md:h-4 lg:h-6 rounded-full bg-[#FF9025] shadow-lg"></div>
          </div>
        </AnimatedElement>
        <AnimatedElement animation="slide-up" delay={300}>
          <h1 className="text-3xl sm:text-5xl md:text-[90px] leading-snug text-white font-bold text-center md:text-left">
            Casos de <br />
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
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
        {portfolioData.map((item, idx) => (
          <AnimatedElement key={idx} animation="scale-in" delay={500 + (idx * 100)}>
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative group aspect-square w-full cursor-pointer select-none overflow-hidden">
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
          </AnimatedElement>
        ))}
      </div>
    </section>
  );
};