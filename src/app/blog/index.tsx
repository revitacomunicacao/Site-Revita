import { PageHeader } from "@/components/Layout/PageHeader";
import { ListBlog } from "./components/ListBlog";

export default function Blog() {
  return(
    <main>
      <PageHeader 
        title=" Blog"
        subtitle="Fique por dentro das últimas tendências em marketing digital para clínicas médicas, dicas de gestão e cases de sucesso."
        breadcrumb={[
          { label: "Blog", href: "/blog" }
        ]}
      />
      
      <ListBlog />

    </main>
  )
}