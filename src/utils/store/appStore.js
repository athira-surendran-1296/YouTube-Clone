import { configureStore } from "@reduxjs/toolkit";
import appConfigReducer from "./slice/appConfigSlice";
import videosReducer from "./slice/videosSlice";
import searchReducer from "./slice/searchSlice";
import chatReducer from "./slice/chatSlice";

const appStore = configureStore({
    reducer: {
        appConfig: appConfigReducer,
        videos: videosReducer,
        search: searchReducer,
        chat: chatReducer,
    }
});

export default appStore;