import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: []
}

const privateCollegesSlice = createSlice({
  name: 'privateColleges',
  initialState,
  reducers:{
    setPrivateColleges: (state, action) => {
      state.data = action.payload;
    }
  }
});

export const {setPrivateColleges} = privateCollegesSlice.actions;
export default privateCollegesSlice.reducer;