import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useScrollToAnchor = () => {
  const location = useLocation()

  useEffect(() => {
    // Verificar se há uma âncora na URL
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        // Aguardar um pouco para garantir que o DOM está pronto
        setTimeout(() => {
          const headerHeight = 120 // Altura aproximada do header
          const elementPosition = element.offsetTop - headerHeight
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          })
        }, 100)
      }
    }
  }, [location.hash])
}

// Função utilitária para scroll para âncora
export const scrollToAnchor = (anchorId: string, headerHeight: number = 120) => {
  setTimeout(() => {
    const element = document.getElementById(anchorId)
    if (element) {
      const elementPosition = element.offsetTop - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }, 100)
} 