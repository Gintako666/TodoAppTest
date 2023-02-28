import React, { useState, useEffect } from 'react';
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

  return (
    <form className="add-todo-form">
      <Input error={inputErrors.title} value={valueTitle} setValue={setValueTitle} placeholder="Title" />
      <Input error={inputErrors.description} value={valueDescription} setValue={setValueDescription} placeholder="Description" />
      <button
        className="add-todo-form__button"
        type="button"
        onClick={() => {
          if (!valueTitle) {
            setInputErrors(prev => ({ ...prev, title: true }));
          }

          if (!valueDescription) {
            setInputErrors(prev => ({ ...prev, description: true }));
          }

          if (valueTitle && valueDescription) {
            dispatch(actions.addTodos({
              title: valueTitle,
              description: valueDescription,
              completed: false,
              id: todoId += 1,
            }));

            setValueDescription('');
            setValueTitle('');
            setInputErrors({
              title: false,
              description: false,
            });
          }
        }}
      >
        Add todo

      </button>
    </form>
  );
};
