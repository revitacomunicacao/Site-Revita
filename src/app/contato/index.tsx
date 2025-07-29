import { PageHeader } from "@/components/Layout/PageHeader";

export default function Contato() {
  return(
    <main>
      <PageHeader 
        title="Entre em Contato"
        subtitle="Estamos prontos para transformar sua clínica médica. Entre em contato conosco e descubra como podemos ajudar você a alcançar seus objetivos."
        breadcrumb={[
          { label: "Contato", href: "/contato" }
        ]}
        highlightWords={["Contato", "transformar", "clínica"]}
      />
      
      {/* Conteúdo da página aqui */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Fale Conosco
          </h2>
          {/* Adicione aqui o formulário de contato */}
        </div>
      </section>
    </main>
  )
}