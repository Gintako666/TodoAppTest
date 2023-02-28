import classNames from 'classnames';
import React, { useMemo } from 'react';
import { actions as modalTodoActions } from '../features/modalTodo';
import { actions as todosActions } from '../features/todos';
import { useAppDispatch } from '../hooks/reduxHooks';
import { Todo } from '../types/Todo';

type Props = {
  todo: Todo
};

export const TodoCheckbox: React.FC<Props> = ({ todo }) => {
  const dispatch = useAppDispatch();

  const changeableTodo = useMemo(() => ({ ...todo, completed: !todo.completed }), [todo]);

  return (
    <button
      type="button"
      className={classNames(
        'todo-check-box',
        { 'todo-check-box--completed': todo.completed },
      )}
      onClick={() => {
        dispatch(modalTodoActions.setSelectTodo(changeableTodo));
        dispatch(todosActions.editTodo(changeableTodo));
      }}
    >
    </button>
  );
};
