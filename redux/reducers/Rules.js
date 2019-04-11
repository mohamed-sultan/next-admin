import { RULES } from "../types";

const initialState = {
  rules: "شروط التطبيق"
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case RULES:
      return { ...state, rules: payload };

    default:
      return state;
  }
};
