import { Servico } from "./components/Servico"
import foto1 from "@/assets/FeaturesBanner02.png"
import foto2 from "@/assets/FeaturesBanner01.png"
import foto3 from "@/assets/inteligencia-artificial.jpg"
import { PageHeader } from "@/components/Layout/PageHeader"
import { useScrollToAnchor, scrollToAnchor } from "@/hooks/useScrollToAnchor"

export default function Servicos() {
  useScrollToAnchor()

  const handleCategoryClick = (categoryId: string) => {
    console.log("🔄 Tentando navegar para:", categoryId)
    scrollToAnchor(categoryId, 80)
  }

  return (
    <>
      <PageHeader 
        title="Nossas Soluções"
        subtitle="Somos autoridade em marketing para Clínicas Médicas e temos expertise em oferecer soluções completas para aumentar a confiança dos pacientes, gerar mais consultas e posicionar sua clínica como referência no setor."
        breadcrumb={[
          { label: "Nossas Soluções", href: "/servicos" }
        ]}
        highlightWords={["Agência", "Marketing", "Clínicas"]}
      />
      
      <Servico
        title={"Inteligência"}
        title2={"Artificial"}
        description={"Plataforma de atendimento via WhatsApp com inteligência artificial. Eficiência e produtividade para sua equipe."}
        imagem={foto3}
        badge={[
          { name: "Eficiência" },
          { name: "Atendimento" },
          { name: "Agilidade" },
          { name: "Inteligência Artificial" }
        ]}
        index={0}
        id="inteligencia-artificial"
      />
      <Servico
        title={"Branding"}
        title2={""}
        description={"Construção de identidade visual profissional para clínicas médicas, criando confiança e credibilidade junto aos pacientes."}
        imagem={foto1}
        badge={[
          { name: "Identidade Visual" },
          { name: "Credibilidade" },
          { name: "Confiança" }
        ]}
        index={0}
        id="branding"
      />
      <Servico
        title={"Publicidade"}
        title2={""}
        description={"Campanhas especializadas para o setor médico que conectam sua clínica aos pacientes certos, respeitando regulamentações."}
        imagem={foto2}
        badge={[
          { name: "Campanhas Especializadas" },
          { name: "Segmentação" },
          { name: "Compliance" }
        ]}
        index={0}
        id="publicidade"
      />
      <Servico
        title={"Redes"}
        title2={"Sociais"}
        description={"Gestão estratégica das redes sociais para clínicas, criando engajamento e autoridade médica de forma ética."}
        imagem={foto1}
        badge={[
          { name: "Gestão Estratégica" },
          { name: "Autoridade" },
          { name: "Engajamento" }
        ]}
        index={0}
        id="redes-sociais"
      />
      <Servico
        title={"Sites"}
        title2={""}
        description={"Criação de sites profissionais para clínicas médicas, otimizados para conversão e credibilidade no setor."}
        imagem={foto2}
        badge={[
          { name: "Sites Profissionais" },
          { name: "Credibilidade" },
          { name: "Conversão" }
        ]}
        index={0}
        id="sites"
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
        title2={""}
        description={"Otimização para mecanismos de busca especializada em termos médicos, aumentando a visibilidade da sua clínica."}
        imagem={foto2}
        badge={[
          { name: "SEO" },
          { name: "Visibilidade" },
          { name: "Autoridade" }
        ]}
        index={0}
        id="seo"
      />
      <Servico
        title={"Conteúdo"}
        title2={"e Inbound"}
        description={"Estratégias de inbound marketing para atrair, converter e fidelizar pacientes através de conteúdo de valor."}
        imagem={foto2}
        badge={[
          { name: "Atração" },
          { name: "Conversão" },
          { name: "Fidelização" }
        ]}
        index={0}
        id="conteudo-inbound"
      />
    </>
  )
}