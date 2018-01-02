import React from 'react';
import {connect} from 'react-redux';

import CatItem from './cat-item.js';

class CatList extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id='cat-list'>
        {
          this.props.categories.map(category => (
            <CatItem key={category.id} category={category} catId={this.props.catId}/>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

export default connect(mapStateToProps)(CatList);
