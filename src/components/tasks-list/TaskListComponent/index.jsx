import React from 'react';
import { ButtonUI } from '../../ui';
import t from './index.module.css';

const TaskListComponent = ({ tasks, filters }) => {
  return (
    <div>
      <ul>
        {filters.filterTasks(tasks.tasksList).map(task => (
          <li className={t.list} key={task.id}>
            {task.title}
            <div className={t.button}>
              <ButtonUI onClick={() => tasks.onEditTask(task)} size="small">
                Изменить
              </ButtonUI>
              <ButtonUI
                onClick={() => tasks.onChangeTaskStatus(task.id)}
                size="small"
                color="error"
              >
                {task.status === 'done' ? 'Выполнено' : 'Не выполнено'}
              </ButtonUI>
              <ButtonUI
                size="small"
                color="error"
                onClick={() => tasks.onDeleteTask(task.id)}
              >
                Удалить
              </ButtonUI>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskListComponent;
