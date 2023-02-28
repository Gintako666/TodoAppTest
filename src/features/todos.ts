import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../types/Todo';

const initialState: { todos: Todo[] } = { todos: [] };

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: (value, action: PayloadAction<Todo>) => {
      return { todos: [...value.todos, action.payload] };
    },
    editTodo: (value, action: PayloadAction<Todo>) => {
      return {
        todos: value.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return action.payload;
          }

          return todo;
        }),
      };
    },
  },
});

export const { actions } = todosSlice;

export default todosSlice.reducer;
