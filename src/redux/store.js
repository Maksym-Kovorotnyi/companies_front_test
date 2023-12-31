import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/authSlice";
import { companiesReducer } from "./companies/companiesSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken", "nickname"],
};

const authPersistedReducer = persistReducer(authPersistConfig, authReducer);

const rootRersistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  auth: authPersistedReducer,
  companies: companiesReducer,
});

const rootPersistedReducer = persistReducer(rootRersistConfig, rootReducer);

export const store = configureStore({
  reducer: rootPersistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
