import c from './App.module.css';
import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    setTask([...task, newTask]);
    setNewTask('');
  };

  const deleteTask = i => {
    const updatedTodos = task.filter((_, index) => index !== i);
    setTask(updatedTodos);
  };

  const searchTask = searchText =>
    task.filter(text => text.includes(searchText));

  return (
    <div className="app">
      <h1>Список</h1>
      <div>
        <textarea
          value={newTask}
          onChange={el => {
            setNewTask(el.target.value);
          }}
          placeholder="Записать задачу"
        ></textarea>
      </div>
      <div>
        <button className={c.button1} onClick={addTask}>
          Добавить пост
        </button>
      </div>
      <div>
        <h2>Списисок Задач</h2>
        <textarea
          onChange={e => {
            setTask(searchTask(e.target.value));
          }}
          placeholder="Искать задачу"
        ></textarea>
        <ul>
          {task.map((tasks, i) => (
            <li>
              {tasks}
              <button className={c.button2} onClick={() => deleteTask(i)}>
                Удалить
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
