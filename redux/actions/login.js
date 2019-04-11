import { Login } from "../types";

export const LOGINACTION = payload => {
  return {
    type: Login,
    payload
  };
};
