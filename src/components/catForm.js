'use strict';

import React from 'react';
import uuid from 'uuid/v1';

class CatForm extends React.Component {
  constructor(props){
    super(props);

    this.onChangeOfName = this.onChangeOfName.bind(this);
    this.onChangeOfBudget = this.onChangeOfBudget.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      categoryId: uuid(),
      name: '',
      budget: '$'+ 0,
    };
  }

  onChangeOfName(event){
    this.setState({name: event.target.value});
  }

  onChangeOfBudget(event){
    this.setState({budget: event.target.value});
  }

  onSubmit(event){
    event.preventDefault();
    console.log(this.props.handleAdd, this.setState);
    this.props.handleAdd(Object.assign({}, this.state));
    this.setState({name: '', budget: '$'+ 0, categoryId: uuid()});
  }



  render(){
    console.log(this.props.expenses);
    return(
      <div>

        <form className="catForm" onSubmit={this.onSubmit}>
          <label id="catFormName"> Enter Your Budget Category </label>
          <input htmlFor="catFormName" value={this.state.name} onChange={this.onChangeOfName}/>
          <br />
          <label id="catFormBudget"> Enter Your Budget Amount </label>
          $<input htmlFor="catFormBudget" type="number" value={this.state.budget} onChange={this.onChangeOfBudget}/>
          <button type="submit">Submit</button>
        </form>

      </div>
    );
  }
}

export default CatForm;
