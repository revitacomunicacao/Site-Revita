import { PageHeader } from "@/components/Layout/PageHeader";

export default function Portfolio() {
  return(
    <main>
      <PageHeader 
        title="Nosso Portfolio"
        subtitle="Conheça alguns dos nossos projetos de sucesso e cases que transformaram clínicas médicas em referências no mercado."
        breadcrumb={[
          { label: "Portfolio", href: "/portfolio" }
        ]}
        highlightWords={["Portfolio", "projetos", "sucesso"]}
      />
      
      {/* Conteúdo da página aqui */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Projetos em Destaque
          </h2>
          {/* Adicione aqui o conteúdo do portfolio */}
        </div>
      </section>
    </main>
  )
}