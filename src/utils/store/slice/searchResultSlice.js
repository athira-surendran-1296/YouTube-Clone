import { createSlice } from "@reduxjs/toolkit";

const searchResultSlice = createSlice({
    name: 'searchResult',
    initialState: {
        searchText: '',
        result: {}
    },
    reducers: {
        setSearchText: (state, action) => {
            state.searchText = action.payload;
        },
        clearSearchText: (state, action) => {
            state.searchText = '';
        },
        setSearchResult: (state, action) => {
            state.searchText = action.payload.searchText;
            state.result = action.payload.searchResult;
        }
    }
});

export const { setSearchText, clearSearchText, setSearchResult } = searchResultSlice.actions;
export default searchResultSlice.reducer;