import { AnimatedElement } from "@/components/AnimatedElement"
import { Target, Eye, Heart } from "lucide-react"

export const MissaoVisaoValores = () => {
  const valores = [
    "Comprometimento",
    "Credibilidade", 
    "Ética",
    "Proatividade",
    "Respeito",
    "Responsabilidade",
    "Seriedade"
  ]

  return (
    <section className="py-24 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <AnimatedElement animation="slide-up" delay={300}>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Nossa <span className="shimmer-gradient">Identidade</span>
            </h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Os pilares que guiam nossa atuação e definem quem somos
            </p>
          </div>
        </AnimatedElement>

        <AnimatedElement animation="slide-up" delay={500}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Missão */}
            <AnimatedElement animation="scale-in" delay={700}>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/20 h-[500px] flex flex-col justify-between">
                <div className="relative z-10 text-center">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#FF9025] to-[#FF6B35] rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <Target className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">MISSÃO</h3>
                  <p className="text-white/90 leading-relaxed text-lg">
                    Conectar empresas e pessoas com os seus desejos, desenvolvendo soluções de marketing, 
                    publicidade e propaganda aliadas à tecnologia para gerar resultados e oportunidades de negócios.
                  </p>
                </div>
              </div>
            </AnimatedElement>

            {/* Visão */}
            <AnimatedElement animation="scale-in" delay={900}>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/20 h-[500px] flex flex-col justify-between">
                <div className="relative z-10 text-center">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#FF6B35] to-[#FF4D4D] rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <Eye className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">VISÃO</h3>
                  <p className="text-white/90 leading-relaxed text-lg">
                    Ser uma agência de referência em marketing, publicidade e propaganda para criação e 
                    desenvolvimento de soluções para marcas, empresas e negócios.
                  </p>
                </div>
              </div>
            </AnimatedElement>

            {/* Valores */}
            <AnimatedElement animation="scale-in" delay={1100}>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/20 h-[500px] flex flex-col justify-between">
                <div className="relative z-10 text-center">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#FF4D4D] to-[#E63946] rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <Heart className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">VALORES</h3>
                  <ul className="text-white/90 text-lg leading-relaxed space-y-2">
                    {valores.map((valor, index) => (
                      <li key={index} className="text-center">
                        {valor}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </AnimatedElement>
      </div>
    </section>
  )
} 