import React, { useContext, useState } from "react";
import TasksContext from "../context/task";

const TaskCreate = React.memo(({ task, taskformUpdate, onUpdate }) => {
  const { createTask } = useContext(TasksContext);

  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (title === "" || task === "") {
      alert("Please enter a task");
    } else {
      if (taskformUpdate) {
        onUpdate(task.id, title, taskDesc);
      } else {
        createTask(title, taskDesc);
      }

      setTitle("");
      setTaskDesc("");
    }
  };

  return (
    <div>
      {" "}
      {taskformUpdate ? (
        <div className="task__update">
          <h3>Edit Your Task!</h3>
          <form className="task__form">
            <label className="task__label">Edit Title</label>
            <input
              value={title}
              onChange={handleChange}
              className="task__input"
            />
            <label className="task__label">Edit Task!</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task__input"
              rows={5}
            />
            <button
              className="task__button update__button"
              onClick={handleSubmit}
            >
              Edit
            </button>
          </form>
        </div>
      ) : (
        <div className="task__create">
          <h3>Add task!</h3>
          <form className="task__form">
            <label className="task__label">Title</label>
            <input
              value={title}
              onChange={handleChange}
              className="task__input"
            />
            <label className="task__label">Task!</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task__input"
              rows={5}
            />
            <button className="task__button" onClick={handleSubmit}>
              Create
            </button>
          </form>
        </div>
      )}
    </div>
  );
});

export default TaskCreate;
