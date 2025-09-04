import { AnimatedElement } from "@/components/AnimatedElement"
import { Camera, Users, Coffee, Monitor } from "lucide-react"

export const GaleriaAgencia = () => {
  // Array de fotos simuladas (você pode substituir pelos caminhos reais das fotos)
  const fotos = [
    {
      id: 1,
      src: "#", // Placeholder - substitua pela imagem real quando disponível
      alt: "Equipe em reunião"
    },
    {
      id: 2,
      src: "#", // Placeholder - substitua pela imagem real quando disponível
      alt: "Desenvolvimento de projetos"
    },
    {
      id: 3,
      src: "#", // Placeholder - substitua pela imagem real quando disponível
      alt: "Momento de descontração"
    },
    {
      id: 4,
      src: "#", // Placeholder - substitua pela imagem real quando disponível
      alt: "Trabalho em equipe"
    },
    {
      id: 5,
      src: "#", // Placeholder - substitua pela imagem real quando disponível
      alt: "Apresentação de projetos"
    },
    {
      id: 6,
      src: "#", // Placeholder - substitua pela imagem real quando disponível
      alt: "Momento de café"
    }
  ]

  return (
    <section className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <AnimatedElement animation="slide-up" delay={300}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nossa <span className="shimmer-gradient">Galeria</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Conheça o ambiente onde a magia acontece. Nossa equipe em ação, 
              criando soluções extraordinárias para nossos clientes.
            </p>
            
            {/* Estatísticas da equipe */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FF9025] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">25+</div>
                <div className="text-white/80 text-sm">Profissionais</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FF9025] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-white/80 text-sm">Projetos</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FF9025] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Coffee className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">∞</div>
                <div className="text-white/80 text-sm">Cafés</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FF9025] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-white/80 text-sm">Dedicação</div>
              </div>
            </div>
          </div>
        </AnimatedElement>

        <AnimatedElement animation="slide-up" delay={500}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fotos.map((foto, index) => (
              <div key={foto.id} className="overflow-hidden rounded-xl bg-[#1a1a1a] border border-[#FF9025]/20">
                {/* Placeholder para a foto */}
                <div className="aspect-[4/3] bg-[#FF9025]/10 flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="w-12 h-12 text-[#FF9025] mx-auto mb-2" />
                    <p className="text-white/60 text-sm">Foto {foto.id}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedElement>

        <AnimatedElement animation="slide-up" delay={700}>
          <div className="text-center mt-12">
            <a href="https://api.whatsapp.com/send/?phone=5534996374463&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="mt-6 bg-[#FF9025] text-black font-semibold px-8 py-3 rounded-full hover:bg-[#FF9025]/90 transition-all duration-300 cursor-pointer inline-block">
              Agendar atendimento
            </a>
          </div>
        </AnimatedElement>
      </div>
    </section>
  )
} 