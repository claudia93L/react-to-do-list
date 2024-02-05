import { createSlice } from '@reduxjs/toolkit';
const generateUniqueID = require('generate-unique-id');

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    todos: [],
  },
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: generateUniqueID(),
        name: action.payload.desc,
        todos: [],
      };
      state.tasks.push(newTask);
    },
    addTodoToTask: (state, action) => {
      const { taskId, todoDesc } = action.payload;
      const task = state.tasks.find((task) => task.id === taskId);

      if (task) {
        task.todos.push({ desc: todoDesc });
      }
    },
    removeTodoFromTask: (state, action) => {
      const { taskId, todoId } = action.payload;
      const task = state.tasks.find((task) => task.id === taskId);

      if (task) {
        task.todos = task.todos.filter((todo) => todo.id !== todoId);
      }
      deleteTask: (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      };
    },
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
