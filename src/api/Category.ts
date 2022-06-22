import { apiRequest } from "./Api";
import { IThumbnail } from "./interfaces";

export type ICategoriesResponse = Array<ICategory>;

export interface ICategory {
  id: string;
  name: string;
  slug: string;
  parent_id: number;
  level: number;
  top_category: boolean;
  display_on_home_page: boolean;
  sub_categories: [];
  sub_sub_categories?: [];
  thumbnail: IThumbnail;
  created_at: string;
  updated_at: string;
}

export interface IFilters {
  top_level_categories?: boolean;
  top_categories?: boolean;
  sub_categories?: boolean;
  display_on_home_page?: boolean;
}

export const getCategories = async (filters?: IFilters) =>
  await apiRequest<any, ICategoriesResponse>(
    "get",
    "categories",
    undefined,
    undefined,
    filters
  );

export const getCategory = async (id: string) =>
  await apiRequest<any, ICategory>("get", `categories/${id}`);

export interface ICreateCategory {
  name: string;
  thumbnail?: any;
  parent_id?: string;
  top_category?: boolean;
}

export const createCategory = async (createCategoryDto: ICreateCategory) => {
  return await apiRequest<ICreateCategory, ICategory>(
    "post",
    `categories`,
    createCategoryDto
  );
};

interface IUpdateCategoryRequest {
  formData: any;
  id: string;
}

export const updateCategory = async (
  updateCategoryDto: IUpdateCategoryRequest
) => {
  return await apiRequest<IUpdateCategoryRequest, ICategory>(
    "patch",
    `categories/${updateCategoryDto.id}`,
    updateCategoryDto.formData
  );
};

export const deleteCategory = async (id: string) =>
  await apiRequest("delete", `categories/${id}`);
