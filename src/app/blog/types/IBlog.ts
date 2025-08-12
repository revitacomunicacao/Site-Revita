export interface ICategory {
  id: number;
  name: string;
  slug: string;
  featureImage: string;
}

export interface IBlog {
  id: number;
  title: string;
  featureImage: string;
  summary: string;
  author: string;
  categories: {
    name: string;
  }[]
}

export interface IBlogId {
  id: number;
  title: string;
  featureImage: string;
  content: string;
  summary: string;
  readingTime: string;
  author: string;
  categories: {
    name: string;
  }[]
  postingDate: string;
}