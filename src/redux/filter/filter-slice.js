import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchFilter: '',
  categoryFilter: '',
  sortEventsOption: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    searchFilter(state, { payload }) {
      return { ...state, searchFilter: payload };
    },

    categoryFilter(state, { payload }) {
      return { ...state, categoryFilter: payload };
    },

    sortEventsOption(state, { payload }) {
      return { ...state, sortEventsOption: payload };
    },
  },
});

export const { searchFilter, categoryFilter, sortEventsOption } =
  filterSlice.actions;

export default filterSlice.reducer;
