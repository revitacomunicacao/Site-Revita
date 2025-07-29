import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FaRocket, FaBullhorn, FaPalette, FaGlobe, FaChartLine, FaSearch, FaPenNib, FaMagnet } from "react-icons/fa";
import { AnimatedElement } from "@/components/AnimatedElement";
import backgroundImage from "@/assets/background-nossas-soluções.png";

const services = [
  { 
    name: "Branding Médico", 
    icon: <FaPalette />, 
    desc: "Construção de identidade visual profissional para clínicas médicas, criando confiança e credibilidade junto aos pacientes.",
    features: ["Identidade Visual", "Credibilidade", "Confiança"]
  },
  { 
    name: "Publicidade Médica", 
    icon: <FaBullhorn />, 
    desc: "Campanhas especializadas para o setor médico que conectam sua clínica aos pacientes certos, respeitando regulamentações.",
    features: ["Campanhas Especializadas", "Segmentação", "Compliance"]
  },
  { 
    name: "Redes Sociais", 
    icon: <FaGlobe />, 
    desc: "Gestão estratégica das redes sociais para clínicas, criando engajamento e autoridade médica de forma ética.",
    features: ["Gestão Estratégica", "Autoridade Médica", "Engajamento"]
  },
  { 
    name: "Sites Médicos", 
    icon: <FaRocket />, 
    desc: "Criação de sites profissionais para clínicas médicas, otimizados para conversão e credibilidade no setor.",
    features: ["Sites Profissionais", "Credibilidade", "Conversão"]
  },
  { 
    name: "Tráfego Pago", 
    icon: <FaChartLine />, 
    desc: "Gestão especializada de anúncios para clínicas médicas, focando em pacientes qualificados e ROI mensurável.",
    features: ["Pacientes Qualificados", "ROI Mensurável", "Segmentação"]
  },
  { 
    name: "SEO Médico", 
    icon: <FaSearch />, 
    desc: "Otimização para mecanismos de busca especializada em termos médicos, aumentando a visibilidade da sua clínica.",
    features: ["SEO Médico", "Visibilidade", "Autoridade"]
  },
  { 
    name: "Conteúdo Médico", 
    icon: <FaPenNib />, 
    desc: "Produção de conteúdo educativo e relevante para pacientes, criando autoridade médica e gerando confiança.",
    features: ["Conteúdo Educativo", "Autoridade", "Confiança"]
  },
  { 
    name: "Inbound Médico", 
    icon: <FaMagnet />, 
    desc: "Estratégias de inbound marketing para atrair, converter e fidelizar pacientes através de conteúdo de valor.",
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
              Soluções completas para impulsionar sua clínica médica no universo digital. Estratégia, criatividade e tecnologia para gerar mais pacientes e confiança.
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