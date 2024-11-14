import React from 'react'
import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [
    {
      id: 1,
      text: '這是一段話很多很多話'
    }
  ]
})


export default todosSlice.reducer