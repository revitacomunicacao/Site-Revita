import React, { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ProjectDrawer } from "./ProjectDrawer"
import { portfolioData } from "../data/portfolioData"
import type { IPortfolios } from "../types/IPortfolios"
import { 
  Palette, 
  Instagram, 
  Globe, 
  TrendingUp, 
  Video,
  Eye,
  Loader2
} from "lucide-react"
import getPortfolio from "../services/getPortfolio"

const categoryConfig = {
  branding: {
    title: "Branding",
    icon: Palette,
    color: "from-purple-600 to-pink-600",
    description: "Identidade visual e marca"
  },
  "redes-sociais": {
    title: "Redes Sociais",
    icon: Instagram,
    color: "from-blue-600 to-cyan-600",
    description: "Gestão de redes sociais"
  },
  sites: {
    title: "Sites",
    icon: Globe,
    color: "from-green-600 to-emerald-600",
    description: "Desenvolvimento web"
  },
  "trafego-pago": {
    title: "Tráfego Pago",
    icon: TrendingUp,
    color: "from-orange-600 to-red-600",
    description: "Campanhas publicitárias"
  },
  videos: {
    title: "Vídeos",
    icon: Video,
    color: "from-indigo-600 to-purple-600",
    description: "Produção de vídeos"
  }
}

export const PortfolioGrid: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<IPortfolios | null>(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [apiData, setApiData] = useState<IPortfolios[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Carregar dados da API
  useEffect(() => {
    const loadPortfolioData = async () => {
      try {
        setLoading(true)
        const data = await getPortfolio()
        setApiData(data)
        setError(null)
      } catch (err) {
        console.error("Erro ao carregar dados da API:", err)
        setError("Erro ao carregar dados do portfolio")
        // Em caso de erro, usar dados mock
        setApiData([])
      } finally {
        setLoading(false)
      }
    }

    loadPortfolioData()
  }, [])

  const handleProjectClick = (project: IPortfolios) => {
    setSelectedProject(project)
    setIsDrawerOpen(true)
  }

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false)
    setSelectedProject(null)
  }

  // Função para organizar dados da API por categoria
  const organizeDataByCategory = (data: IPortfolios[]) => {
    const organized: Record<string, IPortfolios[]> = {
      branding: [],
      "redes-sociais": [],
      sites: [],
      "trafego-pago": [],
      videos: []
    }

    data.forEach(project => {
      // Determinar categoria baseada nas categorias do projeto
      const category = project.categories[0]?.toLowerCase() || "sites"
      
      if (category.includes("branding")) {
        organized.branding.push(project)
      } else if (category.includes("redes") || category.includes("social")) {
        organized["redes-sociais"].push(project)
      } else if (category.includes("site") || category.includes("web")) {
        organized.sites.push(project)
      } else if (category.includes("tráfego") || category.includes("pago") || category.includes("ads")) {
        organized["trafego-pago"].push(project)
      } else if (category.includes("vídeo") || category.includes("video")) {
        organized.videos.push(project)
      } else {
        // Default para sites se não encontrar categoria específica
        organized.sites.push(project)
      }
    })

    return organized
  }

  // Usar dados da API se disponível, senão usar dados mock
  const finalData = apiData.length > 0 ? organizeDataByCategory(apiData) : portfolioData

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 text-secondary animate-spin mx-auto mb-4" />
          <p className="text-white text-lg">Carregando portfolio...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 text-lg mb-4">{error}</p>
          <p className="text-gray-300">Usando dados de demonstração</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}


      {/* Blocos de Categorias - Layout Moderno */}
      <div className="space-y-16">
        {Object.entries(categoryConfig).map(([key, config]) => {
          const IconComponent = config.icon
          const projects = finalData[key] || []
          
          return (
            <section 
              key={key}
              className="w-full"
            >
              <div className="max-w-7xl mx-auto px-4">
                {/* Header da categoria */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${config.color} shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-4xl font-bold text-white mb-2">{config.title}</h2>
                    <p className="text-xl text-gray-400">{config.description}</p>
                  </div>
                  <Badge className="bg-secondary text-[#1a1a1a] text-lg px-6 py-3 self-start md:self-center">
                    {projects.length} projetos
                  </Badge>
                </div>

                {/* Carrossel de projetos */}
                {projects.length > 0 && (
                  <Carousel className="w-full">
                    <CarouselContent className="-ml-2 md:-ml-4">
                      {projects.map((project) => (
                        <CarouselItem key={project.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                          <div
                            className="cursor-pointer h-full"
                            onClick={() => handleProjectClick(project)}
                          >
                            <Card className="h-full bg-gray-800/50 border-gray-700 hover:border-secondary/50 hover:scale-105 transition-all duration-300">
                              <CardContent className="p-0">
                                <div className="relative aspect-square rounded-t-lg overflow-hidden bg-gray-700">
                                  <img
                                    src={project.imagem_destaque}
                                    alt={project.title}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                  />
                                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <Eye className="w-8 h-8 text-white" />
                                  </div>
                                </div>
                                <div className="absolute top-3 left-3">
                                  <img
                                    src={project.logo}
                                    alt={`Logo ${project.title}`}
                                    className="w-8 h-8 rounded-full border border-white shadow-lg"
                                  />
                                </div>
                                <div className="p-4">
                                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                                    {project.title}
                                  </h3>
                                  <p className="text-sm text-gray-400 line-clamp-2">
                                    {project.description}
                                  </p>
                                  <div className="flex flex-wrap gap-2 mt-3">
                                    {project.categories.slice(0, 2).map((category, index) => (
                                      <Badge
                                        key={index}
                                        variant="outline"
                                        className="text-xs border-gray-600 text-gray-300"
                                      >
                                        {category}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 bg-gray-800 border-gray-700 text-white hover:bg-gray-700" />
                    <CarouselNext className="right-2 bg-gray-800 border-gray-700 text-white hover:bg-gray-700" />
                  </Carousel>
                )}
              </div>
            </section>
          )
        })}
      </div>

      {/* Drawer do projeto */}
      <ProjectDrawer
        project={selectedProject}
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
      />
    </div>
  )
} 