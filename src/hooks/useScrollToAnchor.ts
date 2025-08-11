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
          const headerHeight = 80 // Altura ajustada do header
          const elementPosition = element.offsetTop - headerHeight
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          })
        }, 200) // Aumentado o delay para garantir que a página carregou
      }
    }
  }, [location.hash])
}

// Função utilitária para scroll para âncora
export const scrollToAnchor = (anchorId: string, headerHeight: number = 80) => {
  setTimeout(() => {
    const element = document.getElementById(anchorId)
    if (element) {
      const elementPosition = element.offsetTop - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }, 200) // Aumentado o delay para garantir que a página carregou
} 