import React from 'react';
import './App.scss';
import { useAppSelector } from './hooks/reduxHooks';
import { AddTodoForm } from './components/AddTodoForm';
import { ModalTodo } from './components/ModalTodo';
import { TodoList } from './components/TodoList';

const App: React.FC = () => {
  const { isOpen } = useAppSelector(state => state.modalTodo);

  return (
    <div className="App">
      <div className="container">
        <AddTodoForm />
        <TodoList />
        {isOpen && <ModalTodo />}
      </div>

    </div>
  );
};

export default App;
