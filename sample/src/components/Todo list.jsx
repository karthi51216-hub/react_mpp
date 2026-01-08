import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Add Task
  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return; // validation
    setTasks([...tasks, { id: Date.now(), text: newTask }]);
    setNewTask(""); // clear input
  };

  // Remove Task
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", fontFamily: "Arial" }}>
      <h2> Dynamic Todo List</h2>

      {/* Add Task Form */}
      <form onSubmit={addTask} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a task..."
          style={{ width: "70%", padding: "8px" }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 12px",
            marginLeft: "10px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </form>

      {/* Task List */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              marginBottom: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#f0f0f0",
              padding: "8px",
              borderRadius: "4px",
            }}
          >
            <span>{task.text}</span>
            <button
              onClick={() => removeTask(task.id)}
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;