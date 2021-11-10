import React, { Component } from "react";



// This is for when a task is to be edited after opening. 

// I will need:
        // edit description 
        // priority change?
        // save button

class EditDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {


        }
    }

    clickDescription(id) { ///this is from app
         this.props.clickDescription();
    }

    changePriority(id) { // same here
        this.props.changePriority();
    }

    // save button goes in render? 

    render() {
        let editStatus = this.props.editStatus;
        if (editStatus) {
            return (
                <div classname='col-4'>
                    <div className='card'>
                        <div className='card-header'>View Todos</div>
                        <div className='card-body'>
                            <h4 className='card-title'>Description</h4>
                            <textarea
                                onChange={this.props.handleChange}
                                value={this.props.clickDescription}
                                type='text'
                                name='description'
                            ></textarea>

                            <h4 className='card-title'>Priority?</h4>
                            <select onChange={this.props.handleChange} value={this.props.changePriority} name='priority' id='select-priority'>
                                <option value='0' >Select a Priority</option>
                                <option value='1' >Low Priority</option>
                                <option value='2' >Mid Priority</option>
                                <option value='3' >High Priority</option>
                            </select>

                            <div className='card-footer'>
                                <div className='d-grid gap-2'>
                                    <button className='btn btn-primary' 
                                    onClick={this.clickDescription.bind(this)} 
                                    name='update-todo'>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

        )
        } else {
            return null;
        }
        
            <div>

            </div>

        
    }

}






export default EditDropdown;