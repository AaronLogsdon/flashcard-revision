import React from 'react';
import {
  BrowserRouter as Router,
  Route 
} from 'react-router-dom';
import Navigation from './Navigation';
import Signin from './Signin';
import Home from './Home';
import * as routes from '../constants/routes';
import withAuthentication from './withAuthentication';
import Dashboard from './Dashboard';
import Test from './Test';
import Study from './Study';
import Game1 from './Game1';
import Game2 from './Game2';
import Deck from './Deck';
//import View from './View';
//import DummyDeck from './DummyDeck';



const App = () =>
  <Router>
    <div>
      <Navigation />
      <hr/>
      <Route exact path={routes.SIGN_IN} component={Signin} />
      <Route exact path={routes.HOME} component={Home} />
      <Route exact path={routes.DASHBOARD} component={Dashboard} />
      <Route exact path={routes.TEST} component={Test} />
      <Route exact path={routes.STUDY} component={Study} />
      <Route exact path={routes.GAME1} component={Game1} />
      <Route exact path={routes.GAME2} component={Game2} />
      <Route exact path={routes.DECK} component={Deck} />
      {/* <Route exact path={routes.VIEW} component={View} /> */}
      {/* <Route exact path={routes.DUMMY_DECK} component={DummyDeck} /> */}
    </div>
  </Router>


export default withAuthentication(App);
