import c from './App.module.css';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTask(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(task));
  }, [task]);

  const addTask = () => {
    setTask([...task, { title: newTask, completed: false }]);
    setNewTask('');
  };

  const deleteTask = i => {
    const updatedTodos = task.filter((_, index) => index !== i);
    setTask(updatedTodos);
  };

  const searchTask = searchText =>
    task.filter(task => task.title.includes(searchText));

  const toggleTask = i => {
    const updateTodos = [...task];
    updateTodos[i].completed = !updateTodos[i].completed;
    setTask(updateTodos);
  };

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
              {tasks.title}
              <button onClick={() => toggleTask(i)} className={c.button2}>
                {tasks.completed ? 'Выполнено' : 'Не выполнено'}
              </button>
              <button className={c.button2} onClick={() => deleteTask(i)}>
                Удалить
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default App;
