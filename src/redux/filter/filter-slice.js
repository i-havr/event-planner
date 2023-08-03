import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    eventsFilter(state, { payload }) {
      state = payload;
      return state;
    },
  },
});

export const { eventsFilter } = filterSlice.actions;

export default filterSlice.reducer;
