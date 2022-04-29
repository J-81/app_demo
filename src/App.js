import agavi from "./agavi.png";
import React, { useState } from "react";
import "./App.css";
import Task from "./task";
import Form from "./Form";

function App() {
  const defaultTitle = "No Title Given!";
  const defaultDescription = "No Description Given!";
  const [tasks, setTasks] = useState([]);
  const [nextTaskID, setNextTaskID] = useState(0);
  const [tasksVisible, setTasksVisible] = useState(true);

  const taskList = tasks.map((task) => (
    <Task id={task.id} title={task.title} description={task.description} />
  ));

  function addTask(title, description) {
    const newTask = {
      id: nextTaskID,
      title: title ? title : defaultTitle,
      description: description ? description : defaultDescription,
    };
    setTasks([...tasks, newTask]);
    // Increment next task ID
    setNextTaskID((prev) => prev + 1);
  }

  const toggleTasksVisible = () => setTasksVisible((prev) => !prev);

  return (
    <div className="App">
      <header className="App-header">
        <img src={agavi} className="App-logo" alt="logo" />
        <p>Task list (# of tasks: {taskList.length}):</p>
        <p>{tasksVisible && taskList}</p>
        <p>
          <Form addTask={addTask} />
          <button onClick={toggleTasksVisible}>Hide Tasks</button>
        </p>
      </header>
    </div>
  );
}

export default App;
