import React from "react"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import type { IPortfolios } from "../types/IPortfolios"

interface ProjectDrawerProps {
  project: IPortfolios | null
  isOpen: boolean
  onClose: () => void
}

// Função para extrair o ID do vídeo do YouTube
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
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
            
            {/* Coluna Esquerda - Título e Foto/Vídeo */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <DrawerTitle className="text-4xl font-bold text-white text-left mb-4">
                  {project.title}
                </DrawerTitle>
              </div>
              
              {/* Imagem destacada ou Vídeo */}
              <div className="relative w-full h-80 rounded-xl overflow-hidden">
                {isVideo && videoId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={project.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={project.imagem_destaque}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </>
                )}
              </div>
            </div>

            {/* Coluna Meio - Descrição */}
            <div className="lg:col-span-1 space-y-6">
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Sobre o Projeto
                </h3>
                <p className="text-gray-300 leading-relaxed text-left text-lg">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Coluna Direita - Outras Informações */}
            <div className="lg:col-span-1 space-y-8">
              
              {/* Categorias */}
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Categorias
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.categories.map((category, index) => (
                    <Badge
                      key={index}
                      className="bg-secondary text-[#1a1a1a] hover:bg-amber-400 transition-colors duration-300 text-base px-4 py-2"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator className="bg-gray-700" />

              {/* Tags */}
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 transition-colors duration-300 text-base px-4 py-2"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
} 