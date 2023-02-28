import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../types/Todo';

const initialState: {
  isOpen: boolean
  selectedTodo: Todo | null
} = {
  isOpen: false,
  selectedTodo: null,
};

const eventTodoSlice = createSlice({
  name: 'EventTodo',
  initialState,
  reducers: {
    setSelectTodo: (value, action: PayloadAction<Todo | null>) => {
      return {
        ...value,
        selectedTodo: action.payload,
      };
    },
    setOpenForm: (value, action: PayloadAction<boolean>) => {
      return {
        ...value,
        isOpen: action.payload,
      };
    },
  },
});

export const { actions } = eventTodoSlice;

export default eventTodoSlice.reducer;
