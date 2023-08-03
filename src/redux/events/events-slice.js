import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    fetchEvents(state, { payload }) {
      state.items = payload;
      return state;
    },

    addEvent(state, { payload }) {
      return {
        ...state,
        items: [...state.items, payload],
      };
    },

    deleteEvent(state, { payload }) {
      return {
        ...state,
        items: state.items.filter(({ id }) => id !== payload.id),
      };
    },

    editEvent(state, { payload }) {
      return {
        ...state,
        items: state.items.map(event =>
          event.id === payload.id ? payload : event
        ),
      };
    },
  },
});

export const { fetchEvents, addEvent, deleteEvent, editEvent } =
  eventsSlice.actions;

export default eventsSlice.reducer;
