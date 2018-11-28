import React from 'react';
import {
  BrowserRouter as Router,
  Route 
} from 'react-router-dom';
import Navigation from './Navigation';
import Signin from './SignIn';
import Home from './Home';
import * as routes from '../constants/routes';
import withAuthentication from './withAuthentication';


const App = () =>
  <Router>
    <div>
      <Navigation />
      <hr/>
      <Route exact path={routes.SIGN_IN} component={Signin} />
      <Route exact path={routes.HOME} component={Home} />
    </div>
  </Router>


export default withAuthentication(App);

