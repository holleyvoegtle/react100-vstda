import React, { Component } from "react";


// This is for when a task is to be edited after opening.

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newEditDescription: this.props.editDescription,
      newEditPriority: this.props.changePriority,
    };
    this.handleChangeNew = this.handleChangeNew.bind(this);
  }

  handleChangeNew(event) {
    // this is the new input description
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="col-12">
        <div className="card-body">
          <h4 className="card-title">Description</h4>
          <textarea
            onChange={this.handleChangeNew}
            value={this.state.newEditDescription}
            type="text"
            name="newEditDescription"
            className="update-todo-text"
          ></textarea>

          <h4 className="card-title">Priority?</h4>
          <select
            onChange={this.handleChangeNew}
            value={this.state.newEditPriority}
            name="newEditPriority"
            id="select-priority"
            className="update-todo-priority">

            <option value="0">Select a Priority</option>
            <option value="1">Low Priority</option>
            <option value="2">Mid Priority</option>
            <option value="3">High Priority</option>
          </select>
          <div></div>
        </div>

        <div className="card-footer">
          <div className="d-grid gap-2">
            <button
              className="btn btn-primary update-todo"
              onClick={() =>
                this.props.saveChanges(
                  this.props.id,
                  this.state.newEditDescription,
                  this.state.newEditPriority
                )
              }
              >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Dropdown;
