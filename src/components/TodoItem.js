import React from "react";


class TodoItem extends React.Component {
  completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  componentWillUnmount() {
    alert("Item about to be deleted");
  }

  render() {
  const {completed, id, title} =  this.props.todo;
  
  return <li className="todo-item">
      <input type="checkbox"
             checked={completed}
             onChange={() => this.props.handleChangeProps(id)} />
             <span style={completed ? this.completedStyle : null}>
               {title}
            </span>
      <button onClick={() => this.props.deleteTodoProps(id)}>
        Delete
      </button>
    </li>
  }
};

export default TodoItem;