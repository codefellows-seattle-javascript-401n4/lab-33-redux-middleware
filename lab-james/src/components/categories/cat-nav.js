import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../lib/renderIf.js';

import {catNavUpdate} from '../../app/actions.js';

import '../../style/components/cat.scss';

class CatNav extends React.Component {

  constructor(props){
    super(props);

    this.state = {};

    this.handleCatSelect = this.handleCatSelect.bind(this);
    this.handleShowAll = this.handleShowAll.bind(this);
  }

  handleCatSelect(e){
    this.setState({id: 5, value: false});
    this.props.handleCatNavUpdate(Object.assign({}, this.state));
  }

  handleShowAll(){
    this.props.categories.map(cat => (
      this.setState({id: cat.id, value: true}),
      this.props.handleCatNavUpdate(Object.assign({}, this.state))
    ))
  }

  render(){
    return(
      <div className="cat-nav">
        <p className="cat-nav-item" onClick={this.handleShowAll}>Show All</p>
        {
          this.props.categories.map(category => (
            <p key={category.id} id={category.id} onClick={this.handleCatSelect} className="cat-nav-item">{category.name}</p>
          ))
        }
      </div>
    )
  }

}

const mapStateToProps = state => ({
  categories: state
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleCatNavUpdate: target => dispatch(catNavUpdate(target))
});

export default connect(mapStateToProps, mapDispatchToProps)(CatNav);
