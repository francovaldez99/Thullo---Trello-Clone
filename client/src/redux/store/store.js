import { configureStore } from '@reduxjs/toolkit'
import tableroReducer from "../slices/tableroSlice"
export const store = configureStore({
  reducer: {
    tablero:tableroReducer
  },
});