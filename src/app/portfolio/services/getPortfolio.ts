import { axiosClient } from "@/api/axiosClient";
import type { IPortfolios } from "../types/IPortfolios";
import axios from "axios";
import { portfolioData } from "../data/portfolioData";

async function getPortfolio(): Promise<IPortfolios[]> {
  try {
    console.log("🔄 Fazendo requisição para:", axiosClient.defaults.baseURL + "/portfolio");
    
    const response = await axiosClient.get<IPortfolios[]>("portfolio");
    
    console.log("✅ Resposta da API:", response.data);
    
    // Validar se os dados estão no formato esperado
    if (Array.isArray(response.data) && response.data.length > 0) {
      console.log("✅ Dados da API carregados com sucesso");
      return response.data;
    } else {
      console.warn("⚠️ API retornou dados vazios ou inválidos, usando dados mock");
      // Converter dados mock de categorias para array simples
      const mockData: IPortfolios[] = Object.values(portfolioData).flat();
      return mockData;
    }
  } catch (error) {
    console.error("❌ Erro na requisição:", error);
    
    if (axios.isAxiosError(error)) {
      console.error("📊 Status:", error.response?.status);
      console.error("📄 Dados da resposta:", error.response?.data);
      console.error("🌐 URL:", error.config?.url);
    }
    
    // Retornar dados mock em caso de erro
    console.log("🔄 Usando dados mock para desenvolvimento");
    // Converter dados mock de categorias para array simples
    const mockData: IPortfolios[] = Object.values(portfolioData).flat();
    return mockData;
  }
}

export default getPortfolio