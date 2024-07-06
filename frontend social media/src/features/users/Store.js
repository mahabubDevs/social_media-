import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import { authApi } from "../api/authApi"


const store = configureStore({
    reducer:{
        [authApi.reducerPath]: authApi.reducer,
        registration: authSlice
    },
    middleware:(getDefaultMiddlware)=> getDefaultMiddlware().concat(authApi.middleware)
})
export default store