import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FaRocket, FaBullhorn, FaPalette, FaGlobe, FaChartLine, FaSearch, FaPenNib, FaMagnet } from "react-icons/fa";
import { AnimatedElement } from "@/components/AnimatedElement";

const services = [
  { 
    name: "Inteligência Artificial", 
    icon: <FaPenNib />, 
    desc: "Plataforma de atendimento via WhatsApp com inteligência artificial. Eficiência e produtividade para sua equipe.",
    features: ["Eficiência", "Atendimento", "Agilidade", "Inteligência Artificial"]
  },
  { 
    name: "Branding", 
    icon: <FaPalette />, 
    desc: "Construção de identidade visual profissional para clínicas médicas, criando confiança e credibilidade junto aos pacientes.",
    features: ["Identidade Visual", "Credibilidade", "Confiança"]
  },
  { 
    name: "Publicidade", 
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
    name: "Sites", 
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
    name: "SEO", 
    icon: <FaSearch />, 
    desc: "Otimização para mecanismos de busca especializada em termos médicos, aumentando a visibilidade da sua clínica.",
    features: ["SEO Médico", "Visibilidade", "Autoridade"]
  },

  { 
    name: "Conteúdo e Inbound", 
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
        {/* Background com gradiente elegante */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0008] via-[#2d0018] to-[#660042]"></div>
        
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF9025]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF9025]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#FF9025]/20 to-transparent rounded-full blur-2xl"></div>
        
        {/* Grid de pontos decorativos */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-2 h-2 bg-[#FF9025] rounded-full"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-[#FF9025] rounded-full"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-[#FF9025] rounded-full"></div>
          <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-[#FF9025] rounded-full"></div>
          <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-[#FF9025] rounded-full"></div>
        </div>

        {/* Título e descrição centralizados */}
        <AnimatedElement animation="slide-down" className="w-full max-w-4xl flex flex-col items-center gap-4 px-6 relative mb-16 z-20">
          <AnimatedElement animation="slide-up" delay={200}>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight text-center">
              Nossos{" "}
              <span className="shimmer-gradient">
                Serviços
              </span>
            </h2>
          </AnimatedElement>
          <AnimatedElement animation="slide-up" delay={300}>
            <Separator className="bg-gradient-to-r from-[#FF9025] to-[#fff] opacity-60 h-1 w-24 rounded-full" />
          </AnimatedElement>
          <AnimatedElement animation="slide-up" delay={400}>
            <p className="text-white/90 text-lg max-w-2xl text-center leading-relaxed">
              Soluções completas para impulsionar sua Clínica Médica no universo digital. Estratégia, criatividade e tecnologia para gerar mais pacientes e confiança.
            </p>
          </AnimatedElement>
        </AnimatedElement>

        {/* Grid dos serviços 4x2 */}
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 relative z-20">
          {services.map((service, idx) => (
            <AnimatedElement key={service.name} animation="scale-in" delay={500 + (idx * 100)}>
              <Card className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 hover:border-[#FF9025]/60 shadow-xl hover:shadow-[#FF9025]/20 transition-all duration-500 rounded-2xl p-0 overflow-hidden cursor-pointer sm:h-[420px] relative">
                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF9025]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="flex flex-col gap-4 py-8 px-6 items-start h-full justify-between relative z-10">
                  <div className="space-y-4">
                    <div className="relative">
                      <span className="text-4xl md:text-5xl text-[#FF9025] group-hover:text-white transition-all duration-500 drop-shadow-lg group-hover:scale-110 transform">
                        {service.icon}
                      </span>
                      {/* Efeito de brilho no ícone */}
                      <div className="absolute inset-0 bg-[#FF9025] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-[#FF9025] transition-colors duration-500 mt-4">
                        {service.name}
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.features.map((feature, index) => (
                      <span 
                        key={index}
                        className="inline-block px-3 py-1 bg-[#FF9025]/20 text-[#FF9025] text-xs font-medium rounded-full border border-[#FF9025]/30 group-hover:bg-[#FF9025]/40 group-hover:border-[#FF9025]/60 group-hover:text-white transition-all duration-300 hover:scale-105 transform"
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