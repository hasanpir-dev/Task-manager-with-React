import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TasksContext = createContext();

function Provider({ children }) {
  const INITIAL_TASKS = [];

  const [storage, setStorage] = useLocalStorage("tasks", INITIAL_TASKS);
  const [tasks, setTasks] = useState(storage);

  const [id, setId] = useState(() => {
    return tasks.length !== 0 ? tasks[tasks.length - 1].id : 0;
  });

  const getId = () => {
    setId(id + 1);
    return id;
  };

  const createTask = (title, taskDesc) => {
    const createdTasks = [
      ...tasks,
      {
        id: getId() + 1,
        title,
        taskDesc,
      },
    ];
    setStorage(createdTasks);
    setTasks(createdTasks);
  };

  const getTasks = () => {
    setTasks(storage);
  };
  const deleteTaskById = (id) => {
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setStorage(afterDeletingTasks);
    setTasks(afterDeletingTasks);
  };
  const editTaskById = (id, updatedTitle, updatedTaskDesc) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskDesc: updatedTaskDesc };
      }
      return task;
    });
    setStorage(updatedTasks);
    setTasks(updatedTasks);
  };
  const sharedValuesAndMethods = {
    tasks,
    createTask,
    getTasks,
    editTaskById,
    deleteTaskById,
  };
  return (
    <TasksContext.Provider value={sharedValuesAndMethods}>
      {children}
    </TasksContext.Provider>
  );
}

export { Provider };
export default TasksContext;
