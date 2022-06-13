import { apiRequest } from "./Api";
import { IDefaultResponse, IThumbnail } from "./interfaces";

export interface ILocation {
  id: string;
  name: string;
  description: string;
  whatCanYouDo: string;
  numberOfVisits: string;
  created_at: string;
  updated_at: string;
}

export interface IRestaurant {
  id: string;
  name: string;
  description: string;
  open_hours: string;
  location_id: string;
  created_at: string;
  updated_at: string;
  location: ILocation;
  categories: any[];
  thumbnail: IThumbnail;
  images: any[];
}

export interface IGetAllRestaurantsResponse
  extends IDefaultResponse<IRestaurant[]> {}

export const getAllRestaurants = () =>
  apiRequest<any, IGetAllRestaurantsResponse>("get", "restaurants");

export const getRestaurant = (id: string) =>
  apiRequest<any, IRestaurant>("get", `restaurants/${id}`);

export const deleteRestaurant = (id: string) =>
  apiRequest<any, any>("delete", `restaurants/${id}`);

export interface IUpdateRestaurantRequest extends Partial<IRestaurant> {
  id?: string;
  formData: any;
}

export const updateRestaurant = ({
  location,
  location_id,
  ...updateResturantData
}: IUpdateRestaurantRequest) =>
  apiRequest<Omit<IUpdateRestaurantRequest, "id">, IRestaurant>(
    "patch",
    `restaurants/${updateResturantData.id}`,
    updateResturantData.formData
  );

export const createRestaurant = ({
  ...updateResturantData
}: IUpdateRestaurantRequest) =>
  apiRequest<Omit<IUpdateRestaurantRequest, "id">, IRestaurant>(
    "post",
    `restaurants`,
    updateResturantData.formData
  );
