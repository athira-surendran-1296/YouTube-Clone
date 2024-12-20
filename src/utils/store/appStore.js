import { configureStore } from "@reduxjs/toolkit";
import appConfigReducer from "./slice/appConfigSlice";
import videosReducer from "./slice/videosSlice";

const appStore = configureStore({
    reducer: {
        appConfig: appConfigReducer,
        videos: videosReducer
    }
});

export default appStore;