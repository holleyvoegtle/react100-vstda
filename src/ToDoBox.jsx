import React, { Component } from 'react';

// this file is for the initial box
class ToDoBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addNewTask: [], // the input where it asks for new to do
            askPriority: '', // drop down menu for priority
            submitAdd: '' // add button 
        }
    }

}