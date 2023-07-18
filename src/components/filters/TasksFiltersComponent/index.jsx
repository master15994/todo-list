import React from 'react';
import t from './index.module.css';

const TasksFiltersComponent = ({ filters }) => {
  return (
    <div className={t.wrapper}>
      <div>
        <textarea
          onChange={e => {
            filters.onChangeFilterText(e.target.value);
          }}
          placeholder="Искать задачу"
        ></textarea>
      </div>
      <div>
        <label className={t.label} htmlFor="status-select">
          Статус задачи:
        </label>
        <select
          className={t.select}
          id="status-select"
          value={filters.status}
          onChange={e => filters.onChangeFilterStatus(e.target.value)}
        >
          <option value="all">Все</option>
          <option value="done">Выполненные</option>
          <option value="notDone">Не выполненные</option>
        </select>
      </div>
    </div>
  );
};

export default TasksFiltersComponent;
