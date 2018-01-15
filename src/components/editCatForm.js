'use strict';

import React from 'react';


class EditForm extends React.Component {
  constructor(props){
    super(props);

    this.onEditComplete = this.onEditComplete.bind(this);
    this.onEditNameChange = this.onEditNameChange.bind(this);
    this.onEditBudgetChange = this.onEditBudgetChange.bind(this);

    this.state = {
      name: this.props.name,
      id: this.props.catId,
      budget: this.props.budget,
    };
  }

  onEditNameChange(event){
    this.setState({name: event.target.value});
  }

  onEditBudgetChange(event){
    this.setState({budget: event.target.value});
  }

  onEditComplete(event){
    event.preventDefault();
    this.props.handleUp(Object.assign({}, this.state));
    this.setState({name: '', budget: ''});
  }

  render(){

    return(
      <div>
        <form onSubmit={this.onEditComplete}>
          <label id="editNameLabel"> Edit Your Category Name </label>
          <input htmlFor="editNameLabel" value={this.state.name} onChange={this.onEditNameChange}/>
          <br />
          <label id="editBudgetLabel"> Edit Your Budget Amount </label>
          <input value={this.state.budget} onChange={this.onEditBudgetChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default EditForm;
