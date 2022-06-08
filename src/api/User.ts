import { apiRequest } from "./Api";

export interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  birthday: string;
  phone: string;
  role_id: string;
  created_at: string;
  updated_at: string;
  role: IRole;
}

interface IRole {
  id: string;
  name: string;
  slug: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  user: IUser;
  access_token: string;
  expires_in: string;
}

export const login = async (data: ILoginRequest) =>
  await apiRequest<ILoginRequest, ILoginResponse>("post", "auth/login", data);

export const getProfile = async () =>
  await apiRequest<any, IUser>("get", "users/me");

export interface IForgotPasswordRequest {
  email: string;
}

export const forgotPassword = async (data: IForgotPasswordRequest) =>
  await apiRequest<IForgotPasswordRequest, unknown>(
    "post",
    "auth/forgot-password",
    data
  );

export interface ISetNewPasswordRequest {
  token?: string;
  new_password: string;
  confirm_password: string;
}

export const setNewPassword = async (data: ISetNewPasswordRequest) => {
  const { token, ...rest } = data;
  return await apiRequest<ISetNewPasswordRequest, unknown>(
    "post",
    `auth/set-new-password/${data.token}`,
    rest
  );
};

export const getUserDetails = async () =>
  await apiRequest<{}, any>("get", "users/me");

export interface IChangePasswordData {
  old_password: string;
  new_password: string;
  confirm_password: string;
}

interface IChangePasswordResponse {
  message: string;
  user: Omit<IUser, "role">;
}

export const changePassword = async (changePasswordData: IChangePasswordData) =>
  await apiRequest<IChangePasswordData, IChangePasswordResponse>(
    "put",
    "users/change-password",
    changePasswordData
  );
