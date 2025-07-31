import React from "react"
import { Badge } from "@/components/ui/badge"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"

interface props {
  title:string,
  title2:string
  description:string,
  imagem:string
  badge:{
    name:string
  }[]
  index: number // Adicionando índice para controlar z-index
  id?: string // ID para navegação por âncora
}

export const Servico:React.FC<props> = ({ title, title2, description, imagem, badge, index, id }) =>  {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '0px'
  });

  // Hook para detectar quando o próximo bloco está chegando
  const { elementRef: exitRef, isIntersecting: isExitIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-20% 0px 0px 0px' // Detecta quando o próximo bloco está chegando
  });

  // Verifica se é o último bloco (index 7)
  const isLastBlock = index === 7;

  return (
    <>
      {/* Elemento invisível para detectar saída - apenas se não for o último bloco */}
      {!isLastBlock && (
        <div ref={exitRef as React.Ref<HTMLDivElement>} className="absolute top-0 left-0 w-full h-1" style={{ zIndex: 100 - index + 1 }} />
      )}
      
      <section 
        ref={elementRef}
        id={id} // ID para navegação por âncora
        className={`bg-[#1a1a1a] min-h-screen w-full flex items-center justify-center ${
          isLastBlock ? '' : 'sticky top-0'
        }`}
        style={{ zIndex: isLastBlock ? 1 : 100 - index }} // Z-index menor para o último bloco
      >
        <div className="flex flex-col lg:flex-row w-full h-screen">
          {/* Lado esquerdo - Conteúdo */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-4 sm:px-6 md:px-8 py-8 lg:py-0">
            {/* Título com animação de entrada e saída */}
            <div className={`transition-all duration-1500 ease-out items-center ${
              isIntersecting && (!isExitIntersecting || isLastBlock) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-100px]'
            }`}>
              <h2 className="text-3xl pt-8 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight">
                {title} {" "} 
                <span className="shimmer-gradient">{title2}</span>
              </h2>
            </div>
            
            {/* Descrição com animação de entrada e saída */}
            <div className={`transition-all duration-1200 ease-out delay-300 ${
              isIntersecting && (!isExitIntersecting || isLastBlock) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 mb-6 sm:mb-8 max-w-lg lg:max-w-none">
                {description}
              </p>
            </div>
            
            {/* Badges com animação sequencial de entrada e saída */}
            <div className={`transition-all duration-1000 ease-out delay-500 ${
              isIntersecting && (!isExitIntersecting || isLastBlock) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                {badge.map((b, idx) => (
                  <div 
                    key={idx} 
                    className={`transition-all duration-700 ease-out ${
                      isIntersecting && (!isExitIntersecting || isLastBlock) ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${600 + idx * 150}ms` }}
                  >
                    <Badge className="bg-secondary text-[#1a1a1a] hover:bg-amber-400 transition-colors duration-300 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2">
                      {b.name}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Lado direito - Imagem */}
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full overflow-hidden">
            <img 
              src={imagem} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  )
}