import React from 'react';
import Expense from '../expenses/Expense';
import CategoryForm from './Category-form';

class CategoryItem extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        submitText: 'Update',
        formState: 'inactive',
        submitState: 'hidden'
      }
    }

    render() {
      return (
        <div className="category-item">
          <header id="categoryHeader">
            <CategoryForm handler={this.props.handleUpdate} 
             category={this.props.category} 
             submitText={this.state.submitText}
             formState={this.state.formState}
             submitState={this.state.submitState}/>
            {/* <a id='deleteButton' href="#" onClick={()=>this.props.handleDelete(this.props.category.id)}>X</a> */}
          </header>
          <Expense categoryId={this.props.category.id} />
        </div>
      )
    }
}

export default CategoryItem;