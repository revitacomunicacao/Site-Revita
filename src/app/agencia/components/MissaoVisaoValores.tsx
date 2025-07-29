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
    <section className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <AnimatedElement animation="slide-up" delay={300}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nossa <span className="text-[#FF9025]">Identidade</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Os pilares que guiam nossa atuação e definem quem somos
            </p>
          </div>
        </AnimatedElement>

        <AnimatedElement animation="slide-up" delay={500}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Missão */}
            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-[#FF9025]/20 hover:border-[#FF9025]/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#FF9025] rounded-full flex items-center justify-center mr-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">MISSÃO</h3>
              </div>
              <p className="text-white/90 leading-relaxed text-lg">
                Conectar empresas e pessoas com os seus desejos, desenvolvendo soluções de marketing, 
                publicidade e propaganda aliadas à tecnologia para gerar resultados e oportunidades de negócios.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-[#FF9025]/20 hover:border-[#FF9025]/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#FF9025] rounded-full flex items-center justify-center mr-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">VISÃO</h3>
              </div>
              <p className="text-white/90 leading-relaxed text-lg">
                Ser uma agência de referência em marketing, publicidade e propaganda para criação e 
                desenvolvimento de soluções para marcas, empresas e negócios.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-[#FF9025]/20 hover:border-[#FF9025]/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#FF9025] rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">VALORES</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {valores.map((valor, index) => (
                  <div key={index} className="bg-[#FF9025]/10 rounded-lg px-3 py-2 text-center">
                    <span className="text-white font-medium text-sm">{valor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  )
} 