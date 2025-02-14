import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  status: false,
  data: []
}

const mocktestslice = createSlice({
  name: "mocktest",
  initialState,
  reducers:{
    setMockTestData(state, action){
      state.data = action.payload;
    },

  },
});

export const {setMockTestData} = mocktestslice.actions;
export default mocktestslice.reducer;