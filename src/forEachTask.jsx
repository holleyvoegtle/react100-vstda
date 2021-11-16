import React, { Component } from "react";
import EditDropdown from "./EditDropdown";

// This is for the indivdual task you see listed.


class ForEachTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editDescription: this.props.description,
      changePriority: this.props.priority,
    };

    this.strikeThrough = this.strikeThrough.bind(this);
  }

  strikeThrough(completed) {
    if (completed) {
      return "line-through";
    } else {
      return "none";
    }
  }

  render() {
    return (
      <li className={this.props.inputColor(this.props.priority)}>
        <div className="row">
          {this.props.edits === true ? (
            <EditDropdown
              editDescription={this.props.description}
              changePriority={this.props.priority}
              id={this.props.id}
              handleChange={this.props.handleChange}
              handleSubmit={this.props.handleSubmit}
              saveChanges={this.props.saveChanges}
            />
          ) : (
            <div className="row">
              <div className="col-2">
                <label className="checkbox"></label>
                <input
                  className="form-check-input position-static"
                  type="checkbox"
                  onClick={() => this.props.completeTask(this.props.id)}
                  id="check"
                />
              </div>
              <div className="col-8">
                <p
                  style={{
                    textDecoration: this.strikeThrough(this.props.completed),
                  }}>
                  {this.props.description}
                </p>
              </div>
              <div className="col-md-2">
                <span
                  className="icon-button edit-todo"
                  style={{ padding: "10px" }}
                  onClick={() => this.props.editTask(this.props.id)}>

                  <i className="fas fa-edit"></i>
                </span>

                <span
                  className="icon-button delete-todo"
                  style={{ padding: "10px" }}
                  onClick={() => this.props.deleteTask(this.props.id)}>

                  <i className="far fa-trash-alt"></i>
                </span>
              </div>
            </div>
          )}
        </div>
      </li>
    );
  }
}

export default ForEachTask;
