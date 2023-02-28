import React from 'react';
import { actions as modalTodoActions } from '../features/modalTodo';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';

export const TodoList = () => {
  const dispatch = useAppDispatch();

  const { todos } = useAppSelector(state => state.todos);

  return (
    <ul className="todo-list">
      <li className="todo-list__item">
        <div className="todo-list__item__part"><b>ID</b></div>
        <div className="todo-list__item__part"><b>TITLE</b></div>
        <div className="todo-list__item__part"><b>DESCRIPTION</b></div>
        <div className="todo-list__item__part"><b>STATUS</b></div>
      </li>
      {todos.map(todo => {
        return (
          <li
            key={todo.id}
            className="todo-list__item"
            aria-hidden
            onClick={() => {
              dispatch(modalTodoActions.setOpenForm(true));
              dispatch(modalTodoActions.setSelectTodo(todo));
            }}
          >
            <div className="todo-list__item__part">{todo.id}</div>
            <div className="todo-list__item__part">{todo.title}</div>
            <div className="todo-list__item__part">{todo.description}</div>
            <div className="todo-list__item__part">
              {todo.completed ? 'Completed' : 'In progress'}
            </div>
          </li>
        );
      })}
    </ul>
  );
};
