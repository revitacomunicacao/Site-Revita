import { AnimatedElement } from "@/components/AnimatedElement"

export const Apresentacao = () => {
  return (
    <section>
      <AnimatedElement animation="slide-up" delay={300}>
        <div className="flex justify-center">
          <div className="h-80 flex w-200 items-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[50px] leading-tight sm:leading-snug text-white font-bold text-center">
              Uma agência de <span className="shimmer-gradient">Transformação</span> digital para <span className="shimmer-gradient">Clínicas Médicas</span>
            </h1>
          </div>
        </div>
      </AnimatedElement>
      <AnimatedElement animation="slide-up" delay={500}>
        <div className="flex justify-center">
          <div className="flex w-200 h-30">
            <p className="text-md text-center text-white/80 leading-relaxed">
              Somos autoridade em{" "}
              <span className="text-[#FF9025] font-semibold">marketing para Clínicas Médicas</span> e temos{" "}
              <span className="text-[#FF9025] font-semibold">expertise</span> em oferecer{" "}
              <span className="text-[#FF9025] font-semibold">soluções completas</span> para
              aumentar a confiança dos pacientes, gerar mais consultas e posicionar sua clínica como referência no setor.
            </p>
          </div>
        </div>
      </AnimatedElement>
    </section>
  )
}