import { ABOUT } from "../types";

const initialState = {
  about: "تطبيق حالا"
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ABOUT:
      return { ...state, about: payload };

    default:
      return state;
  }
};
