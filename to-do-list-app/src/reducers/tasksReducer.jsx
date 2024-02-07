import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: action.payload.id,
        name: action.payload.name,
        color: action.payload.color,
        todos: [],
      };
      state.tasks.push(newTask);
    },
    addTodoToTask: (state, action) => {
      const { taskId, todoDesc } = action.payload;
      const task = state.tasks.find((task) => task.id === taskId);

      if (task) {
        task.todos.push(todoDesc);
      }
    },
    removeTodoFromTask: (state, action) => {
      const { taskId, todoIndex } = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === taskId);

      if (taskIndex !== -1) {
        state.tasks[taskIndex].todos.splice(todoIndex, 1);
      }
    },
    editTask: (state, action) => {
      const { taskId, taskName } = action.payload;
      const task = state.tasks.find((task) => task.id === taskId);

      if (task) {
        task.name = taskName;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const {
  addTask,
  editTask,
  deleteTask,
  addTodoToTask,
  removeTodoFromTask,
} = tasksSlice.actions;
export default tasksSlice.reducer;
