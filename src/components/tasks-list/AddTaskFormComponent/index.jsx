import React from 'react';
import { ButtonUI } from '../../ui';
const AddTaskFormComponent = ({ tasks }) => {
  return (
    <div>
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
          {!tasks.editingTaskId ? 'Добавить' : 'Сохранить'}
        </ButtonUI>
      </div>
    </div>
  );
};

export default AddTaskFormComponent;
