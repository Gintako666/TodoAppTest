import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../types/Todo';

const initialState: {
  isOpen: boolean
  selectTodo: Todo | null
} = {
  isOpen: false,
  selectTodo: null,
};

const eventTodoSlice = createSlice({
  name: 'EventTodo',
  initialState,
  reducers: {
    setSelectTodo: (value, action: PayloadAction<Todo | null>) => {
      return {
        ...value,
        selectTodo: action.payload,
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
