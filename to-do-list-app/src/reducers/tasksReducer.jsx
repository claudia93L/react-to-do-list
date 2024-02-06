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
      const randomId = Math.floor(Math.random() * 10000);

      if (task) {
        task.todos.push({ id: randomId, desc: todoDesc });
      }
    },
    removeTodoFromTask: (state, action) => {
      const { taskId, todoId } = action.payload;
      const task = state.tasks.find((task) => task.id === taskId);

      if (task) {
        task.todos = task.todos.filter((todo) => todo.id !== todoId);
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
