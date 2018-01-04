import React from 'react';
import {connect} from 'react-redux';

import ExpItem from './exp-item.js';


class ExpList extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="expense-list">
        {
          this.props.expenses[this.props.catId].map(expense => (
            <ExpItem key={expense.id} expense={expense} />
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses
});

export default connect(mapStateToProps)(ExpList);
