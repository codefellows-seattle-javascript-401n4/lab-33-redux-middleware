import React from 'react';
import CategoryForm from '../category-form';
import {connect} from 'react-redux';
import * as category from '../../action/category-actions.js';

class CategoryItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {editing: false}

    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleUpdate(category){
    this.props.categoryUpdate(category)
    this.setState({editing: false})
  } 

  render() {
    return (
      <form className='category-item'>
        <input type="text" onChange={this.handleUpdate} />
        <button onClick={this.handleUpdate}> Update </button>
        <button onClick={this.state}> Cancel Update </button>
      </form>
    )
  }
}