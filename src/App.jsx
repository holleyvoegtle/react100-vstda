import React, { Component } from 'react';
import ToDoBox from './ToDoBox'

// This is for the results box
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      describeText: '',
      priority: '',
      newList: 0,
    }

    this.completeTask = this.completeTask.bind(this); // check off task
    this.editTask = this.editTask.bind(this); // edit button on task which will open the edit form
    this.deleteTask = this.deleteTask.bind(this); // trash can to remove task
    this.openEditTask = this.openEditTaks.bind(this); // this form results from editTask
    this.descriptionInput = descriptionInput.bind(this); // description box from openEditTask form
    this.changePriority = changePriority.bind(this); // changes priortiy level within openEditTask form
  }

  completeTask() {

  };

  editTask() {

  };

  deleteTask() {

  };

  openEditTask() {

  };

  descriptionInput() {

  };

  changePriority() {

  };



  render() {
    return (
      <div className='container'>

      </div>
    );
  }
}

export default App;
