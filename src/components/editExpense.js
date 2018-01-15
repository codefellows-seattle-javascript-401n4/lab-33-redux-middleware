'use strict';


import React from 'react';


class EditExpense extends React.Component {
  constructor(props){
    super(props);

    this.onChangeOfName = this.onChangeOfName.bind(this);
    this.onChangeOfPrice = this.onChangeOfPrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      ...props.expense
    }
  }
  onChangeOfName(event){
    this.setState({name: event.target.value});
  }

  onChangeOfPrice(event){
    this.setState({price: event.target.value});
  }

  onSubmit(event){
    event.preventDefault();
    console.log(this.state);
    this.props.updateExpense(Object.assign({},this.state));
    this.setState({name: '', price: ''})
  }
  render(){
    console.log(this.props.name);
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <label className="expenseEditName"> Edit Your Expense </label>
          <input value={this.state.name} onChange={this.onChangeOfName}/>
          <br />
          <label className="expenseEditPrice"> Edit Your Price </label>
          <input value={this.state.price} onChange={this.onChangeOfPrice} />
          <button type="submit"> Submit </button>
        </form>
      </div>
    );
  }
}

export default EditExpense;
