import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface ITimelineState {
  currentDay: number;
}

const initialState: ITimelineState = {
  currentDay: 0,
};

export const timelineSlice = createSlice({
  name: 'timeline',
  initialState,
  reducers: {
    nextDay: (state) => {
      state.currentDay += 1;
    },
    setDayByAmount: (state, action: PayloadAction<number>) => {
      state.currentDay += action.payload;
    },
  },
});

export const { nextDay, setDayByAmount } = timelineSlice.actions;

export const selectCurrentDay = (state: RootState) => state.timeline.currentDay;

export default timelineSlice.reducer;
