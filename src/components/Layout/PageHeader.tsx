import { AnimatedElement } from "@/components/AnimatedElement"
import { ChevronRight, Home } from "lucide-react"
import { Link } from "react-router-dom"

interface PageHeaderProps {
  title: string
  subtitle?: string
  breadcrumb?: {
    label: string
    href: string
  }[]
  backgroundImage?: string
  className?: string
  highlightWords?: string[]
}

export const PageHeader = ({ 
  title, 
  subtitle, 
  breadcrumb = [], 
  backgroundImage,
  className = "",
  highlightWords = []
}: PageHeaderProps) => {
  // Função para aplicar shimmer em palavras específicas
  const renderTitleWithShimmer = (titleText: string) => {
    if (highlightWords.length === 0) {
      return <span className="shimmer-gradient">{titleText}</span>
    }

    const words = titleText.split(' ')
    return words.map((word, index) => {
      const shouldHighlight = highlightWords.some(highlight => 
        word.toLowerCase().includes(highlight.toLowerCase())
      )
      
      return (
        <span key={index}>
          {shouldHighlight ? (
            <span className="shimmer-gradient">{word}</span>
          ) : (
            word
          )}
          {index < words.length - 1 ? ' ' : ''}
        </span>
      )
    })
  }

  return (
    <section 
      className={`relative py-12 lg:py-16 ${className}`}
      style={{
        background: backgroundImage 
          ? `linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(102, 0, 66, 0.9) 100%), url(${backgroundImage})`
          : 'linear-gradient(135deg, #0e0e0e 0%, #660042 50%, #0e0e0e 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        {breadcrumb.length > 0 && (
          <div className="flex items-center justify-center gap-2 text-white/70 mb-6">
            <Link 
              to="/" 
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <Home size={16} />
              <span className="text-sm font-medium">Início</span>
            </Link>
            {breadcrumb.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <ChevronRight size={16} className="text-[#FF9025]" />
                <Link 
                  to={item.href} 
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-sm font-medium"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Título */}
        <AnimatedElement animation="slide-up" delay={300}>
          <div className="text-center mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {renderTitleWithShimmer(title)}
            </h1>
          </div>
        </AnimatedElement>

        {/* Subtítulo */}
        {subtitle && (
          <AnimatedElement animation="slide-up" delay={500}>
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed font-light">
                {subtitle}
              </p>
            </div>
          </AnimatedElement>
        )}

        {/* Elemento decorativo */}
        <div className="flex justify-center mt-8">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FF9025] to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  )
}