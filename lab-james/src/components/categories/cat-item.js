import React from 'react';
import {connect} from 'react-redux';

import '../../style/components/cat.scss';

class CatItem extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className='cat-item'>
        <div className='cat-details'>
          <h3>{this.props.category.name}</h3>
          <h3>Budget: {this.props.category.Budget}</h3>
          <h3>Total Expenses: {this.props.category.expenses}</h3>
          <h3>Remaining: {this.props.category.remaining}</h3>
          <button>Update</button>
          <button>Delete</button>
          <button>+ Add Expense</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = (dispatch, getState) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CatItem);
