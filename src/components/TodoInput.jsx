import { useState } from "react";

function TodoInput({ addTask }) {
  const [state, setState] = useState({
    title: "",
    description: ""
  });
  const hanldeInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
    console.log(state);
  };
  const addItem = (e) => {
    e.preventDefault();
    addTask(state);
  };
  return (
    <form onSubmit={addItem}>
      <input
        placeholder="Title"
        type="text"
        name="title"
        value={state.title}
        onChange={hanldeInput}
      />
      <br />
      <input
        placeholder="Description"
        type="text"
        name="description"
        value={state.description}
        onChange={hanldeInput}
      />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}
export default TodoInput;
