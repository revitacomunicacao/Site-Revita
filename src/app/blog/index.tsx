import { PageHeader } from "@/components/Layout/PageHeader";

export default function Blog() {
  return(
    <main>
      <PageHeader 
        title="Blog"
        subtitle="Fique por dentro das últimas tendências em marketing digital para clínicas médicas, dicas de gestão e cases de sucesso."
        breadcrumb={[
          { label: "Blog", href: "/blog" }
        ]}
        highlightWords={["Blog", "tendências", "marketing"]}
      />
      
      {/* Conteúdo da página aqui */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Artigos Recentes
          </h2>
          {/* Adicione aqui a lista de artigos do blog */}
        </div>
      </section>
    </main>
  )
}