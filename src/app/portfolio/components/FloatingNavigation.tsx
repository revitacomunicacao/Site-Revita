import React, { useEffect, useState } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { 
  Palette, 
  Instagram, 
  Globe, 
  TrendingUp, 
  Video
} from "lucide-react"

interface FloatingNavigationProps {
  onCategoryClick: (categoryId: string) => void
}

const categories = [
  {
    id: "branding",
    name: "Branding",
    icon: Palette,
    color: "bg-purple-500 hover:bg-purple-600"
  },
  {
    id: "redes-sociais",
    name: "Redes Sociais",
    icon: Instagram,
    color: "bg-pink-500 hover:bg-pink-600"
  },
  {
    id: "sites",
    name: "Sites",
    icon: Globe,
    color: "bg-green-500 hover:bg-green-600"
  },
  {
    id: "trafego-pago",
    name: "Tráfego Pago",
    icon: TrendingUp,
    color: "bg-orange-500 hover:bg-orange-600"
  },
  {
    id: "videos",
    name: "Vídeos",
    icon: Video,
    color: "bg-red-500 hover:bg-red-600"
  }
]

export const FloatingNavigation: React.FC<FloatingNavigationProps> = ({ onCategoryClick }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string>("")

  useEffect(() => {
    // Delay para animação de entrada
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200 // Offset para considerar header

      // Encontrar qual seção está visível
      let currentActive = ""
      let minDistance = Infinity
      
      for (const category of categories) {
        const element = document.getElementById(category.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY
          const elementBottom = elementTop + rect.height

          // Verificar se o scroll está dentro desta seção
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            currentActive = category.id
            break
          }
          
          // Calcular distância para encontrar a mais próxima
          const distance = Math.abs(scrollPosition - elementTop)
          if (distance < minDistance) {
            minDistance = distance
            if (!currentActive) {
              currentActive = category.id
            }
          }
        }
      }

      if (currentActive !== activeCategory) {
        console.log("🎯 Categoria ativa mudou para:", currentActive)
        setActiveCategory(currentActive)
      }
    }

    // Throttle para melhor performance
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledHandleScroll)
    handleScroll() // Verificar posição inicial

    return () => window.removeEventListener('scroll', throttledHandleScroll)
  }, [activeCategory])

  return (
    <TooltipProvider>
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-[9999] space-y-3 hidden md:block">
        {categories.map((category, index) => {
          const IconComponent = category.icon
          const isActive = activeCategory === category.id
          
          return (
            <Tooltip key={category.id}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => onCategoryClick(category.id)}
                  className={`
                    w-12 h-12 rounded-full shadow-lg 
                    ${category.color} 
                    text-white 
                    flex items-center justify-center 
                    transition-all duration-500 ease-out
                    hover:scale-110 
                    hover:shadow-xl
                    hover:rotate-3
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white
                    ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
                    ${isActive ? 'ring-4 ring-white ring-opacity-50 scale-110' : ''}
                  `}
                  style={{
                    transitionDelay: `${index * 150}ms`
                  }}
                >
                  <IconComponent className="w-5 h-5" />
                </button>
              </TooltipTrigger>
              <TooltipContent 
                side="left" 
                className="bg-gray-800 text-white border-gray-700 shadow-lg"
                sideOffset={10}
              >
                <p className="font-semibold text-sm">{category.name}</p>
              </TooltipContent>
            </Tooltip>
          )
        })}
      </div>
    </TooltipProvider>
  )
}
