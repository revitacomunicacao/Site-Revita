import { PageHeader } from "@/components/Layout/PageHeader";

export default function SEO() {
  return(
    <main>
      <PageHeader 
        title="SEO para Clínicas Médicas"
        subtitle="Otimize sua presença digital e apareça na primeira página do Google. Nossas estratégias de SEO são específicas para clínicas médicas e garantem mais visibilidade e pacientes."
        breadcrumb={[
          { label: "Serviços", href: "/servicos" },
          { label: "SEO", href: "/servicos/seo" }
        ]}
        highlightWords={["SEO", "Clínicas", "Google", "pacientes"]}
      />
      
      {/* Conteúdo da página aqui */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Por que SEO para Clínicas?
          </h2>
          {/* Adicione aqui o conteúdo do serviço */}
        </div>
      </section>
    </main>
  )
} 