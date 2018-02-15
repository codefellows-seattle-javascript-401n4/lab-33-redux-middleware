import './_category-form.scss';
import React from 'react';
import uuid from 'uuid';

let emptyState  = {
  name: '',
  budget: ''
}

class CategoryForm extends React.Component {
  constructor(props){
    super(props)
    this.state = this.props.category || emptyState//should I do this.props.category state here, if we are supposed to be using a category item to show the state?

    this.handleCategorySubmit = this.handleCategorySubmit.bind(this)
    this.handleCategoryNameChange = this.handleCategoryNameChange.bind(this)
    this.handleCategoryBudgetChange = this.handleCategoryBudgetChange.bind(this)
  }

  handleCategorySubmit(e){
    e.preventDefault()
    this.props.onComplete(this.state)
    this.setState(emptyState)
  }

  handleCategoryNameChange(e){
    let {value} = e.target
    this.setState({name: value})
  }

  handleCategoryBudgetChange(e){
    let {value} = e.target
    this.setState({budget: value})
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.category)
      this.setState(nextProps.category)
  }

  render() {
    let buttonText = this.props.category ? 'Update Category': 'Create Category'

    return (
      <form onSubmit={this.handleCategorySubmit} className='category-form'>

        <input
          type='text'
          name='name'
          placeholder='name'
          value={this.state.name}
          onChange={this.handleCategoryNameChange}
          />

        <input
          type='number'
          name='budget'
          placeholder='budget'
          value={this.state.budget}
          onChange={this.handleCategoryBudgetChange}
          /> 

        <button type='submit'> {buttonText} </button>

      </form>
    )
  }
}

export default CategoryForm