import { usePortfolio } from "../hooks/usePortfolio";

export const ListPortfolio = () => {
  const { data: portfolio, loading, error } = usePortfolio()

  console.log("Dados do portfolio:", portfolio)

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-white text-xl">Carregando portfolio...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500 text-xl">Erro ao carregar portfolio: {error.message}</div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolio.map((item) => (
          <div key={item.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
            <div className="relative h-48">
              <img 
                src={item.imagem_destaque} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <img 
                  src={item.logo} 
                  alt={`Logo ${item.title}`}
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                {item.title}
              </h3>
              
              <p className="text-gray-300 mb-4">
                {item.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {item.categories.map((category, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-secondary text-[#1a1a1a] text-xs rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-1">
                {item.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}