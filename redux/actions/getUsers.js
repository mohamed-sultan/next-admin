import { USERS } from "../types";

export const GETUSERSACTION = payload => {
  return {
    type: USERS,
    payload
  };
};
