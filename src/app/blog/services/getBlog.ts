import type { IBlog, IBlogId } from "../types/IBlog";
import { axiosClient } from "@/api/axiosClient";

export const  getBlogId = async (id: string): Promise<IBlogId[]> =>{
  const { data } = await axiosClient.get<IBlogId>(`blog/${id}`);
  return data;
}

export const getBlogs = async (): Promise<IBlog[]> =>{
  const { data } = await axiosClient.get<IBlog[]>("blog");
  return data;
}
