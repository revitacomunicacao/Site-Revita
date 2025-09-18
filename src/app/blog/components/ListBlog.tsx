import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useBlog, useCategories } from "../hooks/useBlog"
import { MdArrowOutward } from "react-icons/md";
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MdCategory, MdArticle, MdTrendingUp, MdBusiness, MdAnalytics } from "react-icons/md"
import { useState, useMemo, useEffect } from "react"
import { Skeleton } from "@/components/ui/skeleton"

// Componente Skeleton para a listagem do blog
const BlogListSkeleton = () => (
  <section>
    {/* Skeleton da seção de categorias */}
    <div className="bg-secondary py-8 md:py-16 flex justify-center items-center">
      <div className="w-full max-w-[1200px] px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Skeleton do título */}
          <div className="space-y-2">
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-8 w-28" />
          </div>

          {/* Skeleton do carrossel de categorias */}
          <div className="relative px-4 md:px-12 flex-1">
            <div className="flex gap-4 overflow-hidden">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="flex flex-col items-center gap-2 md:gap-3 p-3 md:p-4 min-w-[80px] md:min-w-[100px]">
                  <Skeleton className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full" />
                  <Skeleton className="h-3 w-16 md:w-20" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Skeleton do carrossel de posts */}
    <div className="flex justify-center">
      <div className="w-full max-w-[1200px] px-4 md:px-6 my-8 md:my-10">
        {/* Skeleton do cabeçalho */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 mb-8 md:mb-10">
          <Skeleton className="h-8 md:h-10 w-64 md:w-80" />
          <Skeleton className="h-10 w-32" />
        </div>

        {/* Skeleton dos posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="rounded-2xl border border-gray-200 bg-white p-4">
              {/* Skeleton da imagem */}
              <Skeleton className="w-full h-48 md:h-56 rounded-t-2xl mb-4" />
              
              {/* Skeleton do badge de categoria */}
              <div className="mb-4">
                <Skeleton className="h-6 w-20 rounded-full" />
              </div>
              
              {/* Skeleton do título */}
              <div className="mb-3">
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </div>
              
              {/* Skeleton do resumo */}
              <div className="mb-4 space-y-2">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-5/6" />
                <Skeleton className="h-3 w-4/5" />
              </div>
              
              {/* Skeleton do botão */}
              <Skeleton className="h-12 w-full rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export const ListBlog = () => {
  const { data: blog = [], loading, error } = useBlog()
  const { data: categories = [], loading: categoriesLoading } = useCategories()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [isCarouselHovered, setIsCarouselHovered] = useState(false)
  const [isCategoriesCarouselHovered, setIsCategoriesCarouselHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Filtrar blogs por categoria selecionada
  const filteredBlogs = useMemo(() => {
    if (!blog || blog.length === 0) return []
    if (!selectedCategory) return blog
    return blog.filter(post =>
      post.categories && post.categories.some(cat => cat.name === selectedCategory)
    )
  }, [blog, selectedCategory])

  // Função para selecionar ícone baseado na categoria
  const getCategoryIcon = (categoryName: string) => {
    const name = categoryName.toLowerCase()
    if (name.includes('marketing') || name.includes('publicidade') || name.includes('análise')) return <MdAnalytics />
    if (name.includes('negócio') || name.includes('business')) return <MdBusiness />
    if (name.includes('tendência') || name.includes('trending')) return <MdTrendingUp />
    if (name.includes('artigo') || name.includes('blog')) return <MdArticle />
    return <MdCategory />
  }

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(selectedCategory === categoryName ? null : categoryName)
  }

  // Animação de entrada
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  // Mostrar skeleton enquanto carrega
  if (loading || categoriesLoading) {
    return <BlogListSkeleton />
  }

  // Mostrar erro se houver
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-2">Erro ao carregar blog</h1>
          <p className="text-gray-600 mb-4">Não foi possível carregar o conteúdo do blog.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    )
  }

  return (
    <section>
      {/* seção de filtro de categorias */}
      <div className={`bg-secondary py-8 md:py-16 flex justify-center items-center transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="w-full max-w-[1200px] px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <span className={`text-2xl md:text-3xl font-bold text-center lg:text-left transition-all duration-700 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              Encontrar <br /> por <br /> categoria
            </span>

            {/* Carrossel de categorias */}
            <div className={`relative px-4 md:px-12 flex-1 transition-all duration-700 ease-out delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <Carousel
                opts={{
                  align: "start",
                  dragFree: true,
                  containScroll: "trimSnaps"
                }}
                className="w-full"
                onMouseEnter={() => setIsCategoriesCarouselHovered(true)}
                onMouseLeave={() => setIsCategoriesCarouselHovered(false)}
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {categories.length > 0 ? categories.map((category) => (
                    <CarouselItem key={category.id} className="pl-2 md:pl-4 basis-auto">
                      <div
                        onClick={() => handleCategoryClick(category.name)}
                        className={`cursor-pointer transition-all duration-300 transform hover:scale-105 group ${
                          selectedCategory === category.name ? 'scale-110' : ''
                        }`}
                      >
                        <div className="flex flex-col items-center gap-2 md:gap-3 p-3 md:p-4 rounded-xl hover:bg-white/10 transition-all duration-300 min-w-[80px] md:min-w-[100px]">
                          <div className="relative">
                            <img
                              src={category.featureImage}
                              alt={category.name}
                              className={`object-cover rounded-full border-2 transition-all duration-300 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 ${
                                selectedCategory === category.name
                                  ? 'border-primary/60 shadow-lg shadow-primary/20'
                                  : 'border-white/20 group-hover:border-white/40'
                              }`}
                            />
                            {selectedCategory === category.name && (
                              <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full flex items-center justify-center shadow-lg">
                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                              </div>
                            )}
                          </div>
                          <p className={`font-medium text-xs md:text-sm text-center max-w-[70px] md:max-w-[80px] leading-tight transition-colors duration-300 ${
                            selectedCategory === category.name ? 'text-gray-800' : 'text-white'
                          }`}>
                            {category.name}
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  )) : (
                    <div className="text-center text-white/70 py-8">
                      Carregando categorias...
                    </div>
                  )}
                </CarouselContent>

                {/* Setas de navegação para categorias - visíveis apenas no hover */}
                {categories.length > 4 && (
                  <>
                    <CarouselPrevious className={`absolute -left-1 md:-left-2 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30 w-6 h-6 md:w-8 md:h-8 transition-all duration-300 ${
                      isCategoriesCarouselHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
                    }`} style={{ display: isCategoriesCarouselHovered ? 'flex' : 'none' }} />
                    <CarouselNext className={`absolute -right-1 md:-right-2 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30 w-6 h-6 md:w-8 md:h-8 transition-all duration-300 ${
                      isCategoriesCarouselHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
                    }`} style={{ display: isCategoriesCarouselHovered ? 'flex' : 'none' }} />
                  </>
                )}
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* carrossel dos ultimos blogs */}
      <div className={`flex justify-center transition-all duration-1000 ease-out delay-600 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="w-full max-w-[1200px] px-4 md:px-6 my-8 md:my-10">
          <div className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 mb-8 md:mb-10 transition-all duration-700 ease-out delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h1 className="text-2xl md:text-3xl font-bold">
              {selectedCategory ? `Posts de ${selectedCategory}` : 'Confira nossos últimos lançamentos'}
            </h1>
            {selectedCategory && (
              <Button
                variant="outline"
                onClick={() => setSelectedCategory(null)}
                className="text-sm w-full md:w-auto"
              >
                Limpar filtro
              </Button>
            )}
          </div>

          <div className={`transition-all duration-700 ease-out delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Carousel
              opts={{
                align: "start",
                dragFree: true
              }}
              className="relative"
              onMouseEnter={() => setIsCarouselHovered(true)}
              onMouseLeave={() => setIsCarouselHovered(false)}
            >
              <CarouselContent>
                {filteredBlogs.length > 0 ? filteredBlogs.map(({ id, title, featureImage, summary, author, categories }) => (
                  <CarouselItem key={id} className="basis-full sm:basis-1/2 lg:basis-1/3">
                    <div className="rounded-2xl border-1 border-[#171823] bg-[#171823] relative group">
                      {/* Badge de categoria sobreposto */}
                      <div className="absolute top-3 md:top-4 left-3 md:left-4 z-10">
                        <Badge
                          className="bg-[#171328] text-secondary border-secondary/20 hover:bg-[#171328]/90 px-2 md:px-3 py-1 md:py-1.5 text-xs font-medium flex items-center gap-1 md:gap-2"
                        >
                          {getCategoryIcon(Array.isArray(categories) && categories.length > 0 ? categories[0].name : 'Sem categoria')}
                          <span className="hidden sm:inline">{Array.isArray(categories) && categories.length > 0 ? categories[0].name : 'Sem categoria'}</span>
                        </Badge>
                      </div>

                      <img src={featureImage} alt={title} className="rounded-t-2xl w-full h-48 md:h-56 object-cover" />
                      <div className="px-4 md:px-8 my-4 flex flex-col gap-3 md:gap-4">
                        <div className="min-h-16 md:min-h-20 flex items-center">
                          <h2 className="font-bold text-sm md:text-base line-clamp-2">{title}</h2>
                        </div>
                        <p className="text-[#7a7a7a] text-[10px] md:text-[12px] line-clamp-3">{summary.slice(0, 120) + "..."}</p>
                        <a href={`/blog/${id}`}>
                          <Button className="bg-secondary hover:bg-primary hover:text-white flex justify-between items-center rounded-full px-4 md:px-6 py-4 md:py-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-0 text-gray-800 font-semibold cursor-pointer w-full text-xs md:text-sm">
                            <span className="flex items-center gap-2">
                              Continuar lendo
                              <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-white rounded-full animate-pulse"></div>
                            </span>
                            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-800 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                              <MdArrowOutward className="text-white text-sm md:text-lg" />
                            </div>
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CarouselItem>
                )) : (
                  <div className="col-span-full text-center text-gray-500 py-20">
                    {selectedCategory ? `Nenhum post encontrado para a categoria "${selectedCategory}"` : 'Carregando posts...'}
                  </div>
                )}
              </CarouselContent>

              {/* Setas de navegação - visíveis apenas no hover */}
              <CarouselPrevious className={`absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 border-gray-300 w-8 h-8 md:w-10 md:h-10 transition-all duration-300 ${
                isCarouselHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
              }`} style={{ display: isCarouselHovered ? 'flex' : 'none' }} />
              <CarouselNext className={`absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 border-gray-300 w-8 h-8 md:w-10 md:h-10 transition-all duration-300 ${
                isCarouselHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
              }`} style={{ display: isCarouselHovered ? 'flex' : 'none' }} />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}
