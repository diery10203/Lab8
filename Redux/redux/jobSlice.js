import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', job: 'Learning Redux' },
  { id: '2', job: 'Do homework' },
  { id: '3', job: 'Playing football' },
  { id: '4', job: 'Do homework' },
  { id: '5', job: 'Playing football' },
];

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    addJob: (state, action) => {
      state.push(action.payload);
    },
    deleteJob: (state, action) => {
      return state.filter((job) => job.id !== action.payload);
    },
  },
});

export const { addJob, deleteJob } = jobSlice.actions;

export default jobSlice.reducer;
