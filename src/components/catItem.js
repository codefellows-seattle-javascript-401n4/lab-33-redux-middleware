'use strict';

import React from 'react';
import EditForm from './editCatForm.js';

class CatItem extends React.Component {
  constructor(props){
    super(props);

    this.editToggle = this.editToggle.bind(this);
    this.state = {
      isEditing: false,
    };
  }

  editToggle(event){
    this.setState({isEditing: !this.state.isEditing});
  }

  render(){
    return(
      <div>
        {
          this.state.isEditing ? (
            <div>
            <EditForm name={this.props.name} budget={this.props.budget} catId={this.props.catId} editToggle={this.editToggle} isEditing={this.state.isEditing} handleAdd={this.props.handleAdd} handleUp={this.props.handleUp}/>
            <button type="submit" onClick={this.editToggle}> Return </button>
            </div>
          )
        : (
          <button type="submit" onClick={this.editToggle}> Edit </button>
        )
    }
        <button onClick={() => this.props.handleDelete(this.props.catId)} type="submit">Delete</button>
      </div>
    );
  }
}

export default CatItem;
