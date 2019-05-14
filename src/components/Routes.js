/*import React from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './Home.js';
import CallBack from './CallBack.js';
import Auth from './auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const Routes = () => (
  <Router history={history} component={Home}>
    <div>
      <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
      <Route path="/Home" render={(props) => <Home auth={auth} {...props} />} />
      <Route path="/CallBack" render={(props) => {
        handleAuthentication(props);
        return <CallBack {...props} />
      }}/>
    </div>
  </Router>
);

export default Routes;*/