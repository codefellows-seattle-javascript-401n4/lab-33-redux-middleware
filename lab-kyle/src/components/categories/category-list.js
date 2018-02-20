import React from 'react';

import {connect} from 'react-redux';

import CategoryItem from './category-item';

class CategoryList extends React.Component {
  render(){
    return (
      <div>
        {
          this.props.cats.map((category,i) =>
            <CategoryItem categoryDelete={this.props.categoryDelete} categoryUpdate={this.props.categoryUpdate} key={category.id} category={category} />
          )
        }
      </div>
    )
  }
}
export default CategoryList
