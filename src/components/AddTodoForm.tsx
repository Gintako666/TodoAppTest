import React, { useState, useEffect, useCallback } from 'react';
import { actions } from '../features/todos';
import { useAppDispatch } from '../hooks/reduxHooks';
import { Input } from './Input';

let todoId = 0;

export const AddTodoForm = () => {
  const dispatch = useAppDispatch();
  const [valueTitle, setValueTitle] = useState('');
  const [valueDescription, setValueDescription] = useState('');
  const [inputErrors, setInputErrors] = useState({ title: false, description: false });

  useEffect(() => {
    setInputErrors(prev => ({ ...prev, description: false }));
  }, [valueDescription]);

  useEffect(() => {
    setInputErrors(prev => ({ ...prev, title: false }));
  }, [valueTitle]);

  const handleSubmit = useCallback((title, description) => {
    dispatch(actions.addTodos({
      title,
      description,
      completed: false,
      id: todoId += 1,
    }));

    setValueDescription('');
    setValueTitle('');
    setInputErrors({
      title: false,
      description: false,
    });
  }, []);

  const addNewTodo = useCallback(() => {
    if (!valueTitle) {
      setInputErrors(prev => ({ ...prev, title: true }));
    }

    if (!valueDescription) {
      setInputErrors(prev => ({ ...prev, description: true }));
    }

    if (valueTitle && valueDescription) {
      handleSubmit(valueTitle, valueDescription);
    }
  }, [valueTitle, valueDescription]);

  return (
    <form className="add-todo-form">
      <Input error={inputErrors.title} value={valueTitle} setValue={setValueTitle} placeholder="Title" />
      <Input error={inputErrors.description} value={valueDescription} setValue={setValueDescription} placeholder="Description" />
      <button
        className="add-todo-form__button"
        type="button"
        onClick={addNewTodo}
      >
        Add todo

      </button>
    </form>
  );
};
