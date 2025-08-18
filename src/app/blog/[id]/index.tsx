import { useParams } from "react-router-dom"
import { useBlogId } from "../hooks/useBlog"
import { PageHeader } from "@/components/Layout/PageHeader"
import { Badge } from "@/components/ui/badge"
import { MdCategory, MdArticle, MdTrendingUp, MdBusiness, MdAnalytics, MdPerson, MdAccessTime, MdCalendarToday } from "react-icons/md"
import { useEffect } from "react"
import { Skeleton } from "@/components/ui/skeleton"

// Componente Skeleton para a página interna
const BlogPostSkeleton = () => (
  <div className="flex flex-col justify-center items-center mb-12 md:mb-20">
    {/* Skeleton da imagem principal */}
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[560px] overflow-hidden">
      <Skeleton className="w-full h-full rounded-none" />
    </div>

    {/* Skeleton do card branco sobreposto */}
    <div className="w-full max-w-[1200px] mx-4 md:mx-6 mt-[-80px] md:mt-[-120px] lg:mt-[-150px] bg-white rounded-2xl md:rounded-[32px] p-6 md:p-8 lg:p-10 shadow-xl">
      {/* Skeleton do título */}
      <Skeleton className="h-8 sm:h-10 md:h-12 w-full sm:w-3/4 mb-4 md:mb-6" />
      
      {/* Skeleton da linha divisória */}
      <Skeleton className="h-[1px] w-full my-6 md:my-8 lg:my-10" />
      
      {/* Skeleton dos metadados */}
      <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mb-6 md:mb-8">
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <Skeleton className="h-4 w-12 sm:w-16" />
          <Skeleton className="h-4 w-20 sm:w-32" />
          <Skeleton className="h-4 w-16 sm:w-24" />
        </div>
        <Skeleton className="h-4 w-24 sm:w-28 mx-auto sm:mx-0" />
      </div>
      
      {/* Skeleton do conteúdo */}
      <div className="space-y-3 md:space-y-4">
        <Skeleton className="h-3 md:h-4 w-full" />
        <Skeleton className="h-3 md:h-4 w-5/6" />
        <Skeleton className="h-3 md:h-4 w-4/5" />
        <Skeleton className="h-3 md:h-4 w-full" />
        <Skeleton className="h-3 md:h-4 w-3/4" />
        <Skeleton className="h-3 md:h-4 w-5/6" />
        <Skeleton className="h-3 md:h-4 w-4/5" />
        <Skeleton className="h-3 md:h-4 w-full" />
        <Skeleton className="h-3 md:h-4 w-2/3" />
        <Skeleton className="h-3 md:h-4 w-5/6" />
        <Skeleton className="h-3 md:h-4 w-3/4" />
        <Skeleton className="h-3 md:h-4 w-full" />
        <Skeleton className="h-3 md:h-4 w-4/5" />
        <Skeleton className="h-3 md:h-4 w-3/4" />
        <Skeleton className="h-3 md:h-4 w-5/6" />
      </div>
    </div>
  </div>
)

export default function BlogDetails() {
  const { id } = useParams()
  const { data: blog, loading, error } = useBlogId(id || "")

  // Logs para debug
  useEffect(() => {
    console.log("BlogDetails - ID:", id)
    console.log("BlogDetails - Data:", blog)
    console.log("BlogDetails - Loading:", loading)
    console.log("BlogDetails - Error:", error)
    console.log("BlogDetails - Hook result:", { data: blog, loading, error })
    
    // Teste direto da API
    if (id) {
      fetch(`https://companhiadamidia.com.br/desenvolvimento/revita/admin/wp-json/headless/v1/blog/${id}`)
        .then(response => response.json())
        .then(data => console.log("Teste direto da API:", data))
        .catch(err => console.error("Erro no teste direto:", err))
    }
  }, [id, blog, loading, error])

  // Função para selecionar ícone baseado na categoria
  const getCategoryIcon = (categoryName: string) => {
    const name = categoryName.toLowerCase()
    if (name.includes('marketing') || name.includes('publicidade') || name.includes('análise')) return <MdAnalytics />
    if (name.includes('negócio') || name.includes('business')) return <MdBusiness />
    if (name.includes('tendência') || name.includes('trending')) return <MdTrendingUp />
    if (name.includes('artigo') || name.includes('blog')) return <MdArticle />
    return <MdCategory />
  }

  // Função para formatar a data
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    } catch (error) {
      console.error("Erro ao formatar data:", error)
      return dateString
    }
  }

  if (loading) {
    return <BlogPostSkeleton />
  }

  if (error) {
    console.error("Erro detalhado:", error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-2">Erro ao carregar post</h1>
          <p className="text-gray-600 mb-4">Não foi possível carregar o conteúdo solicitado.</p>
          <p className="text-sm text-gray-500">ID: {id}</p>
          <p className="text-sm text-gray-500">Erro: {error.message}</p>
          <p className="text-sm text-gray-500">URL: https://companhiadamidia.com.br/desenvolvimento/revita/admin/wp-json/headless/v1/blog/{id}</p>
          <a 
            href="/blog" 
            className="inline-block mt-4 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Voltar para o Blog
          </a>
        </div>
      </div>
    )
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-2">Post não encontrado</h1>
          <p className="text-gray-600 mb-4">O post solicitado não foi encontrado.</p>
          <p className="text-sm text-gray-500">ID: {id}</p>
          <a 
            href="/blog" 
            className="inline-block mt-4 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Voltar para o Blog
          </a>
        </div>
      </div>
    )
  }

  return (
    <main>
      <div className="flex flex-col justify-center items-center mb-12 md:mb-20">
        {/* Imagem principal grande */}
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[560px] overflow-hidden">
          <img
            src={blog.featureImage}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card branco sobreposto */}
        <div className="w-full max-w-[1200px] mx-4 md:mx-6 mt-[-80px] md:mt-[-120px] lg:mt-[-420px] bg-white rounded-2xl md:rounded-[32px] p-6 md:p-8 lg:p-10 shadow-xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">{blog.title}</h1>
          
          {/* Linha divisória amarela */}
          <div className="h-[1px] bg-[#f4b414] w-full my-6 md:my-8 lg:my-10" />
          
          {/* Metadados do post */}
          {/* <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mb-6 md:mb-8 text-sm text-gray-600">
            <span className="text-gray-700 text-center sm:text-left">
              Por: <strong className="text-gray-900">{blog.author}</strong> | {formatDate(blog.postingDate)}
            </span>
            <span className="text-gray-700 font-medium text-center sm:text-right">{blog.readingTime} min de leitura</span>
          </div> */}
          
          {/* Conteúdo do post */}
          <div className="prose prose-sm md:prose-lg max-w-none text-gray-800 leading-relaxed prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-a:text-[#f4b414] prose-a:no-underline hover:prose-a:underline" dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </div>
    </main>
  )
}
