import { AnimatedElement } from "@/components/AnimatedElement"
import { TrendingUp, Users, Award, Zap, Star } from "lucide-react"

export const NossaHistoria = () => {
  const timelineData = [
    {
      year: "1997",
      title: "Fundação",
      description: "Nascimento da Companhia da Mídia com foco em publicidade tradicional",
      icon: TrendingUp,
      color: "from-[#FF9025] to-[#FF6B35]"
    },
    {
      year: "2005",
      title: "Expansão Digital",
      description: "Entrada no mundo digital com desenvolvimento de sites e marketing online",
      icon: Zap,
      color: "from-[#FF6B35] to-[#FF4D4D]"
    },
    {
      year: "2015",
      title: "Especialização",
      description: "Foco em marketing para Clínicas Médicas e setor da saúde",
      icon: Users,
      color: "from-[#FF4D4D] to-[#E63946]"
    },
    {
      year: "2020",
      title: "Parceria Ultralize",
      description: "Aliança estratégica com Rodrigo Bindes e Gui Cardoso",
      icon: Award,
      color: "from-[#E63946] to-[#D62828]"
    },
    {
      year: "2024",
      title: "Revita Comunicação",
      description: "Nova identidade focada em transformação digital para clínicas",
      icon: Star,
      color: "from-[#D62828] to-[#660042]"
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden">
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

      <div className="container mx-auto px-4 relative z-20">
        <AnimatedElement animation="slide-up" delay={300}>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contando a nossa <span className="shimmer-gradient">história</span>
            </h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Uma jornada de mais de 27 anos transformando o marketing digital e criando resultados extraordinários
            </p>
          </div>
        </AnimatedElement>

        <AnimatedElement animation="slide-up" delay={500}>
          <div className="relative">
            {/* Timeline items */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {timelineData.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <AnimatedElement key={index} animation="scale-in" delay={700 + (index * 200)}>
                    <div className="relative">
                      {/* Card principal */}
                      <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/20 h-[340px] flex flex-col justify-between">
                        <div className="relative z-10">
                          {/* Ícone */}
                          <div className="relative mb-6">
                            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mx-auto shadow-lg`}>
                              <IconComponent className="w-10 h-10 text-white" />
                            </div>
                          </div>
                          
                          {/* Ano com destaque */}
                          <div className="text-3xl font-bold text-[#FF9025] text-center mb-3">
                            {item.year}
                          </div>
                          
                          {/* Título */}
                          <h3 className="text-xl font-semibold text-white text-center mb-4">
                            {item.title}
                          </h3>
                          
                          {/* Descrição */}
                          <p className="text-white/80 text-sm text-center leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </AnimatedElement>
                )
              })}
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  )
} 