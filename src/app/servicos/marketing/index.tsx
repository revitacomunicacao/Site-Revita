import { PageHeader } from "@/components/Layout/PageHeader";

export default function Marketing() {
  return(
    <main>
      <PageHeader 
        title="Marketing Digital"
        subtitle="Estratégias personalizadas de marketing digital para posicionar sua clínica médica como referência no mercado e atrair mais pacientes."
        breadcrumb={[
          { label: "Serviços", href: "/servicos" },
          { label: "Marketing Digital", href: "/servicos/marketing" }
        ]}
        highlightWords={["Marketing", "Digital", "clínica"]}
      />
      
      {/* Conteúdo da página aqui */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Nossas Soluções em Marketing
          </h2>
          {/* Adicione aqui o conteúdo do serviço */}
        </div>
      </section>
    </main>
  )
}