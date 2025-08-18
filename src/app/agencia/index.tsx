import { PageHeader } from "@/components/Layout/PageHeader";
import { Apresentacao } from "./components/Apresentacao";
import { ConhecaRevita } from "./components/ConhecaRevita";
import { NossaHistoria } from "./components/NossaHistoria";
import { MissaoVisaoValores } from "./components/MissaoVisaoValores";
import { GaleriaAgencia } from "./components/GaleriaAgencia";

export default function Agencia() {
  return(
    <main>
      <PageHeader 
        title="A Agência"
        subtitle="Somos autoridade em marketing digital para Clínicas Médicas e temos expertise em oferecer soluções completas para aumentar a confiança dos pacientes, gerar mais consultas e posicionar sua clínica como referência no setor."
        breadcrumb={[
          { label: "A Agência", href: "/agencia" }
        ]}
        highlightWords={["Agência", "Marketing", "Clínicas"]}
      />

      <ConhecaRevita />
      <NossaHistoria />
      <MissaoVisaoValores />
      <GaleriaAgencia />
    </main>
  )
}