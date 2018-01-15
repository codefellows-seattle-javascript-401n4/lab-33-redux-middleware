'use strict';

import React from 'react';
import uuid from 'uuid/v1';
class ExpenseForm extends React.Component {
  constructor(props){
    super(props);

    this.onChangeOfName = this.onChangeOfName.bind(this);
    this.onChangeOfPrice = this.onChangeOfPrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: '',
      price: '$'+ 0,
      categoryId: this.props.catId,
    };
  }

  onChangeOfName(event){
    this.setState({name: event.target.value});
  }

  onChangeOfPrice(event){
    this.setState({price: event.target.value});
  }

  onSubmit(event){
    event.preventDefault();
    let setty = {...this.state};
    setty.price = Number(setty.price);
    this.props.handleAddEx(setty);
    this.setState({name: '', price: '$'+ 0});
  }

  render(){
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <label id="expenseName"> Enter Your Expense Name </label>
          <input htmlFor="expenseName" value={this.state.name} onChange={this.onChangeOfName}/>
          <br />
          <label id="expensePrice" > Enter Your Expense Price </label>
          $<input htmlFor="expensePrice" type="number" value={this.state.price} onChange={this.onChangeOfPrice}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
