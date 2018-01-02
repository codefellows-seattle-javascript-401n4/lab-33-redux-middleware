import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../lib/renderIf.js';
import Form from '../form.js';

import '../../style/components/cat.scss';

class CatItem extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      renderUpdate: false
    }

    this.toggleUpdate = this.toggleUpdate.bind(this);
    this.catUpdate = this.catUpdate.bind(this);
  }

  toggleUpdate(){
    if(this.state.renderUpdate){
      this.setState({renderUpdate: false});
      console.log(this.state);
    }

    if(!this.state.renderUpdate){
      this.setState({renderUpdate: true});
      console.log(this.state);
    }
  }

  catUpdate(){
    console.log('updatey stuff');
    this.toggleUpdate();
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
              <button>Delete</button>
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
              <button>Delete</button>
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

});

export default connect(mapStateToProps, mapDispatchToProps)(CatItem);
