import type { IBlog, IBlogId, ICategory } from "../types/IBlog";
import { axiosClient } from "@/api/axiosClient";

export const getCategories = async (): Promise<ICategory[]> => {
  const { data } = await axiosClient.get<ICategory[]>("blog/categories");
  return data;
}

export const getBlogId = async (id: string): Promise<IBlogId> => {
  const { data } = await axiosClient.get<IBlogId>(`blog/${id}`);
  return data;
}

export const getBlogs = async (): Promise<IBlog[]> => {
  const { data } = await axiosClient.get<IBlog[]>("blog");
  return data;
}
