import React from 'react';
import {connect} from 'react-redux';

import CatItem from './cat-item.js';

class CatList extends React.Component {

  constructor(props){
    super(props);

    this.showProps = this.showProps.bind(this);
  }

  showProps(){
    console.log(this.props.catList);
  }

  render(){
    return(
      <div id='cat-list'>
      <button onClick={this.showProps}>test</button>
        {
          this.props.categories.map(category => (
            <CatItem key={category.id} category={category} />
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
