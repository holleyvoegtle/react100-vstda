import React, { Component } from "react";
import ToDoBox from "./ToDoBox";
import EachTask from "./EachTask";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      id: 0, // unique number for each new todo
      priority: "", // drop down menu for priority
      description: "",
      updatePriority: "",
    };

    this.selectPriority = this.selectPriority.bind(this); // selects priority low, med, high
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.inputColor = this.inputColor.bind(this);
    this.deleteTask = this.deleteTask.bind(this); // trash can to remove task
    this.editTask = this.editTask.bind(this); // edit button on task which will open the edit form
    this.saveChanges = this.saveChanges.bind(this); // this saves in editDropdown
    this.completeTask = this.completeTask.bind(this); // check off task
  }

  deleteTask(id) {
    let deleteTask = this.state.toDoList.filter((singleTodoItem) => {
      if (singleTodoItem.id !== id) {
        return singleTodoItem;
      }
    });
    this.setState({
      toDoList: deleteTask,
    });
  }

  selectPriority(event) {
    this.setState({ priority: event.target.value }
    );
  }

  inputColor(priority) {
    if (priority == "1") {
      // green- success
      return "alert alert-success";
    } else if (priority == "2") {
      // yellow- warning
      return "alert alert-warning";
    } else if (priority == "3") {
      // red- danger
      return "alert alert-danger";
    }
  }

  editTask(id) {
    this.setState((prevState) => ({
      toDoList: prevState.toDoList.map((singleTodoItem) => {
        if (singleTodoItem.id == id) {
          singleTodoItem.edits = !singleTodoItem.edits;
        }
        return singleTodoItem;
      }),
    }));
  }

  completeTask(id) {
    this.setState((prevState) => ({
      toDoList: prevState.toDoList.map((singleTodoItem) => {
        if (singleTodoItem.id == id) {
          singleTodoItem.completed = !singleTodoItem.completed;
        }
        return singleTodoItem;
      }),
    }));
  }
  saveChanges(id, editDescription, changePriority) {
    this.setState((prevState) => ({
      toDoList: prevState.toDoList.map((singleTodoItem) => {
        if (singleTodoItem.id == id) {
          singleTodoItem.description = editDescription;
          singleTodoItem.priority = changePriority;
          singleTodoItem.edits = false;
        }
        return singleTodoItem;
      }),
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    let singleTodoItem = {
      id: 1 + Math.random(),
      description: this.state.description,
      priority: this.state.priority,
      completed: false,
      edits: false,
      
    };

    this.state.toDoList.push(singleTodoItem);
    this.setState(
      {
        toDoList: this.state.toDoList,
        description: '',  // these 2 return the form back to empty
        priority: ''
      },
      
    );
  }
  handleChange(event) {
    // this is the input description
    this.setState({
      description: event.target.value,
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-white">Very Simple Todo App</h1>
        <h4 className="lead text white">Track all of the things</h4>
        <hr />

        <div className="row justify-content-start">
          <div className="col-4">
            <div className="card">
              <ToDoBox
                handleChange={this.handleChange}
                priority={this.state.priority}
                description={this.state.description}
                selectPriority={this.selectPriority}
                handleSubmit={this.handleSubmit}
              />
            </div>
          </div>

          <div className="col-8">
            <div className="card">
              <div className="card-header">View Todos</div>
              {this.state.toDoList.length > 0 ? (
                <div className="card-body">
                  {this.state.toDoList.map((task) => (
                    <EachTask
                      key={task.id}
                      description={task.description}
                      completed={task.completed}
                      edits={task.edits}
                      id={task.id}
                      priority={task.priority}
                      deleteTask={this.deleteTask}
                      editTask={this.editTask}
                      handleChange={this.handleChange}
                      saveChanges={this.saveChanges}
                      inputColor={this.inputColor}
                      toDoList={this.state.toDoList}
                      completeTask={this.completeTask}
                    />
                  ))}
                </div>
              ) : (
                <div
                  className="list-group-item list-group-item-info"
                  style={{ padding: "10px" }}>

                  <h5>Welcome to a Very Simple To Do App</h5>
                  Get started by adding todo item on the left
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
