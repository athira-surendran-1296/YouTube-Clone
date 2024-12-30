import { createSlice } from "@reduxjs/toolkit";

const chatSclice = createSlice({
    name: "chat",
    initialState: {
        chatData: []
    },
    reducers: {
        addChat: (state, action) => {
            if(state.chatData.length >= 99){
                state.chatData.splice(99,1);
            }
            state.chatData.unshift(action.payload);
        }
    }
});

export const { addChat } = chatSclice.actions;
export default chatSclice.reducer;