import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { useBlog } from "../hooks/useBlog"
import { MdArrowOutward } from "react-icons/md";
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MdCategory, MdArticle, MdTrendingUp, MdBusiness, MdAnalytics } from "react-icons/md"

export const ListBlog = () => {
  const { data: blog, loading, error } = useBlog()
  console.log(blog)

  // Função para selecionar ícone baseado na categoria
  const getCategoryIcon = (categoryName: string) => {
    const name = categoryName.toLowerCase()
    if (name.includes('marketing') || name.includes('publicidade') || name.includes('análise')) return <MdAnalytics />
    if (name.includes('negócio') || name.includes('business')) return <MdBusiness />
    if (name.includes('tendência') || name.includes('trending')) return <MdTrendingUp />
    if (name.includes('artigo') || name.includes('blog')) return <MdArticle />
    return <MdCategory />
  }

  return (
    <section>
      {/* seção de filtro de categorias */}
      <div className="bg-secondary h-50 flex justify-center items-center gap-5">
        <div className="w-[1200px] flex-row justify-center items-center">
          <div>
            <span className="text-3xl font-bold">
              Encontrar <br /> por <br /> categoria
            </span>
          </div>

        </div>
      </div>

      {/* carrossel dos ultimos blogs */}
      <div className="flex justify-center">

        <div className="w-[1200px] justify-center items-center my-10">
          <h1 className="text-3xl font-bold my-10">Confira nossos últimos lançamentos </h1>
          <Carousel
            opts={{
              align: "start",
              dragFree: true
            }}
          >
            <CarouselContent>
              {blog.map(({ id, title, featureImage, summary, author, categories }) => (
                <CarouselItem key={id} className="basis-1/3">
                  <div className="rounded-2xl border-1 border-[#171823] bg-[#171823] relative group">
                    {/* Badge de categoria sobreposto */}
                    <div className="absolute top-4 left-4 z-10">
                      <Badge 
                        className="bg-[#171328] text-secondary border-secondary/20 hover:bg-[#171328]/90 px-3 py-1.5 text-xs font-medium flex items-center gap-2"
                      >
                        {getCategoryIcon(Array.isArray(categories) && categories.length > 0 ? categories[0].name : 'Sem categoria')}
                        {Array.isArray(categories) && categories.length > 0 ? categories[0].name : 'Sem categoria'}
                      </Badge>
                    </div>

                    <img src={featureImage} alt={title} className="rounded-t-2xl" />
                    <div className="px-8 my-4 flex flex-col gap-4">
                      
                      <div className="min-h-20 flex items-center">
                        <h2 className="font-bold">{title}</h2>

                      </div>
                      <p className="text-[#7a7a7a] text-[12px]">{summary.slice(0, 120) + "..."}</p>
                      <Button className="bg-secondary hover:bg-primary hover:text-white flex justify-between items-center rounded-full px-6 py-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-0 text-gray-800 font-semibold cursor-pointer">
                        <span className="flex items-center gap-2">
                          Continuar lendo
                          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                        </span>
                        <div className="w-8 h-8 rounded-full bg-gray-800 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                          <MdArrowOutward className="text-white text-lg" />
                        </div>
                      </Button>
                    </div>
                  </div>
                </CarouselItem>

              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
