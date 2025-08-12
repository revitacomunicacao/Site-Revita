import { getBlogs, getBlogId, getCategories } from "../services/getBlog";
import type { IBlog, IBlogId, ICategory } from "../types/IBlog";
import { useEffect, useState } from "react";

export const useBlog = () => {
  const [data, setData] = useState<IBlog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getBlogs()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  },[])
  return { data, loading, error }
}

export const useBlogId = (id: string) => {
  const [data, setData] = useState<IBlogId | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if(!id) {
      setLoading(false)
      return 
    } 
    getBlogId(id)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  },[id])
  return { data, loading, error }
}

export const useCategories = () => {
  const [data, setData] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getCategories()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  },[])
  return { data, loading, error }
}