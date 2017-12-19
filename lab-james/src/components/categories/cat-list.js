import React from 'react';
import {connect} from 'react-redux';

import CatItem from './cat-item.js';

class CatList extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id="catlists">
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
  categories: state
});

export default connect(mapStateToProps)(CatList);
