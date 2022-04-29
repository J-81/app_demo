import React, { useState } from "react";

function Form(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(title, description);
    setTitle("");
    setDescription("");
  }
  return (
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
  );
}

export default Form;
