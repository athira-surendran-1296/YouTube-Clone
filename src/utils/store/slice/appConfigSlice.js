import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
    name: 'appConfig',
    initialState: {
        isSideNavOpen: false
    },
    reducers: {
        toggleSideNav: (state, action) => {
            state.isSideNavOpen = !state.isSideNavOpen;
        },
        closeSideNav: (state, action) => {
            state.isSideNavOpen = false;
        }
    }
});

export const { toggleSideNav, closeSideNav } = appConfigSlice.actions;
export default appConfigSlice.reducer;