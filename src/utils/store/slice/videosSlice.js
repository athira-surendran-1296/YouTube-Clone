import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
    name: 'videos',
    initialState: {
        popularVideos: null,
        watchPageCurrentVideo: null
    },
    reducers: {
        setPopularVideos: (state, action) => {
            state.popularVideos = action.payload;
        },
        setWatchPage: (state, action) => {
            state.watchPageCurrentVideo = action.payload;
        },
        clearWatchPage: (state, action) => {
            state.watchPageCurrentVideo = {};
        }
    }
});

export const { setPopularVideos, setWatchPage, clearWatchPage } = videosSlice.actions;
export default videosSlice.reducer;