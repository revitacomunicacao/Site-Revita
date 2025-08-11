import { axiosClient } from "@/api/axiosClient";
import type { IPortfolios } from "../types/IPortfolios";
import axios from "axios";
import { portfolioData } from "../data/portfolioData";

async function getPortfolio(): Promise<IPortfolios[]> {
  try {
    const response = await axiosClient.get<IPortfolios[]>("portfolio");
    if (Array.isArray(response.data) && response.data.length > 0) {
      return response.data;
    } else {
      const mockData: IPortfolios[] = Object.values(portfolioData).flat();
      return mockData;
    }
  } catch (error) {
    const mockData: IPortfolios[] = Object.values(portfolioData).flat();
    return mockData;
  }
}

export default getPortfolio