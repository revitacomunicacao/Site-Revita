import React from "react"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Play, ExternalLink, User, Tag } from "lucide-react"
import type { IPortfolios } from "../types/IPortfolios"

interface ProjectDrawerProps {
  project: IPortfolios | null
  isOpen: boolean
  onClose: () => void
}

export const ProjectDrawer: React.FC<ProjectDrawerProps> = ({
  project,
  isOpen,
  onClose
}) => {
  if (!project) return null

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="bg-gradient-to-b from-gray-900 to-gray-800 border-t border-gray-700">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
            
            {/* Coluna Esquerda - Título e Foto */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <DrawerTitle className="text-4xl font-bold text-white text-left mb-4">
                  {project.title}
                </DrawerTitle>
              </div>
              
              {/* Imagem destacada */}
              <div className="relative w-full h-80 rounded-xl overflow-hidden">
                <img
                  src={project.imagem_destaque}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <img
                    src={project.logo}
                    alt={`Logo ${project.title}`}
                    className="w-20 h-20 rounded-full border-2 border-white shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Coluna Meio - Descrição */}
            <div className="lg:col-span-1 space-y-6">
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                  <User className="w-7 h-7 text-secondary" />
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
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                  <Tag className="w-6 h-6 text-secondary" />
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
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                  <Tag className="w-6 h-6 text-secondary" />
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

              <Separator className="bg-gray-700" />

              {/* Ações */}
              <div className="flex flex-col gap-4">
                <Button className="w-full bg-secondary text-[#1a1a1a] hover:bg-amber-400 transition-colors duration-300 text-lg py-6">
                  <Play className="w-5 h-5 mr-3" />
                  Ver Projeto
                </Button>
                
                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 text-lg py-6">
                  <ExternalLink className="w-5 h-5 mr-3" />
                  Visitar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
} 