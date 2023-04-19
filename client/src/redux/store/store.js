import { configureStore } from '@reduxjs/toolkit'
import tablero from "../slices/tableroSlice"
export const store = configureStore({
  reducer: {
    tablero:tablero
  },
});