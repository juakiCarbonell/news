import React from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../../actions';
import { Link } from 'react-router-dom';

class NewList extends React.Component {

  componentDidMount() {
    this.props.fetchNews();
  }


  renderAdmin(newItem){
    if(newItem.userId === this.props.currentUserId){
      return (
        <div className="right floated content">
          <Link to={`/news/edit/${newItem.id}`} className="ui button primary">Edit</Link>
          <Link to={`/news/delete/${newItem.id}`} className="ui button negative">Delete</Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.news.map( newItem => {
      return (
        <div className="item" key={newItem.id}>
          {this.renderAdmin(newItem)}
          <i className="large middle aligned icon newspaper"/>
          <div className="content">
            <Link to={`/news/${newItem.id}`} className="header">{newItem.title}</Link>
          </div>
          <div className="description">
            {newItem.description}
          </div>
        </div>
      )
    })
  }

  renderCreate(){
    if (this.props.isSignedIn) {
      return(
        <div style={{ textAlign: 'right' }}>
          <Link to="/news/new" className="ui button primary">
            Create New
          </Link>
        </div>
      )
    }
      
  }


  render(){
    return(
      <div>
        <h2>News</h2>
        <div className="ui celled list">
          {this.renderList()}
        </div>
        {this.renderCreate()}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return { 
    news: Object.values(state.news),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, { fetchNews })(NewList);