import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../lib/renderIf.js';
import Form from '../form.js';

import {catUpdate} from '../categories/cat-actions.js';
import {expUpdate} from './exp-actions.js';


class ExpItem extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      renderUpdate: false
    }

    this.toggleUpdate = this.toggleUpdate.bind(this);
    this.expUpdate = this.expUpdate.bind(this);
  }

  toggleUpdate(){
    if(this.state.renderUpdate){
      this.setState({renderUpdate: false});
    }

    if(!this.state.renderUpdate){
      this.setState({renderUpdate: true});
    }
  }

  expUpdate(state){
    state.Amount = parseInt(state.Amount);
    state.difference = state.Amount - state.difference;

    let cat = this.props.categories.filter(category => {
      return category.id === this.props.expense.catId;
    })[0];
    cat.expenses = cat.expenses + state.difference;
    cat.remaining = cat.Budget - cat.expenses;
    this.props.handleCatUpdate(cat);

    state.difference = state.Amount;
    this.props.handleExpUpdate(state);
  }

  render(){
    return(
      <div>
      <div className="exp-item" onDoubleClick={this.toggleUpdate}>
        <a className="close-button">x</a>
        <h5>{this.props.expense.name}</h5>
        <h5>Amount: {this.props.expense.Amount}</h5>
      </div>
      {renderIf(
        this.state.renderUpdate,
        <Form toggleForm={this.toggleUpdate} type='Amount' submitAction={this.expUpdate} item={this.props.expense} action="Update" defaultNum={this.props.expense.Amount}/>
      )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleExpUpdate: exp => dispatch(expUpdate(exp)),
  handleCatUpdate: category => dispatch(catUpdate(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpItem);
