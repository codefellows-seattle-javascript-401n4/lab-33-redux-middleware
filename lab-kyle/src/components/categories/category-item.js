import React from 'react';

import CategoryForm from './category-form';

class CategoryItem extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="category-item">
        <h3>{this.props.category.name}</h3>
        <button onClick={()=>this.props.categoryDelete(this.props.category)}>Delete</button>
        <CategoryForm onComplete={this.props.categoryUpdate} category={this.props.category} />
      </div>
    )
  }
}
export default CategoryItem
