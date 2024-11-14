import React from 'react'
import { createSlice } from '@reduxjs/toolkit';

// 1.匯入 useDispatch
// 2.建立的 actions 匯入


export const todosSlice = createSlice({
  name: 'todos',
  initialState: [
    {
      id: 1,
      text: 'action.payload'
    }
  ],
  reducers: {
    // 狀態管理器
    createTodo(state, action) {
      console.log(state)
      console.log(action)
      state.push(action.payload)
    }
  }
})

// 定義 reducers 可以使用actions來匯出（具名匯出）
export const { createTodo } = todosSlice.actions

export default todosSlice.reducer