import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../components/counterRedux/counterSlice.js';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
