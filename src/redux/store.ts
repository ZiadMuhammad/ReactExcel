// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { excelReducer } from './reducers';

export const store = configureStore({
  reducer: {
    excel: excelReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Add this line to make it a module
export {};
