import { configureStore } from '@reduxjs/toolkit';
import todosReduser from '../features/todos';
import modalTodoReduser from '../features/modalTodo';

const store = configureStore({
  reducer: {
    todos: todosReduser,
    modalTodo: modalTodoReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
