import React from 'react';

import {connect} from 'react-redux';

import CategoryForm from './category-form';
import CategoryList from './category-list';
import CategoryItem from './category-item';
import ExpenseForm from '../expense/expense-form';
import ExpenseItem from '../expense/expense-item';

import {categoryCreate, categoryUpdate, categoryDelete} from '../../app/actions';

class Categories extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidUpdate(){
    console.log('__CATEGORIES__', this.props.categories);
    console.log('__EXPENSES__', this.props.expenses);
  }

  componentWillMount(){
    this.props.categoryCreate({
      name: 'Budget 1',
      budget: 2000,
    });
    this.props.categoryCreate({
      name: 'Budget 2',
      budget: 3000,
    })
  }

  render(){
    return (
      <div id="board">
        <CategoryForm onComplete={this.props.categoryCreate} />
        <div>
          {this.props.categories.map((category,i) =>
            <div key={category.id}>
              <CategoryItem category={category} categoryDelete={this.props.categoryDelete} categoryUpdate={this.props.categoryUpdate} />
              <ExpenseForm categoryId={category.id} expenses={this.props.expenses} onComplete={this.props.expenseCreate} expenseDelete={this.props.expenseDelete} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories || [],
  expenses: state.expenses || {},
});

const mapDispatchToProps = (dispatch, getState) => ({
  categoryCreate: category => dispatch(categoryCreate(category)),
  categoryUpdate: category => dispatch(categoryUpdate(category)),
  categoryDelete: category => dispatch(categoryDelete(category)),
  expenseCreate: expense => dispatch(expenseCreate(expense)),
  expenseDelete: expense => dispatch(expenseDelete(expense)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
