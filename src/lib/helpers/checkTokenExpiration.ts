import jwt_decode from "jwt-decode";

export const checkTokenExpiration = (token: string): boolean | undefined => {
  try {
    if (!token) {
      throw new Error("Token not provided on checkTokenExpiration function");
    }

    if (jwt_decode<any>(token).exp < Date.now() / 1000) {
      console.log("expired token from checkTokenExpiration");
      return true;
    }
    console.log(
      "not expired token from checkTokenExpiration",
      new Date(jwt_decode<any>(token).exp * 1000)
    );

    return false;
  } catch (error) {
    console.error(error);
  }
};
