import React from 'react';
import {connect} from 'react-redux';

import ExpItem from './exp-item.js';

// import '../../style/components/exp.scss';

class ExpList extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="expense-list">
        {
          this.props.expenses[this.props.catId].map(expense => (
            <p>working</p>
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
