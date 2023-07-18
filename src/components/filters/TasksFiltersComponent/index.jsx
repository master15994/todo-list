const TasksFiltersComponent = ({ filters }) => {

  return (
    <div>
      <textarea
        onChange={(e) => {
          filters.onChangeFilterText(e.target.value);
        }}
        placeholder="Искать задачу"
      ></textarea>

      <label htmlFor="status-select">Статус задачи:</label>
      <select id="status-select" value={filters.status} onChange={e => filters.onChangeFilterStatus(e.target.value)}>
        <option value="all">Все</option>
        <option value="done">Выполненные</option>
        <option value="notDone">Не выполненные</option>
      </select>
    </div>
  );
};

export default TasksFiltersComponent;
