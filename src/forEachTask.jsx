import React, { Component } from "react";
import EditDropdown from "./EditDropdown";

// This is for the indivdual task you see listed.
// it has:
// 1. a check box (for completion)
// 2. an edit button that goes into the editDropdown component
// 3. an trash can button to remove task/todo
// need to add color coding when priority changes

class ForEachTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edits: this.props.edits,
      completed: true,
      editDescription: this.props.description,
      changePriority: this.props.priority,
    };

    this.completeTask = this.completeTask.bind(this); // check off task
    this.editTask = this.editTask.bind(this); // edit button on task which will open the edit form
    this.strikeThrough = this.strikeThrough.bind(this);
  }

  // make these 3 just as onclicks in the render
  completeTask() {
    
    this.setState(
      {
        completed: !this.state.completed,
      },
      () => this.strikeThrough(this.state.completed)
    );
  }

  strikeThrough(completed) {
    if (completed) {
      return "line-through";
    } else {
      return "none";
    }
  }

  editTask(id) {
    // when clicked, will lead to the editDropDown...need if/else?
    this.setState({
      edits: !this.state.edits,
    });
  }

  render() {
    return (
      <li className={alert[this.props.toDoList.priority]}>
        <div className="row">
          {this.props.edits === true ? (
            <EditDropdown
              editDescription={this.state.editDescription}
              changePriority={this.state.changePriority}
              id={this.props.id}
              handleChange={this.props.handleChange}
              handleSubmit={this.props.handleSubmit}
            />
          ) : (
            <div className="row">
              <div className="col-2">
                <label className="checkbox"></label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={this.props.completed}
                  onClick={() => this.completeTask(this.props.id)}
                  id="check"
                  // need to define onclick in app???
                />
              </div>
              <div className="col-8">
                <p
                  style={{
                    textDecoration: this.strikeThrough(this.props.completed),
                  }}
                >
                  {this.props.text}
                </p>
              </div>
            </div>
          )}

          <div className="col-md-2">
            <button className="icon-button edit-todo">
              <span onClick={this.editTask}></span>
              <i className="fas fa-edit"></i>
            </button>

            <button className="icon-button delete-todo">
              <span onClick={this.props.deleteTask}></span>
              <i className="far fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default ForEachTask;
