import { configureStore } from '@reduxjs/toolkit'
import todosReducer from "./slice/todosSlice";
export const store = configureStore({
  reducer: {
    todos: todosReducer,
  }
})
