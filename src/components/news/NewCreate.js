import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNew } from '../../actions';
import NewForm from './NewForm';

class NewCreate extends Component {

  onSubmit = (formValues) => {
    this.props.createNew(formValues)
  }

  render() {
    return (
      <div>
        <h3>Create a New</h3>
        <NewForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}


export default connect(null, { createNew })(NewCreate)