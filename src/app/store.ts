import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import counterReducer from './reducers/counterSlice';
import timelineReducer from './reducers/timelineSlice';
import lifeReducer from './reducers/lifeSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    timeline: timelineReducer,
    life: lifeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
