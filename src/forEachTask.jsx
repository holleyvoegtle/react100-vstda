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
            edits: false,
            completed: false
        };

        this.completeTask = this.completeTask.bind(this); // check off task
        this.editTask = this.editTask.bind(this); // edit button on task which will open the edit form
        this.deleteTask = this.deleteTask.bind(this); // trash can to remove task
        this.strikeThrough = this.strikeThrough.bind(this);
    }
    
// make these 3 just as onclicks in the render
    completeTask() { // how do I make this strike through?....goes in render(update the decription text style)
        this.setState({
            completed: !this.state.completed
        });
    }

    strikeThrough(completed) {
        if (completed) {
            return 'line-through';
        } else {
            'none'
        }
    }

    editTask(id) { // when clicked, will lead to the editDropDown...need if/else?
        this.setState({
            edits: !this.state.edits
        }); 
    }

    deleteTask() {
        let newTodoList = this.state.toDoList.slice();
        newTodoList.splice(i, 1);
        this.setState({ toDoList: newTodoList});
      }

    render() {
        return (
            
             <div className='col-8'>
                 <div className='card'>
                      <div className='alert-primary'>
                         {this.props.toDoList}
                         <h4 className='card-title'>{this.props.text}</h4>
                     </div> 
                 </div>

                 <div className='card-footer' id='footer'>
                    
                 </div>

            </div>
            
         );
    }


}






export default ForEachTask;