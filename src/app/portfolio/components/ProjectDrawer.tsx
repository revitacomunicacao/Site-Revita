import React from "react"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { IPortfolios } from "../types/IPortfolios"

interface ProjectDrawerProps {
  project: IPortfolios | null
  isOpen: boolean
  onClose: () => void
}

// extraindo ID do vidoe
const getYouTubeVideoId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return (match && match[2].length === 11) ? match[2] : null
}

// Função para verificar se é um projeto de vídeo
const isVideoProject = (project: IPortfolios): boolean => {
  return project.categories.some(category => 
    category.toLowerCase().includes('vídeo') || 
    category.toLowerCase().includes('video')
  )
}

export const ProjectDrawer: React.FC<ProjectDrawerProps> = ({
  project,
  isOpen,
  onClose
}) => {
  if (!project) return null

  const isVideo = isVideoProject(project)
  const videoId = project.url_do_video ? getYouTubeVideoId(project.url_do_video) : null

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="bg-gradient-to-b from-gray-900 to-gray-800 border-t border-gray-700">
        <ScrollArea className="h-[calc(100vh-80px)] pr-4 sm:h-fit">
          <div className="mx-auto w-full max-w-[1200px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 lg:p-8 pb-8">
              
              {/* Coluna Esquerda - Título e Foto/Vídeo */}
              <div className="md:col-span-2 lg:col-span-1 space-y-4 md:space-y-6">
                <div>
                  <DrawerTitle className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-left mb-4">
                    {project.title}
                  </DrawerTitle>
                </div>
                
                {/* Galeria de fotos ou Vídeo */}
                <div className="relative w-full space-y-4">
                  {isVideo && videoId ? (
                    <div className="h-48 md:h-64 lg:h-80 rounded-xl overflow-hidden">
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={project.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <div className="grid grid-cols-3 gap-2 md:gap-3">
                      {project.galeria_de_foto.map((foto, fotoIdx) => (
                        <div key={fotoIdx} className="rounded-lg overflow-hidden">
                          <img
                            src={foto}
                            alt={`${project.title} - Foto ${fotoIdx + 1}`}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Coluna Meio - Descrição */}
              <div className="md:col-span-2 lg:col-span-1 space-y-4 md:space-y-6">
                <div className="text-left">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-6">
                    Sobre o Projeto
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-left text-base md:text-lg">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Coluna Direita - Outras Informações */}
              <div className="md:col-span-2 lg:col-span-1 space-y-6 md:space-y-8">
                
                {/* Categorias */}
                <div className="text-left">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">
                    Categoria
                  </h3>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.categories.map((category, index) => (
                      <Badge
                        key={index}
                        className="bg-secondary text-[#1a1a1a] hover:bg-amber-400 transition-colors duration-300 text-sm md:text-base px-3 md:px-4 py-1 md:py-2"
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex sm:hidden h-40" />
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  )
} 