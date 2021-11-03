import React, { Component } from 'react';
import ToDoBox from './ToDoBox'

// This is for the results box
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      describeText: '',
      priority: ''
      
      
    }

    this.completeTask = this.completeTask.bind(this); // check off task 
    this.editTask = this.editTask.bind(this); // edit button on task which will open the edit form
    this.deleteTask = this.deleteTask.bind(this); // trash can to remove task
    this.openEditTask = this.openEditTask.bind(this); // this form results from editTask
    this.descriptionInput = this.descriptionInput.bind(this); // description box from openEditTask form
    this.selectPriority = this.selectPriority.bind(this); // selects priority low, med, high
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  selectPriority(event) { // need to change color here with priorty. Use a tertiary?
    this.setState({ priority: event.target.value})
  };
  handleChange(event) {
    this.setState({
        addNewTask: event.target.value
    });
}

  handleSubmit(event) {
    event.preventDefault()
    this.setState({
        askPriority: this.state.addNewTask
    });

}



  render() {
    const listOfItems = this.state.toDoList.map(i => <li>{i}</li>)
    return (
      <div className='container'>
        <h1 style={{color:'white'}}>Very Simple Todo App</h1>
          <h4 style={{color:'white'}}>Track all of the things</h4>
        <hr />
        <div style={{display:'flex', flexDirection: 'row', justifyContent: 'space-around'}}></div>

        <div className='row justify-content-start'>
          <div className='col-4'>
            <div className='card'>

              <div className='card-header'>Add New Todo</div>
              <div className='card-body'>
                <h4 className='card-title'>I want to...</h4>
                  <textarea OnChange={this.handleChange} value={this.state.addNewTask} placeholder='Enter description here' type='text'></textarea>
              <div className='card-body'>
                <h4 classname="card-title">How much of a priority is this?</h4>
              <br></br>
              <br></br>

              <ToDoBox handleChange={this.handleChange} />
              </div>
              <div className='card-footer'>
                <div className='d-grid gap-2'>
                  <button className='btn btn-primary'>Save</button>
                </div>
              </div>
              </div>

            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
