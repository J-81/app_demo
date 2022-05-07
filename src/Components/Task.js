import React, { useState } from "react";

function Task(props) {
  const [id, setId] = useState(props.id);
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [blocks, setBlocks] = useState([]);

  function handleClick() {
    setId((prev) => prev + 1);
  }

  return (
    <div>
      <p>I am a task ({id})</p>
      <p> Title: {title}</p>
      <p> Description: {description}</p>
      <p> Block IDs: {blocks}</p>
      <button onClick={handleClick}> Increment ID </button>
    </div>
  );
}

export default Task;
