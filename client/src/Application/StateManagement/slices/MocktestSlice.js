import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  status: false,
  data: {},
  subjectIndex: 0,
  questionIndex: 0
}

const mocktestslice = createSlice({
  name: "mocktest",
  initialState,
  reducers:{
    setMockTestData(state, action){
      state.data = action.payload;
    },
    selectOption(state, action) {
      const { subIndex, questionIndex, option } = action.payload;
      state.data.sections[subIndex].questions[questionIndex].selectedOption = option;
      console.log(state.data.sections[subIndex].questions[questionIndex].selectedOption);
    },
    clearOption(state, action) {
      const { subIndex, questionIndex } = action.payload;
      state.data.sections[subIndex].questions[questionIndex].selectedOption = "";
    },
    setSubindex(state, action){
      state.subjectIndex = action.payload.subIndex;
    },
    setQuestionindex(state, action){
      state.questionIndex = action.payload.questionIndex;
  }
  },
});

export const {setMockTestData, selectOption, clearOption, setSubindex, setQuestionindex} = mocktestslice.actions;
export default mocktestslice.reducer;