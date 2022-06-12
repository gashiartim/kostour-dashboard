import { apiRequest } from "./Api";

export interface IRole {
  id: string;
  name: string;
  slug: string;
}

export type IGettAllRolesResponse = Array<IRole>;

export const getAllRoles = () =>
  apiRequest<any, IGettAllRolesResponse>("get", "roles");
