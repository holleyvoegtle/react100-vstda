import React, { Component } from "react";
import editDropdown from "./editDropdown";


// This is for the indivdual task you see listed.
// it has:
    // 1. a check box (for completion)
    // 2. an edit button that goes into the editDropdown component
    // 3. an trash can button to remove task/todo
    // need to add color coding when priority changes

class forEachTask extends Component {
    

    completeTask(id) {
        this.props.completeTask(id);
    }

    editTask(id) {
        this.props.editTask(id); /// the color alert(changeColor) goes in here
    }

    deleteTask(id) {
        this.props.deleteTask(id);
    }

    render() {
        return (
            <div className='col-4'>
                <div className='card'>
                    <div className='card-header'>View ToDos</div>
                    <div className='card-body'>
                        <h4 className='card-title'>Welcome to Very Simple Todo App!</h4>
                    </div>
                </div>

                <div className='card-footer'>
                    
                </div>

            </div>
        );
    }


}






export default forEachTask;