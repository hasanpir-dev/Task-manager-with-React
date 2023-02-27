import React, { useContext, useState } from "react";
import TaskCreate from "./TaskCreate";
import TasksContext from "../context/task";

const TaskShow = React.memo(({ task }) => {
  const { deleteTaskById, editTaskById } = useContext(TasksContext);

  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    deleteTaskById(task.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowEdit(false);

    editTaskById(id, updatedTitle, updatedTaskDesc);
  };

  return (
    <div className="task__show">
      {showEdit ? (
        <TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <>
          <h3 className="task-title">Your task</h3>
          <p>{task.title}</p>
          <h3 className="task-title">Do It</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button className="task__delete" onClick={handleDeleteClick}>
              Delete
            </button>
            <button className="task__edit" onClick={handleEditClick}>
              Edit
            </button>
          </div>
        </>
      )}
    </div>
  );
});

export default TaskShow;
