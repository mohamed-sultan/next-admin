import { Login, LOGOUT } from "../types";

const initialState = {
  user: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case Login:
      return { ...state, user: payload };
    case LOGOUT:
      return { ...initialState };

    default:
      return state;
  }
};
