import {configureStore} from "@reduxjs/toolkit";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import timerSlice from "../slices/TimerSlice";
import mocktestslice from "../slices/MocktestSlice";import bookReducer from "../slices/BookSlice";
import userSlice from "../slices/UserSlice";
import privateCollegesSlice from "../slices/PrivateColleges";
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


const persistUserConfig = {
  key: "user",
  storage
}
const persistedUserReducer = persistReducer(persistUserConfig, userSlice);


const persistPrivateCollegesConfig = {
  key: "privateCollegs",
  storage
}

const persistedPrivateCollegesReducer = persistReducer(persistPrivateCollegesConfig, privateCollegesSlice);

const store = configureStore({
  reducer: {
    timer: persistedReducer,
    mocktest: persistedMocktestReducer,
    books: bookReducer,
    user: persistedUserReducer,
    privateColleges: persistedPrivateCollegesReducer
  }
});

export const persistor = persistStore(store);
export default store;