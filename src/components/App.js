import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import NewCreate from './news/NewCreate';
import NewEdit from './news/NewEdit';
import NewDelete from './news/NewDelete';
import NewShow from './news/NewShow';
import NewList from './news/NewList';
import Header from './Header';
import history from '../history';


function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={NewList}/>
            <Route path="/news/new" exact component={NewCreate}/>
            <Route path="/news/edit/:id" exact component={NewEdit}/>
            <Route path="/news/delete/:id" exact component={NewDelete}/>
            <Route path="/news/:id" exact component={NewShow}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
