import { configureStore } from "@reduxjs/toolkit";
import appConfigReducer from "./slice/appConfigSlice";

const appStore = configureStore({
    reducer: {
        appConfig: appConfigReducer
    }
});

export default appStore;