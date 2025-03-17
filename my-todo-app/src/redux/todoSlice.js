import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.isDone = !task.isDone;
    },
    editTask: (state, action) => {
      const { id, description } = action.payload;
      const task = state.tasks.find((t) => t.id === id);
      if (task) task.description = description;
    },
  },
});

export const { addTask, toggleTask, editTask } = todoSlice.actions;
export default todoSlice.reducer;
