import React from 'react';
import { useFilters, useTasks } from './hooks';
import {
  AddTaskFormComponent,
  TasksFiltersComponent,
  TasksListComponent,
} from './components';
import c from './App.module.css';

const App = () => {
  const tasks = useTasks();
  const filters = useFilters();

  return (
    <div className={c.app}>
      <h2>Список</h2>
      <AddTaskFormComponent tasks={tasks} />
      <h2>Список Задач</h2>
      <TasksFiltersComponent filters={filters} />
      <TasksListComponent filters={filters} tasks={tasks} />
    </div>
  );
};
export default App;
