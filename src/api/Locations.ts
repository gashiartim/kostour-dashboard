import { apiRequest } from "./Api";
import { IDefaultResponse, IThumbnail } from "./interfaces";

export interface ILocation {
  id: string;
  name: string;
  description: string;
  whatCanYouDo: string;
  numberOfVisits: string;
  categories: any[];
  thumbnail: IThumbnail;
  images: IThumbnail[];
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

export interface IGetAllLocationsResponse
  extends IDefaultResponse<IRestaurant[]> {}

export const getAllLocations = () =>
  apiRequest<any, IGetAllLocationsResponse>("get", "locations");

export const getRestaurant = (id: string) =>
  apiRequest<any, IRestaurant>("get", `restaurants/${id}`);

export const deleteRestaurant = (id: string) =>
  apiRequest<any, any>("delete", `restaurants/${id}`);

export interface IUpdateRestaurantRequest extends Partial<IRestaurant> {}

export const updateRestaurant = (updateResturantData: any) =>
  apiRequest<IUpdateRestaurantRequest, IRestaurant>(
    "patch",
    `restaurants/${updateResturantData.id}`,
    {
      ...updateResturantData,
    }
  );
