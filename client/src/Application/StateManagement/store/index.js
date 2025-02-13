import {configureStore} from "@reduxjs/toolkit";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import timerSlice from "../slices/TimerSlice";

const persistConfig = {
  key: "root",
  storage
}
const persistedReducer = persistReducer(persistConfig, timerSlice);

const store = configureStore({
  reducer: {
    timer: persistedReducer
  }
});

export const persistor = persistStore(store);
export default store;