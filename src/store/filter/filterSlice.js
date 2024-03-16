import { createSlice } from '@reduxjs/toolkit';
const filterSlice = createSlice({
  name: 'filter ',
  initialState: { filter: '' },
  reducers: {
    updateFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});
export const filterReducer = filterSlice.reducer;
export const { updateFilter } = filterSlice.actions;
