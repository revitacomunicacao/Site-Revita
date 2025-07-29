import { AnimatedElement } from "@/components/AnimatedElement"
import { TrendingUp, Users, Award, Zap } from "lucide-react"

export const NossaHistoria = () => {
  const timelineData = [
    {
      year: "1997",
      title: "Fundação",
      description: "Nascimento da Companhia da Mídia com foco em publicidade tradicional",
      icon: TrendingUp,
      color: "from-blue-500 to-purple-600"
    },
    {
      year: "2005",
      title: "Expansão Digital",
      description: "Entrada no mundo digital com desenvolvimento de sites e marketing online",
      icon: Zap,
      color: "from-purple-500 to-pink-600"
    },
    {
      year: "2015",
      title: "Especialização",
      description: "Foco em marketing para Clínicas Médicas e setor da saúde",
      icon: Users,
      color: "from-pink-500 to-red-600"
    },
    {
      year: "2020",
      title: "Parceria Ultralize",
      description: "Aliança estratégica com Rodrigo Bindes e Gui Cardoso",
      icon: Award,
      color: "from-red-500 to-orange-600"
    },
    {
      year: "2024",
      title: "Revita Comunicação",
      description: "Nova identidade focada em transformação digital para clínicas",
      icon: TrendingUp,
      color: "from-orange-500 to-yellow-600"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
      <div className="container mx-auto px-4">
        <AnimatedElement animation="slide-up" delay={300}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contando a nossa <span className="text-black">história</span>
            </h2>
            <p className="text-xl text-black/80 max-w-3xl mx-auto">
              Uma jornada de mais de 27 anos transformando o marketing digital e criando resultados extraordinários
            </p>
          </div>
        </AnimatedElement>

        <AnimatedElement animation="slide-up" delay={500}>
          <div className="relative">
            {/* Linha horizontal */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-black to-black/50 transform -translate-y-1/2 z-0" />
            
            {/* Timeline items */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {timelineData.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div key={index} className="relative">
                    {/* Conector vertical */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-black to-transparent transform -translate-x-1/2" />
                    
                    {/* Card */}
                    <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105">
                      {/* Ícone */}
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 mx-auto`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Ano */}
                      <div className="text-2xl font-bold text-black text-center mb-2">
                        {item.year}
                      </div>
                      
                      {/* Título */}
                      <h3 className="text-lg font-semibold text-black text-center mb-3">
                        {item.title}
                      </h3>
                      
                      {/* Descrição */}
                      <p className="text-black/80 text-sm text-center leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  )
} 