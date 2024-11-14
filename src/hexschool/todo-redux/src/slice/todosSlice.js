import React from 'react'
import { createSlice } from '@reduxjs/toolkit';

// 1.匯入 useDispatch
// 2.建立的 actions 匯入


export const todosSlice = createSlice({
  name: 'todos',
  initialState: [
    {
      id: 1,
      text: '這是初始值的todo'
    }
  ],
  reducers: {

    // 狀態管理器
    createTodo(state, action) {
      state.push(action.payload)
    },
    removeTodo(state, action) {
      // 相同id移除
      // const index = state.findIndex((todo) => todo.id === action.payload);
      // state.splice(index, 1)

      return state.filter((todo) => todo.id !== action.payload)
      // state = newTodo // 覆蓋 state
    },
    saveEditTodo(state, action) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index] = action.payload;
    }
  }
})

// 定義 reducers 可以使用actions來匯出（具名匯出）
export const { createTodo, removeTodo, saveEditTodo } = todosSlice.actions

export default todosSlice.reducer