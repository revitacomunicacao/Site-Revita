import { PageHeader } from "@/components/Layout/PageHeader"
import { PortfolioGrid } from "./components/PortfolioGrid"

export default function Portfolio() {
  return (
    <>
      <PageHeader 
        title="Nossos Serviços"
        subtitle="Somos autoridade em marketing para Clínicas Médicas e temos expertise em oferecer soluções completas para aumentar a confiança dos pacientes, gerar mais consultas e posicionar sua clínica como referência no setor."
        breadcrumb={[
          { label: "Nossos Serviços", href: "/servicos" }
        ]}
        highlightWords={["Agência", "Marketing", "Clínicas"]}
      />
      <PortfolioGrid />
    </>
)
}