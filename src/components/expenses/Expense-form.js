import React from 'react';
import store from '../../lib/store'

class ExpenseForm extends React.Component {

  constructor(props) {

    super(props);

    this.state = this.props.expense || {name:'', price: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }
  componentWillReceiveProps(){
    let state = store();
    this.setState = {state};

  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props.handler, this.state);
    this.props.handler( Object.assign({}, this.state));
    this.setState({name: '', price: ''})      
  }

  handleChange(e) {
    this.setState({[e.target.name]:e.target.value});
  }

  render() {
    return (

      <form className="ExpenseForm" onSubmit={this.handleSubmit} >
        <input
          class='expenseInputs'
          type="text"
          name="name"
          value={this.state.name}
          placeholder="expense"
          onChange={this.handleChange}
          onBlur={this.handleSubmit}
          />
        <input
          class='expenseInputs'
          type="number"
          name="name"
          value={this.state.name}
          placeholder="price"
          onChange={this.handleChange}
          onBlur={this.handleSubmit}
          />
      </form>
    )
  }

}

export default ExpenseForm;