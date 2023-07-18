import { useEffect, useState } from "react";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');
  const [changingTaskId, setChangingTaskId] = useState(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');

    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const handleAddTask = () => {
    // Проверка, если changingTaskId не null тогда мы по id находим таск и меняем в нем текст, в противном случае мы добавляем новый таск
    if (changingTaskId) {
      setTasks((prev) =>
        prev.map((task) =>
          task.id === changingTaskId ? { ...task, title: taskTitle } : task
        )
      );
      setChangingTaskId(null);
    } else {
      setTasks([...tasks, { id: Date.now(), title: taskTitle, status: "notDone" }]);
    }

    setTaskTitle('');
  };

  const handleDeleteTask = (id) =>
    setTasks((prev) => prev.filter((task) => task.id !== id));

  const handleChangeTaskStatus = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, status: task.status === "done" ? "notDone" : "done" }
          : task
      )
    );
  };

  const handleEditTask = (task) => {
    setChangingTaskId(task.id);
    setTaskTitle(task.title);
  };

  return {
    tasksList: tasks,
    onChangeTasks: setTasks,
    onAddTask: handleAddTask,
    onDeleteTask: handleDeleteTask,
    onChangeTaskStatus: handleChangeTaskStatus,
    onEditTask: handleEditTask,
    editingTaskId: changingTaskId,
    onChangeTaskTitle: setTaskTitle,
    taskTitle,
  }
};

export default useTasks;
