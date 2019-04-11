import { USERS } from "../types";

const initialState = {
  users: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USERS:
      return { ...state, users: payload };

    default:
      return state;
  }
};
