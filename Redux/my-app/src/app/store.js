import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import randomCounterReducer from '../features/random-counter/randomCounterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    randomCounter: randomCounterReducer,
  },
});
