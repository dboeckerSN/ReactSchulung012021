import React, { useEffect } from "react";


const TodoItem = props => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through",
  }


  useEffect(() => {
    return () => {
      alert("Item about to be deleted");
    }
  }, [])

  const {completed, id, title} =  props.todo;
  
  return <li className="todo-item">
      <input type="checkbox"
             checked={completed}
             onChange={() => props.handleChangeProps(id)} />
             <span style={completed ? completedStyle : null}>
               {title}
            </span>
      <button onClick={() => props.deleteTodoProps(id)}>
        Delete
      </button>
    </li>
};

export default TodoItem;