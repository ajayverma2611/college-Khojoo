import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : [],
    session : '' 
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
        }
    }
});


export const {setUserData,setSession} = userSlice.actions;
export default userSlice.reducer;