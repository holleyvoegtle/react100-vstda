import React, { Component } from "react";
import ToDoBox from "./ToDoBox";
import EditDropdown from "./EditDropdown";
import ForEachTask from "./ForEachTask";

// This is for the results box
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      id: 0, // unique number for each new todo
      priority: '', // drop down menu for priority
      description: '',
      updatePriority: ''
      // this is where the state is held
    };
    
    
    this.clickDescription = this.clickDescription.bind(this); // description box from openEditTask form
    this.changePriority = this.changePriority.bind(this); // this is for the edit dropDown
    this.selectPriority = this.selectPriority.bind(this); // selects priority low, med, high
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.inputColor = this.inputColor.bind(this);
  }

  

  clickDescription() {} // this is for the editDropDown?

  changePriority() {} // this is for the editDropDown? 


  selectPriority(event) {
    // need to change color here with priorty. 
    this.setState({ priority: event.target.value }, () => console.log(this.state.priority, "yeahhhh"))
  }

  inputColor(priority) { // where does this go?

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
    let singleTodoItem = {
      id: 1 + Math.random(),
      description: this.state.description,
      priority: this.state.priority,
      completed: false,
      edits: false
    }
    
    this.state.toDoList.push(singleTodoItem);
    this.setState({
      toDoList: this.state.toDoList
    }, () =>  console.log(this.state.toDoList));
   
    
  }
  handleChange(event) { // this is the input description
    this.setState({
      description: event.target.value,
    });
    console.log(this.state.description, "it was clicked");
    //console.log(this.state.priority, "it was clicked");
  }

  render() {
    const listOfItems = this.state.toDoList.map((task) => 
    <ForEachTask 
    key={task.id} 
    text={task.description}

    />);
    return (
      <div className='container'>
        <h1 className='text-white'>Very Simple Todo App</h1>
        <h4 className='lead text white'>Track all of the things</h4>
        <hr />

        <div className='row'>
        <div className='col-sm-4'>
          <ToDoBox 
            handleChange={this.handleChange} 
            priority={this.state.priority} 
            description={this.state.description} 
            selectPriority={this.selectPriority} 
            handleSubmit={this.handleSubmit}/>
          
          
          <br></br>
          <ForEachTask 
            list={listOfItems}
            
          />
          <div className='col-md-8'>
          <div className='panel panel default'>
            <div className='panel-heading' >View Todos</div>
            <div className='panel-body no-padding'>
              <ul className='list-group no-margin'></ul>

              
              </div>
          
          
            <EditDropdown
              delete = {this.deleteTask}


              />
          </div>
          </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default App;
