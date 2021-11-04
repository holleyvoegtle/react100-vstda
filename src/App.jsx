import React, { Component } from "react";
import ToDoBox from "./ToDoBox";
import editDropdown from "./editDropdown";
import forEachTask from "./forEachTask";

// This is for the results box
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      id: 0, // unique number for each new todo
      priority: '', // drop down menu for priority
      description: "",
      // this is where the state is held
    };

    this.completeTask = this.completeTask.bind(this); // check off task
    this.editTask = this.editTask.bind(this); // edit button on task which will open the edit form
    this.deleteTask = this.deleteTask.bind(this); // trash can to remove task
    this.openEditTask = this.openEditTask.bind(this); // this form results from editTask
    this.descriptionInput = this.descriptionInput.bind(this); // description box from openEditTask form
    this.selectPriority = this.selectPriority.bind(this); // selects priority low, med, high
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  completeTask(i) { // check off and strikethrough?
    
  } 

  editTask() {}

  deleteTask() {
    let newTodoList = this.state.toDoList.slice();
    newTodoList.splice(i, 1);
    this.setState({ toDoList: newTodoList});
  }

  openEditTask() {}

  descriptionInput() {}

  selectPriority(event) {
    // need to change color here with priorty. Use a tertiary?
    this.setState({ priority: event.target.value }, () => console.log(this.state.priority, "yeahhhh"))
  }

  changeColor(priority) {
    if (priority === "1") { // green- success
      return "alert-alert-success";
    } else if (priority === "2") { // yellow- warning
      return "alert-alert-warning";
    } else if (priority === "3") { // red- danger
      return "alert-alert-danger";
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      priority: this.state.addNewTask,
    });
  }
  handleChange(event) {
    this.setState({
      description: event.target.value,
    });
    console.log(this.state.description, "it was clicked");
    //console.log(this.state.priority, "it was clicked");
  }

  render() {
    const listOfItems = this.state.toDoList.map((i) => <li>{i}</li>);
    return (
      <div className="container">
        <h1 style={{ color: "white" }}>Very Simple Todo App</h1>
        <h4 style={{ color: "white" }}>Track all of the things</h4>
        <hr />

        <div className="row justify-content-start">
          <ToDoBox handleChange={this.handleChange} priority={this.state.priority} description={this.state.description} selectPriority={this.selectPriority}/>
        </div>
      </div>
    );
  }
}

export default App;
