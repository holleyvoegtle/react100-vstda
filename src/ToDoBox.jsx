import React, { Component } from "react";

// this file is for the initial box
class ToDoBox extends Component {
  
      

  render() {
    return (
      <div>

        <div className="col-4">
          <div className="card">
            <div className="card-header">Add New Todo</div>
            <div className="card-body">
              <h4 className="card-title">I want to...</h4>
              <textarea
                onChange={this.props.handleChange}
                value={this.props.description}
                placeholder="Enter description here"
                type="text"
                name='description'
              ></textarea>

              <h4 className="card-title">How much of a priority is this?</h4>
              <select onChange={this.props.selectPriority} value={this.props.priority} name='priority' id='select-priority'>
                  <option value='0'>Select a Priority</option>
                  <option value='1' >Low Priority</option>
                  <option value='2' >Mid Priority</option>
                  <option value='3' >High Priority</option>
              </select>

              <div className="card-footer">
                <div className="d-grid gap-2">
                  <button className="btn btn-primary">Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ToDoBox;
