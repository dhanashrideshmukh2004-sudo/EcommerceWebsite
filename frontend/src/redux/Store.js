import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./wishlistSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "wishlist",
  storage,
};

const persistedWishlist = persistReducer(persistConfig, wishlistReducer);

export const store = configureStore({
  reducer: {
    wishlist: persistedWishlist,
  },
});

export const persistor = persistStore(store);
