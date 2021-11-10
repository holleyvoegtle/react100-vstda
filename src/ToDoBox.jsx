import React, { Component } from "react";

// this file is for the initial box
class ToDoBox extends Component {
  
      

  render() {
    return (
      
        <div>
        
          <div className='panel panel-default'>
            <div className='panel-heading'>Add New Todo</div>
            <div className='panel-body'>
                <div className='form-group'>
              <h4 className='panel-title'>I want to...</h4>
              <textarea
                onChange={this.props.handleChange}
                value={this.props.description}
                placeholder='Enter description here'
                type='text'
                name='description'
              ></textarea>
              </div>

              <h4 className='form-group'>How much of a priority is this?</h4>
              <select 
                onChange={this.props.selectPriority} 
                value={this.props.priority} 
                name='priority' 
                id='select-priority'>
                
                  <option value='0'>Select a Priority</option>
                  <option value='1' >Low Priority</option>
                  <option value='2' >Mid Priority</option>
                  <option value='3' >High Priority</option>
              </select>
              </div>
        </div> 

               <div className="panel-footer"> 
                
                  <button className="create-todo btn btn-success btn-black" 
                  onClick={this.props.handleSubmit}>Add</button>
                
              </div>
           
          
       
       </div>
    );
  }
}
export default ToDoBox;
