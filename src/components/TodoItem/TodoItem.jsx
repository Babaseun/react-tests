import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => this.props.updateTodo(todo.id)}
              />
            </div>
            <div className={this.style(todo.completed)}>{todo.title}</div>
            <div>
              <button
                id="button-test-id"
                className="btn btn-danger"
                onClick={() => this.props.deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
  style(completed) {
    const styleTodo = completed ? 'strike-out' : '';
    return styleTodo;
  }
}

export default TodoItem;
