import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
    name: 'videos',
    initialState: {
        popularVideos: null
    },
    reducers: {
        setPopularVideos: (state, action) => {
            state.popularVideos = action.payload;
        }
    }
});

export const { setPopularVideos } = videosSlice.actions;
export default videosSlice.reducer;