import React from 'react';
import {connect} from 'react-redux';

import '../../style/components/exp.scss';

class ExpItem extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="exp-item">
        <a className="close-button">x</a>
        <h5>{this.props.expense.name}</h5>
        <h5>Amount: {this.props.expense.Amount}</h5>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch, getState) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ExpItem);
