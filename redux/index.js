import logger from "redux-logger";
import { applyMiddleware, createStore } from "redux";

const SET_CLIENT_STATE = "SET_CLIENT_STATE";
import All from "./reducers";

export const reducer = (state, { type, payload }) => {
  if (type === SET_CLIENT_STATE) {
    return {
      ...state,
      fromClient: payload
    };
  }
  return state;
};

const makeConfiguredStore = (reducer, initialState) =>
  createStore(reducer, initialState, applyMiddleware(logger));

export const makeStore = (initialState, { isServer, req, debug, storeKey }) => {
  if (isServer) {
    initialState = initialState || { fromServer: "foo" };

    return makeConfiguredStore(reducer, initialState);
  } else {
    // we need it only on client side
    const { persistStore, persistCombineReducers } = require("redux-persist");
    const storage = require("redux-persist/lib/storage").default;

    const persistConfig = {
      key: "nextjs",
      whitelist: ["fromClient", "about", "rules", "users"], // make sure it does not clash with server keys
      storage
    };

    const persistedReducer = persistCombineReducers(persistConfig, All);
    const store = makeConfiguredStore(persistedReducer, initialState);

    store.__persistor = persistStore(store); // Nasty hack

    return store;
  }
};

export const setClientState = clientState => ({
  type: SET_CLIENT_STATE,
  payload: clientState
});
