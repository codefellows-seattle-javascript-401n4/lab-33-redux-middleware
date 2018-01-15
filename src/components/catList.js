'use strict';

import React from 'react';
import CatItem from './catItem.js';
import ExpenseList from './expenseList.js';
import ExpenseForm from './expenseForm.js';
class CatList extends React.Component {
  constructor(props){
    super(props);
  }

  calculate(catId,budget){
    const filtered = this.props.expenses.filter( item => item.categoryId === catId);
    if(filtered.length){
      budget -= filtered.reduce((a,c) => {
        a += c.price;
        return a
      },0)
    }
    return budget;
  }
  render(){

    console.log('resultIwant', this.props.expenses);
    return(
      <div>
        <ul>
          {
            this.props.cats.map((category,i) =>
              <li key={category.id} category={category}>
                <h2>{category.name}</h2>
                {console.log(category.name)}
                <br />
                <label id="budgetLabel">Budget</label>
                <h4 htmlFor="budgetLabel">${this.calculate(category.id,category.budget)} </h4>
                <CatItem category={category} budget={category.budget} catId={category.id} name={category.name} handleAdd={this.props.handleAdd} handleDelete={this.props.handleDelete} handleUp={this.props.handleUp}/>
                <ExpenseForm catId={category.id} expenses={this.props.expenses} handleAddEx={this.props.handleAddEx}/>
                <ExpenseList catId={category.id} updateExpense={this.props.updateExpense} handleAddEx={this.props.handleAddEx} deleteExpense={this.props.deleteExpense} expenses={this.props.expenses.filter(item => item.categoryId === category.id)}/>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default CatList;
