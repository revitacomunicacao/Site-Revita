import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FaRocket, FaBullhorn, FaPalette, FaGlobe, FaChartLine, FaSearch, FaPenNib, FaMagnet } from "react-icons/fa";
import { AnimatedElement } from "@/components/AnimatedElement";
import backgroundImage from "@/assets/background-nossas-soluções.png";

const services = [
  { 
    name: "Branding", 
    icon: <FaPalette />, 
    desc: "Construção e gestão de marcas memoráveis com identidade visual única, posicionamento estratégico e experiência completa do cliente.",
    features: ["Identidade Visual", "Posicionamento", "Experiência do Cliente"]
  },
  { 
    name: "Publicidade", 
    icon: <FaBullhorn />, 
    desc: "Campanhas criativas e estratégicas que conectam sua marca ao público certo, maximizando ROI e gerando conversões reais.",
    features: ["Campanhas Criativas", "Segmentação", "ROI Otimizado"]
  },
  { 
    name: "Mídias sociais", 
    icon: <FaGlobe />, 
    desc: "Gestão completa e performance nas redes sociais com estratégias personalizadas para cada plataforma e engajamento real.",
    features: ["Gestão Completa", "Estratégias Personalizadas", "Engajamento Real"]
  },
  { 
    name: "Sites", 
    icon: <FaRocket />, 
    desc: "Criação de sites modernos, responsivos e otimizados para conversão, com foco em experiência do usuário e performance.",
    features: ["Sites Modernos", "Responsivos", "Otimizados para Conversão"]
  },
  { 
    name: "Tráfego pago", 
    icon: <FaChartLine />, 
    desc: "Gestão especializada de anúncios para resultados mensuráveis, com otimização contínua e estratégias de remarketing.",
    features: ["Gestão Especializada", "Resultados Mensuráveis", "Remarketing"]
  },
  { 
    name: "SEO", 
    icon: <FaSearch />, 
    desc: "Otimização completa para mecanismos de busca com estratégias técnicas e de conteúdo para aumentar visibilidade orgânica.",
    features: ["SEO Técnico", "SEO de Conteúdo", "Visibilidade Orgânica"]
  },
  { 
    name: "Conteúdo", 
    icon: <FaPenNib />, 
    desc: "Produção de conteúdo relevante, estratégico e otimizado para SEO, criando autoridade e gerando leads qualificados.",
    features: ["Conteúdo Relevante", "Otimizado para SEO", "Geração de Leads"]
  },
  { 
    name: "Inbound Mkt", 
    icon: <FaMagnet />, 
    desc: "Estratégias completas de inbound marketing para atrair, converter e fidelizar clientes através de conteúdo de valor.",
    features: ["Atração", "Conversão", "Fidelização"]
  },
];

export const Servicos = () => {
  return (
    <>
    <div className="flex flex-row">
      <div className="w-full h-[10px] bg-secondary"></div>
    </div>
      <section className="w-full py-24 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background com gradiente e imagem */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#660042] via-[#2d0018] to-[#0a0008]"></div>
        <div 
          className="absolute bottom-0 left-0 right-0 h-1/2 bg-cover bg-center bg-no-repeat opacity-50"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        {/* Overlay adicional para melhorar contraste */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#660042]/60 via-[#660042]/10 to-transparent"></div>
        {/* Título e descrição centralizados */}
        <AnimatedElement animation="slide-down" className="w-full max-w-4xl flex flex-col items-center gap-4 px-6 relative mb-12 z-20">
          <AnimatedElement animation="slide-up" delay={200}>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight text-center">
              Nossos{" "}
              <span className="shimmer-gradient">
                Serviços
              </span>
            </h2>
          </AnimatedElement>
          <AnimatedElement animation="slide-up" delay={300}>
            <Separator className="bg-gradient-to-r from-[#FF9025] to-[#fff] opacity-40 h-1 w-24 rounded-full" />
          </AnimatedElement>
          <AnimatedElement animation="slide-up" delay={400}>
            <p className="text-white/90 text-lg max-w-2xl text-center">
              Soluções completas para impulsionar sua marca no universo digital. Estratégia, criatividade e tecnologia para resultados reais.
            </p>
          </AnimatedElement>
        </AnimatedElement>
        {/* Grid dos serviços 4x2 */}
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 relative z-20">
          {services.map((service, idx) => (
            <AnimatedElement key={service.name} animation="scale-in" delay={500 + (idx * 100)}>
                <Card className="group bg-primary border border-white/20 hover:border-[#FF9025] shadow-xl hover:shadow-orange-900/30 transition-all duration-300 rounded-2xl p-0 overflow-hidden cursor-pointer h-[400px]">
                   <CardContent className="flex flex-col gap-4 py-8 px-6 items-start h-full justify-between">
                    <div className="space-y-4">
                      <span className="text-4xl md:text-5xl text-[#FF9025] group-hover:text-white transition-colors duration-300 drop-shadow-lg">
                        {service.icon}
                      </span>
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-[#FF9025] transition-colors duration-300 mt-4">
                          {service.name}
                        </h3>
                        <p className="text-white/90 text-sm leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {service.features.map((feature, index) => (
                        <span 
                          key={index}
                          className="inline-block px-3 py-1 bg-[#FF9025]/20 text-[#FF9025] text-xs font-medium rounded-full border border-[#FF9025]/30 group-hover:bg-[#FF9025]/30 group-hover:border-[#FF9025]/50 transition-all duration-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </CardContent>
               </Card>
            </AnimatedElement>
          ))}
        </div>
      </section>
    <div className="flex flex-row">
      <div className="w-full h-[10px] bg-secondary"></div>
    </div>
    </>
  );
};