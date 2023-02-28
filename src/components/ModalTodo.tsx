import React from 'react';
import { actions as modalTodoActions } from '../features/modalTodo';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { TodoCheckbox } from './TodoCheckbox';

export const ModalTodo = () => {
  const dispatch = useAppDispatch();

  const { selectedTodo } = useAppSelector(state => state.modalTodo);

  return (
    <div className="modal-todo">
      <div className="modal-todo__item">
        <h1 className="modal-todo__item__title">{selectedTodo?.title}</h1>
        <b className="modal-todo__item__text">Description:</b>
        <p className="modal-todo__item__text">{selectedTodo?.description}</p>
        <div className="modal-todo__item__checkbox">
          Status:
          <TodoCheckbox todo={selectedTodo!} />

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
