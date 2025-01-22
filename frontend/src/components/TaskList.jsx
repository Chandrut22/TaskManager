import React, { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../api/taskApi";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    // Fetch tasks from the backend
    const fetchTasks = async () => {
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
    };

    fetchTasks();
  }, []);

  const handleAddTask = async () => {
    if (newTask.trim() === "") return;

    const createdTask = await createTask({ title: newTask, completed: false });
    setTasks([...tasks, createdTask]);
    setNewTask("");
  };

  const handleUpdateTask = async (id, completed) => {
    const updatedTask = await updateTask(id, { completed });
    setTasks(tasks.map((task) => (task._id === id ? updatedTask : task)));
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <div className="p-4">
      {/* <h1 className="text-2xl font-bold mb-4">Task Manager</h1> */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border rounded p-2 mr-2"
        />
        <button onClick={handleAddTask} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Task
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task._id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleUpdateTask(task._id, !task.completed)}
              className="mr-2"
            />
            <span className={task.completed ? "line-through" : ""}>{task.title}</span>
            <button
              onClick={() => handleDeleteTask(task._id)}
              className="ml-auto bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
