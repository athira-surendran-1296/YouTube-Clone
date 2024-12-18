import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
    name: 'appConfig',
    initialState: {
        isSideNavOpen: true
    },
    reducers: {
        toggleSideNav: (state, action) => {
            state.isSideNavOpen = !state.isSideNavOpen;
        }
    }
});

export const { toggleSideNav } = appConfigSlice.actions;
export default appConfigSlice.reducer;