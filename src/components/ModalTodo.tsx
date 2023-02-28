import React from 'react';
import { actions as modalTodoActions } from '../features/modalTodo';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { TodoCheckbox } from './TodoCheckbox';

export const ModalTodo = () => {
  const dispatch = useAppDispatch();

  const { selectTodo } = useAppSelector(state => state.modalTodo);

  return (
    <div className="modal-todo">
      <div className="modal-todo__item">
        <h1 className="modal-todo__item__title">{selectTodo?.title}</h1>
        <b className="modal-todo__item__text">Description:</b>
        <p className="modal-todo__item__text">{selectTodo?.description}</p>
        <div className="modal-todo__item__checkbox">
          Status:
          <TodoCheckbox todo={selectTodo!} />

        </div>
        <button
          className="modal-todo__item__button"
          type="button"
          onClick={() => {
            dispatch(modalTodoActions.setOpenForm(false));
          }}
        >
          Close

        </button>
      </div>
    </div>
  );
};
