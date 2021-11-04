import React, { Component } from "react";



// This is for when a task is to be edited. 
// I can use the structure of toDoBox since they look similar
// I will need:
        // edit description 
        // priority change?
        // save button

class editDropdown extends Component {
    constructor(props) {
        super(props);
    }

    clickDescription() {
        this.props.clickDescription();
    }

    changePriority() {
        this.props.changePriority();
    }



    render() {
        return (
            <div>

            </div>

        );
    }

}






export default editDropdown;