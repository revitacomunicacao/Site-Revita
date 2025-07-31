import { AnimatedElement } from "@/components/AnimatedElement"
import { Users, Calendar, Users as Collaborators } from "lucide-react"

export const ConhecaRevita = () => {
  return (
    <section className="py-20 bg-[#1a1a1a] flex justify-center">
      <div className="container mx-auto px-4 w-[1200px]">
        <AnimatedElement animation="slide-up" delay={500}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Textos na esquerda */}
            <div className="space-y-8">
              {/* Título na esquerda */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Conheça a <span className="shimmer-gradient">Revita</span>
                </h2>
              </div>

              <div>
                <p className="text-lg text-white/90 leading-relaxed mb-4">
                  Somos especialistas em marketing para Clínicas Médicas, com abordagem estratégica e resultados comprovados. 
                  A Revita conta com mentoria da Ultralize, com participação direta dos experts Rodrigo Bindes e Gui Cardoso.
                </p>
                <p className="text-base text-white/80 leading-relaxed mb-4">
                  Formada por profissionais com mais de 27 anos de experiência, a Companhia da Mídia é uma agência completa 
                  com expertise em marketing digital e desenvolvimento web, focada em resultados para o crescimento dos clientes.
                </p>
                <p className="text-base text-white/80 leading-relaxed">
                  Nosso objetivo é transformar ações de marketing em prospecção de novos negócios, 
                  desenvolvendo com criatividade e eficiência.
                </p>
              </div>

              {/* Blocos de números */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-[#FF9025]/10 rounded-xl border border-[#FF9025]/20">
                  <div className="flex justify-center mb-3">
                    <Users className="w-8 h-8 text-[#FF9025]" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">500+</div>
                  <div className="text-white/80 text-sm">Clientes</div>
                </div>

                <div className="text-center p-4 bg-[#FF9025]/10 rounded-xl border border-[#FF9025]/20">
                  <div className="flex justify-center mb-3">
                    <Calendar className="w-8 h-8 text-[#FF9025]" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">27</div>
                  <div className="text-white/80 text-sm">Anos</div>
                </div>

                <div className="text-center p-4 bg-[#FF9025]/10 rounded-xl border border-[#FF9025]/20">
                  <div className="flex justify-center mb-3">
                    <Collaborators className="w-8 h-8 text-[#FF9025]" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">25+</div>
                  <div className="text-white/80 text-sm">Colaboradores</div>
                </div>
              </div>
            </div>

            {/* Foto do Rodrigo na direita */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                
                  <img 
                    src="./src/assets/rodrihopedro.png" 
                    alt="Rodrigo Bindes" 
                    className="w-full h-full object-cover"
                  />
                <div className="absolute -bottom-4 -right-4 bg-[#FF9025] text-black px-3 py-1 rounded-full text-xs font-semibold">
                  Rodrigo Nascimento
                </div>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  )
} 