import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { fetchNew, deleteNew } from '../../actions';
import { connect } from 'react-redux';
import { Link }from 'react-router-dom';

class NewDelete extends React.Component {

  componentDidMount() {
    this.props.fetchNew(this.props.match.params.id)
  }

  renderActions() {
    const { id } = this.props.match.params
    return (
      <>
        <button onClick={() => this.props.deleteNew(id)} className="ui button negative">Delete</button>
        <Link to="/" className="ui button">Cancel</Link>
      </>
    )
  }

  renderContent() {
    if (!this.props.new) {
      return 'Are you sure you want to delete this new?'
    }
    return `Are you sure you want to delete the new with title: ${this.props.new.title}?`
  }

  render() {
    return (
      <Modal 
        title="Delete New"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }  
}

const mapStateToProps = (state, ownProps) => {
  return { new: state.news[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { fetchNew, deleteNew })(NewDelete);