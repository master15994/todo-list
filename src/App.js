import React from 'react';

import { useFilters, useTasks } from './hooks';

import { ButtonUI, TasksFiltersComponent } from './components';

import c from './App.module.css';

const App = () => {
  const tasks = useTasks();
  const filters = useFilters();

  return (
    <div className="app">
      <h1>Список</h1>
      {/* <AddTaskFormComponent tasks={tasks} /> */}
      <div>
        <textarea
          value={tasks.taskTitle}
          onChange={el => {
            tasks.onChangeTaskTitle(el.target.value);
          }}
          placeholder="Записать задачу"
        ></textarea>
      </div>
      <div>
        <ButtonUI onClick={tasks.onAddTask} color="success">
          {!tasks.editingTaskId ? "Добавить" : "Сохранить"}
        </ButtonUI>
      </div>
      <div>
        <h2>Списисок Задач</h2>
        <TasksFiltersComponent filters={filters} />
        {/* <TasksListComponent tasks={tasks} /> */}

        <ul>
          {filters.filterTasks(tasks.tasksList).map((task) => (
            <li key={task.id}>
              {task.title}
              <ButtonUI onClick={() => tasks.onEditTask(task)} size="small">
                Изменить
              </ButtonUI>
              <ButtonUI onClick={() => tasks.onChangeTaskStatus(task.id)} size="small" color="error">
                {task.status === 'done' ? 'Выполнено' : 'Не выполнено'}
              </ButtonUI>
              <ButtonUI size="small" color="error" onClick={() => tasks.onDeleteTask(task.id)}>
                Удалить
              </ButtonUI>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default App;
