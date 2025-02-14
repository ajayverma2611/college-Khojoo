import {configureStore} from "@reduxjs/toolkit";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import timerSlice from "../slices/TimerSlice";
import mocktestslice from "../slices/MocktestSlice";import bookReducer from "../slices/BookSlice";

const persistConfig = {
  key: "timer",
  storage
}



const persistedReducer = persistReducer(persistConfig, timerSlice);
const persistMocktestConfig = {
  key: "mocktest",
  storage
}
const persistedMocktestReducer = persistReducer(persistMocktestConfig, mocktestslice);



const store = configureStore({
  reducer: {
    timer: persistedReducer,
    mocktest: persistedMocktestReducer,
    books: bookReducer
  }
});

export const persistor = persistStore(store);
export default store;