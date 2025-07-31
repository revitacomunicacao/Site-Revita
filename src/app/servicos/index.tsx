import { Servico } from "./components/Servico"
import foto1 from "@/assets/FeaturesBanner02.png"
import foto2 from "@/assets/FeaturesBanner01.png"
import { PageHeader } from "@/components/Layout/PageHeader"
import { useScrollToAnchor } from "@/hooks/useScrollToAnchor"

export default function Servicos() {
  useScrollToAnchor()

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
      <Servico
        title={"Branding"}
        title2={"Médico"}
        description={"Construção de identidade visual profissional para clínicas médicas, criando confiança e credibilidade junto aos pacientes."}
        imagem={foto1}
        badge={[
          { name: "Identidade Visual" },
          { name: "Credibilidade" },
          { name: "Confiança" }
        ]}
        index={0}
        id="branding-medico"
      />
      <Servico
        title={"Publicidade"}
        title2={"Médica"}
        description={"Campanhas especializadas para o setor médico que conectam sua clínica aos pacientes certos, respeitando regulamentações."}
        imagem={foto2}
        badge={[
          { name: "Campanhas Especializadas" },
          { name: "Segmentação" },
          { name: "Compliance" }
        ]}
        index={0}
        id="publicidade-medica"
      />
      <Servico
        title={"Redes"}
        title2={"Sociais"}
        description={"Gestão estratégica das redes sociais para clínicas, criando engajamento e autoridade médica de forma ética."}
        imagem={foto1}
        badge={[
          { name: "Gestão Estratégica" },
          { name: "Autoridade Médica" },
          { name: "Engajamento" }
        ]}
        index={0}
        id="redes-sociais"
      />
      <Servico
        title={"Sites"}
        title2={"Médicos"}
        description={"Criação de sites profissionais para clínicas médicas, otimizados para conversão e credibilidade no setor."}
        imagem={foto2}
        badge={[
          { name: "Sites Profissionais" },
          { name: "Credibilidade" },
          { name: "Conversão" }
        ]}
        index={0}
        id="sites-medicos"
      />
      <Servico
        title={"Tráfego"}
        title2={"Pago"}
        description={"Gestão especializada de anúncios para clínicas médicas, focando em pacientes qualificados e ROI mensurável."}
        imagem={foto1}
        badge={[
          { name: "Pacientes Qualificados" },
          { name: "ROI Mensurável" },
          { name: "Segmentação" }
        ]}
        index={0}
        id="trafego-pago"
      />
      <Servico
        title={"SEO"}
        title2={"Médico"}
        description={"Otimização para mecanismos de busca especializada em termos médicos, aumentando a visibilidade da sua clínica."}
        imagem={foto2}
        badge={[
          { name: "SEO Médico" },
          { name: "Visibilidade" },
          { name: "Autoridade" }
        ]}
        index={0}
        id="seo-medico"
      />
      <Servico
        title={"Conteúdo"}
        title2={"Médico"}
        description={"Produção de conteúdo educativo e relevante para pacientes, criando autoridade médica e gerando confiança."}
        imagem={foto1}
        badge={[
          { name: "Conteúdo Educativo" },
          { name: "Autoridade" },
          { name: "Confiança" }
        ]}
        index={0}
        id="conteudo-medico"
      />
      <Servico
        title={"Inbound"}
        title2={"Médico"}
        description={"Estratégias de inbound marketing para atrair, converter e fidelizar pacientes através de conteúdo de valor."}
        imagem={foto2}
        badge={[
          { name: "Atração" },
          { name: "Conversão" },
          { name: "Fidelização" }
        ]}
        index={0}
        id="inbound-medico"
      />
    </>
  )
}