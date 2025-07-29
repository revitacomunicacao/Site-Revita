import { FaLocationArrow, FaStar, FaUsers, FaChartLine, FaAward } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedElement } from "@/components/AnimatedElement";

export const Institutional = () => {
  const stats = [
    {
      icon: FaUsers,
      number: "50+",
      label: "Clínicas Atendidas"
    },
    {
      icon: FaChartLine,
      number: "200%",
      label: "Aumento Médio de Consultas"
    },
    {
      icon: FaAward,
      number: "5+",
      label: "Anos de Experiência"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#660042] via-[#2d002b] to-[#0e0e0e] relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#FF9025] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#FF9025] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#FF9025] rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna da esquerda - Conteúdo */}
          <AnimatedElement animation="slide-left" className="space-y-8">
            <div className="space-y-4">
              <AnimatedElement animation="slide-down" delay={200}>
                <span className="inline-block px-4 py-2 bg-[#FF9025]/20 text-[#FF9025] text-sm font-semibold rounded-full border border-[#FF9025]/30">
                  Especialistas em Clínicas
                </span>
              </AnimatedElement>
              <AnimatedElement animation="slide-up" delay={300}>
                <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Marketing Digital{" "}
                  <span className="shimmer-gradient">
                    Especializado
                  </span>{" "}
                  para Clínicas
                </h2>
              </AnimatedElement>
            </div>

            <AnimatedElement animation="slide-up" delay={400}>
              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-[#FF9025]" />
                  ))}
                </div>
                <div className="flex-1 h-[2px] bg-gradient-to-r from-[#FF9025] to-transparent rounded-full"></div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slide-up" delay={500}>
              <p className="text-xl text-white/80 leading-relaxed">
                Somos autoridade em{" "}
                <span className="text-[#FF9025] font-semibold">marketing para Clínicas Médicas</span> e temos{" "}
                <span className="text-[#FF9025] font-semibold">expertise</span> em oferecer{" "}
                <span className="text-[#FF9025] font-semibold">soluções completas</span> para
                aumentar a confiança dos pacientes, gerar mais consultas e posicionar sua clínica como referência no setor.
              </p>
            </AnimatedElement>

            <AnimatedElement animation="scale-in" delay={600}>
              <button className="group px-8 py-4 bg-[#FF9025] text-[#660042] font-bold text-lg rounded-full hover:bg-white hover:text-[#FF9025] transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Fale Conosco
                <FaLocationArrow size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </AnimatedElement>
          </AnimatedElement>

          {/* Coluna da direita - Estatísticas */}
          <AnimatedElement animation="slide-right" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <AnimatedElement key={index} animation="scale-in" delay={200 + (index * 100)}>
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-[#FF9025]/20 rounded-full flex items-center justify-center group-hover:bg-[#FF9025]/30 transition-colors duration-300">
                          <stat.icon className="text-[#FF9025] text-2xl" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                      <div className="text-white/70 text-sm font-medium">{stat.label}</div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              ))}
            </div>

            {/* Cards de diferenciais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <AnimatedElement animation="slide-up" delay={600}>
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 h-40">
                  <CardContent className="p-4">
                    <h4 className="text-[#FF9025] font-semibold mb-2">Estratégia para Clínicas</h4>
                    <p className="text-white/70 text-sm">Cada projeto é desenvolvido especificamente para o setor médico</p>
                  </CardContent>
                </Card>
              </AnimatedElement>
              <AnimatedElement animation="slide-up" delay={700}>
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 h-40">
                  <CardContent className="p-4">
                    <h4 className="text-[#FF9025] font-semibold mb-2">Mais Consultas</h4>
                    <p className="text-white/70 text-sm">Metodologia testada que garante aumento real de pacientes</p>
                  </CardContent>
                </Card>
              </AnimatedElement>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};
