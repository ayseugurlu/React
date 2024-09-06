import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import stockReducer from "../features/stockSlice"
// import authMidReducer from "../features/authSliceMiddleware"; //!middleware ile olan kullanım
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, authReducer)
 
//!redux-toolkit store
const store = configureStore({
  reducer: {
    // auth: authReducer,
    // auth:authMidReducer,
    auth: persistedReducer,
    stock: stockReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});


//!redux-persist
export let persistor = persistStore(store)

export default store;
