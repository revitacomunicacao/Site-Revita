import React, { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProjectDrawer } from "./ProjectDrawer"
import { FloatingNavigation } from "./FloatingNavigation"
import { portfolioData } from "../data/portfolioData"
import type { IPortfolios } from "../types/IPortfolios"
import { 
  Eye,
  Loader2
} from "lucide-react"
import getPortfolio from "../services/getPortfolio"
import { scrollToAnchor } from "@/hooks/useScrollToAnchor"

const categoryConfig = {
  branding: {
    title: "Branding",
    description: "Identidade visual e marca"
  },
  "redes-sociais": {
    title: "Redes Sociais",
    description: "Gestão de redes sociais"
  },
  sites: {
    title: "Sites",
    description: "Desenvolvimento web"
  },
  "trafego-pago": {
    title: "Tráfego Pago",
    description: "Campanhas publicitárias"
  },
  videos: {
    title: "Vídeos",
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

  const handleCategoryClick = (categoryId: string) => {
    console.log("🔄 Tentando navegar para:", categoryId)
    scrollToAnchor(categoryId, 120)
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
      <div className="min-h-screen bg-gradient-to-br flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 text-secondary animate-spin mx-auto mb-4" />
          <p className="text-white text-lg">Carregando portfolio...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 text-lg mb-4">{error}</p>
          <p className="text-gray-300">Usando dados de demonstração</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen ">
      {/* Blocos de Categorias - Layout Grid igual à Home */}
      <div className="space-y-20">
        {Object.entries(categoryConfig).map(([key, config]) => {
          const projects = finalData[key] || []
          
          return (
            <section 
              key={key}
              id={key}
              className="w-full scroll-mt-32"
            >
              {/* Header da categoria centralizado */}
              <div className="text-center mb-12 px-4">
                <h2 className="text-4xl font-bold text-white mb-3">{config.title}</h2>
                <p className="text-xl text-gray-400 mb-6">{config.description}</p>
                <div className="w-20 h-1 bg-secondary rounded-full mx-auto"></div>
              </div>

              {/* Grid de projetos na largura total com informações */}
              {projects.length > 0 && (
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
                  {projects.map((project, idx) => (
                    <div
                      key={project.id}
                      className="relative group cursor-pointer select-none overflow-hidden"
                      onClick={() => handleProjectClick(project)}
                    >
                      {/* Imagem de fundo preenchendo todo o bloco */}
                      <div className="aspect-square relative">
                        <img
                          src={project.imagem_destaque}
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover object-center"
                          draggable={false}
                        />
                        {/* Overlay escuro */}
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-300 z-10" />
                        {/* Ícone de olho no hover */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                          <Eye className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      
                      {/* Informações do projeto abaixo da imagem - altura fixa */}
                      <div className="bg-gray-800/90 p-4 border-t border-gray-700 h-42 flex flex-col justify-between">
                        <div>
                          <h3 className="text-white font-semibold text-lg mb-2 line-clamp-1">
                            {project.title}
                          </h3>
                          <p className="text-gray-300 text-sm line-clamp-2">
                            {project.description}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {project.categories.slice(0, 2).map((category, index) => (
                            <Badge
                              key={index}
                              className="bg-secondary/20 text-secondary text-xs px-2 py-1"
                            >
                              {category}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
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

      {/* Navegação Flutuante */}
      <FloatingNavigation onCategoryClick={handleCategoryClick} />
    </div>
  )
} 