import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import Header from "./Header";
import TodosList from "./TodosList";
import InputTodo from "./InputTodo";

const TodoContainer = props => {
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log("test run");
    axios.get("https://jsonplaceholder.typicode.com/todos", {
      params: {
        _limit: 10,
      }
    })
    .then(response => setTodos(response.data));
  }, []);
  
  const handleChange = (id) => {
    setTodos(
        todos.map(todo => {
          if(todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            }
          }
          return todo;
        }));
        setShow(!show);
  }

  const delTodo = id => {
    setTodos([
        ...todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    )
  }

  const addTodo = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo])
  }

  return (
    <div className="container">
      <Header headerSpan={show} />
      <InputTodo addTodoProps={addTodo} />
      <TodosList todos={todos}
                  handleChangeProps={handleChange}
                  deleteTodoProps={delTodo} />
    </div>
  )
}

export default TodoContainer;