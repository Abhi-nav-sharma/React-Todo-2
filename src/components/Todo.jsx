import { useState } from "react";
import TodoInput from "./TodoInput";
import { v4 as uuid } from "uuid";
import TodoItem from "./TodoItem";
import "./Todo.css";
import ShowCompletedBtn from "./ShowCompletedBtn";
function Todo() {
  const [tasks, setTasks] = useState([]);
  const [showCompleted, setShowCompleted] = useState(true);
  const handleAdd = ({ title, description }) => {
    const payload = {
      id: uuid(),
      title,
      description,
      status: false
    };
    setTasks([...tasks, payload]);
    console.log(tasks);
  };
  function handleToggle(id) {
    const updatedTasks = tasks.map((item) => {
      if (id === item.id) {
        item.status = !item.status;
        return item;
      } else {
        return item;
      }
    });
    setTasks(updatedTasks);
  }
  function handleDelete(id) {
    setTasks(tasks.filter((item) => item.id !== id));
  }
  console.log(tasks);
  return (
    <>
      <h1>Todo App</h1>
      <TodoInput addTask={handleAdd} />
      <ShowCompletedBtn
        show={showCompleted}
        onClick={() => setShowCompleted(!showCompleted)}
      />
      {tasks
        .filter((item) => (showCompleted ? true : !item.status))
        .map((item) => {
          return (
            <TodoItem
              className="item"
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              status={item.status}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
            />
          );
        })}
    </>
  );
}

export default Todo;
