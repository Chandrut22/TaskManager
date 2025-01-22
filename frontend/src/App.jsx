import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Task Manager</h1>
      <div className="w-11/12 max-w-md">
        <TaskForm onAddTask={addTask} />
        <TaskList tasks={tasks} onDeleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;
