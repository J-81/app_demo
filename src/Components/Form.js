import React, { useState, useContext } from "react";
import {TasksLibraryContext} from "../Helpers/Context"
import {LoginContext} from "../Helpers/Context"
import Task from "./Task.js"

function Form(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [nextTaskID, setNextTaskID] = useState(0);
  const {tasks, setTasks} = useContext(TasksLibraryContext)
  const {userName} = useContext(LoginContext)

  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function addTask(title, description) {
    const newTask = {
      id: nextTaskID,
      title: title ? title : "default Title",
      description: description ? description : "default Description",
    };
    // copy original task map
    const updatedTasksAll = new Map(tasks);
    const updateTasksUser = updatedTasksAll.get(userName) ? updatedTasksAll.get(userName) : new Array();
    updatedTasksAll.set(userName, [...updateTasksUser, newTask]);
    setTasks(updatedTasksAll);
    // Increment next task ID
    setNextTaskID((prev) => prev + 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addTask(title, description);
    setTitle("");
    setDescription("");
  }


  return (
    <>
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          Add a new task below:
        </label>
      </h2>
      <p>
        {"Title: "}
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={title}
          onChange={handleChangeTitle}
        />
      </p>
      <p>
        {"Description: "}
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={description}
          onChange={handleChangeDescription}
        />
      </p>

      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
    </>
  );
}

export default Form;
