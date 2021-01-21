import React from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import Header from "./Header";
import TodosList from "./TodosList";
import InputTodo from "./InputTodo";

class TodoContainer extends React.Component {
  state = {
    todos: [],
    show: false,
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos", {
      params: {
        _limit: 10,
      }
    })
    .then(response => this.setState({todos: response.data}));
  }
  
  handleChange = (id) => {
    this.setState(prevState => ({
        todos: prevState.todos.map(todo => {
          if(todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            }
          }
          return todo;
        }),
        show: !prevState.show,
      }

    ))
  }

  delTodo = id => {
    axios.delete("https://jsonplaceholder.typicode.com/todos/{id}")
    .then(response => {
      this.setState({
        todos: [
          ...this.state.todos.filter(todo => {
            return todo.id !== id;
          })
        ]
      })
    })
  }

  addTodo = title => {
    axios.post("https://jsonplaceholder.typicode.com/todos", {
      title: title,
      completed: false,
    })
    .then(response => {
      this.setState({
        todos: [...this.state.todos, response.data],
      })
    })
    // const newTodo = {
    //   id: uuidv4(),
    //   title: title,
    //   completed: false,
    // };
    // this.setState({
    //   todos: [...this.state.todos, newTodo],
    // })
  }

  render() {
    return (
      <div className="container">
        <Header headerSpan={this.state.show} />
        <InputTodo addTodoProps={this.addTodo} />
        <TodosList todos={this.state.todos}
                   handleChangeProps={this.handleChange}
                   deleteTodoProps={this.delTodo} />
      </div>
    )
  }
}

export default TodoContainer;