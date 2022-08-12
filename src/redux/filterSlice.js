import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    setFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Actions
export const { setFilter } = filterSlice.actions;

// Reducer
export const filterReducer = filterSlice.reducer;
