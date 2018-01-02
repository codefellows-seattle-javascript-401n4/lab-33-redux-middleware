import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../lib/renderIf.js';
import Form from '../form.js';

import {catUpdate} from './cat-actions.js';
import {catDelete} from './cat-actions.js';

import '../../style/components/cat.scss';

class CatItem extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      renderUpdate: false
    }

    this.toggleUpdate = this.toggleUpdate.bind(this);
    this.catUpdate = this.catUpdate.bind(this);
    this.delete = this.delete.bind(this);
  }

  toggleUpdate(){
    if(this.state.renderUpdate){
      this.setState({renderUpdate: false});
    }

    if(!this.state.renderUpdate){
      this.setState({renderUpdate: true});
    }
  }

  catUpdate(state){
    state.Budget = parseInt(state.Budget);
    state.remaining = state.Budget - state.expenses;
    this.props.handleCatUpdate(state);
    this.toggleUpdate();
  }

  delete(){
    this.props.handleCatDelete(this.props.category.id);
  }

  render(){
    return (
      <div>
        {renderIf(
          !this.props.catId,
          <div className='cat-item'>
            <div className='cat-details'>
              <h3>{this.props.category.name}</h3>
              <h3>Budget: {this.props.category.Budget}</h3>
              <h3>Total Expenses: {this.props.category.expenses}</h3>
              <h3>Remaining: {this.props.category.remaining}</h3>
              <button onClick={this.toggleUpdate}>Update</button>
              <button onClick={this.delete}>Delete</button>
              <button>+ Add Expense</button>
            </div>
          </div>
        )}
        {renderIf(
          this.props.catId === this.props.category.id,
          <div className='cat-item'>
            <div className='cat-details'>
              <h3>{this.props.category.name}</h3>
              <h3>Budget: {this.props.category.Budget}</h3>
              <h3>Total Expenses: {this.props.category.expenses}</h3>
              <h3>Remaining: {this.props.category.remaining}</h3>
              <button onClick={this.toggleUpdate}>Update</button>
              <button onClick={this.delete}>Delete</button>
              <button>+ Add Expense</button>
            </div>
          </div>
        )}
        {renderIf(
          this.state.renderUpdate,
          <Form toggleForm={this.toggleUpdate} type='Budget' submitAction={this.catUpdate} category={this.props.category}/>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleCatUpdate: category => dispatch(catUpdate(category)),
  handleCatDelete: categoryId => dispatch(catDelete(categoryId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CatItem);
