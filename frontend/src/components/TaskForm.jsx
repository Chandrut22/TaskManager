import React, { useState } from "react";

const TaskForm = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim() === "") return;

    onAddTask({ title: taskTitle, completed: false });
    setTaskTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      
    </form>
  );
};

export default TaskForm;