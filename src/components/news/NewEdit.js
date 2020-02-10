import React from 'react';
import { connect } from 'react-redux';
import { fetchNew, editNew } from '../../actions';
import NewForm from './NewForm';
import _ from 'lodash';

class NewEdit extends React.Component {


  componentDidMount() {
    this.props.fetchNew(this.props.match.params.id)
  }

  onSubmit = (formValues) => {
    this.props.editNew(this.props.match.params.id, formValues)
  }


  render(){

    if(!this.props.new){
      return <div>Loading!...</div>
    }
  
  
    return (
      <div>
        <h3>Edit a New</h3>
        <NewForm 
          initialValues ={_.pick(this.props.new, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );

  }


};

const mapStateToProps = (state, ownProps) => {
    return { new: state.news[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { fetchNew, editNew })(NewEdit);