import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

import { useContext, useEffect } from "react";
import TasksContext from "./context/task";

function App() {
  const { getTasks } = useContext(TasksContext);
  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <div className="App">
      <TaskCreate />
      <h1>Your Tasks</h1>
      <TaskList />
    </div>
  );
}

export default App;
