import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNew } from '../../actions';

class NewShow extends Component {

  componentDidMount() {
    this.props.fetchNew(this.props.match.params.id)
  }


  render() {

    if(!this.props.new) {
      return <div>Loading...</div>
    }
    const { title, description } = this.props.new;
    return (
      <div>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return { 
    new: state.news[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { fetchNew })(NewShow);