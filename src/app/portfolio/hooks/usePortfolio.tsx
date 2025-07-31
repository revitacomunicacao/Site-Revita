import { useState, useEffect } from "react";
import getPortfolio from "../services/getPortfolio";
import type { IPortfolios } from "../types/IPortfolios";

export const usePortfolio = () => {
  const [data, setData] = useState<IPortfolios[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    getPortfolio()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  },[])
  return { data, loading, error }
}