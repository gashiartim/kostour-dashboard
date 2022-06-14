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

export const getLocation = (id: string) =>
  apiRequest<any, ILocation>("get", `locations/${id}`);

export const deleteLocation = (id: string) =>
  apiRequest("delete", `locations/${id}`);

export interface IUpdateLocationRequest extends Partial<ILocation> {
  formData: { [key: string]: any };
}

export const updateLocation = (updateLocationData: IUpdateLocationRequest) =>
  apiRequest<IUpdateLocationRequest, ILocation>(
    "patch",
    `locations/${updateLocationData.id}`,
    updateLocationData.formData as any
  );

export interface ICreateLocationRequest {
  formData: { [key: string]: any };
  // name: string;
  // description: string;
  // whatCanYouDo: string;
  // categories: string[];
  // thumbnail?: any;
}

export const createLocation = (createLocationData: ICreateLocationRequest) =>
  apiRequest<ICreateLocationRequest, ILocation>(
    "post",
    `locations`,
    createLocationData.formData as any
  );
