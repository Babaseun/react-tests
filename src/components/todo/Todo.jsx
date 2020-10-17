import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import axios from 'axios';
import './Todo.css';

class Todo extends Component {
  state = {
    todos: [],
    todo: '',
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((res) => this.setState({ todos: [...res.data] }));
  }
  updateTodo = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  addTodo = () => {
    const newTodo = {
      title: this.state.todo,
      completed: false,
    };
    axios
      .post('https://jsonplaceholder.typicode.com/todos', newTodo)
      .then((res) => this.setState({ todos: [res.data, ...this.state.todos] }));

    this.setState({ todo: '' });
  };
  changeTodo = (e) => {
    this.setState({ todo: e.target.value });
  };
  deleteTodo = (id) => {
    var remain = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: remain });
  };
  render() {
    return (
      <div className="todo-card">
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            onChange={this.changeTodo}
          />
          <button className="btn btn-danger" onClick={this.addTodo}>
            +
          </button>
        </div>
        <TodoItem
          todos={this.state.todos}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default Todo;
