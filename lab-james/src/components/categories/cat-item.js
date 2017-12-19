import React from 'react';
import {renderIf} from '../../lib/renderIf.js';

import '../../style/components/cat.scss';

class CatItem extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        {renderIf(
          this.props.category.render,
          <div className="cat-item">
            <h3>{this.props.category.name}</h3>
            <h3>Budget: {this.props.category.budget}</h3>
          </div>
      )}
      </div>
    )
  }
}

export default CatItem;
