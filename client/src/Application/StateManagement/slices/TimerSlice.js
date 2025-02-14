import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  time: 3 * 60 * 60,
  isRunning: false,
  testSubmitted: false,
  id: ""
}

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers:{
    decrementTime(state){
      state.time -= 1;
    },
    startTime(state, action){
      state.id = action.payload;
      state.isRunning = true;
      state.testSubmitted = false;
    },
    resetTime(state){
      state.time = 3 * 60 * 60;
      state.isRunning = false;
      state.testSubmitted = false;
    },
    autoSubmit(state){
      state.time = 0;
      state.isRunning = false;
      state.testSubmitted = true;
    },
    submitTest(state){
      state.isRunning = false;
      state.testSubmitted = true;
    }
  },
});

export const {startTime, decrementTime, resetTime, autoSubmit, submitTest} = timerSlice.actions;
export default timerSlice.reducer;