import React from 'react';
import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';


const Navigation = ({authUser}) =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>


const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={routes.HOME}>Home</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);
const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={routes.HOME}>Home</Link>
    </li>
    <li>
    <Link to={routes.SIGN_IN}>Sign in</Link>
    </li>
  </ul>
);
export default Navigation;