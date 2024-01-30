

import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
  name:"todos",
  initialState: [],
  reducers: {

    addTodo: (state, action) => {
      const { title, text, mm, dd, yy } = action.payload;
      const newTodo = {
        title,
        text,
        mm,
        dd,
        yy,
        id: state.length + 1,
        completed: false
      };
      state.push(newTodo);
    },
   todoCompalete: (state, action) => {
    const todo = state.find((todo) => todo.id === action.payload);
    if (todo) {
      todo.completed = !todo.completed
    }
   },

   deleteFunc: (state,action) => {
    const index = state.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }}
}});

export const { addTodo, tittleTodo, todoCompalete, deleteFunc } = todoSlice.actions;
export default todoSlice.reducer;