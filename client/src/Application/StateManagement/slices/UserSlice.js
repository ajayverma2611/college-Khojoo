import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : [],
    session : '',
    id: ''
}

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers:{
        setUserData(state, action){
            state.data = action.payload;
        },
        setSession(state,action){
            state.session = action.payload.session;
        },
        setUserId(state,action){
            state.id = action.payload;
        }
    }
});


export const {setUserData,setSession,setUserId} = userSlice.actions;
export default userSlice.reducer;