import React from 'react';
import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import { LinkContainer } from "react-router-bootstrap";

import {
  Collapse,
  Navbar,
  NavbarBrand,                       
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'


const Navigation = ({authUser}) =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>


const NavigationAuth = () => (
<Navbar>
 <LinkContainer to={routes.HOME}>
       <NavbarBrand href="/">Home</NavbarBrand>
 </LinkContainer>
 <Collapse navbar>
     <Nav>
         <LinkContainer to={routes.SIGN_IN}>
           <NavItem>
             <SignOutButton />
           </NavItem>
         </LinkContainer>
     </Nav>
 </Collapse>
</Navbar>
);
const NavigationNonAuth = () => (
  <Navbar>
 <Collapse navbar>
     <Nav>
     <NavItem>
           <LinkContainer to={routes.HOME}>
             <NavLink>Home</NavLink>
           </LinkContainer>
         </NavItem>
         <NavItem>
           <LinkContainer to={routes.SIGN_IN}>
             <NavLink>Sign in</NavLink>
           </LinkContainer>
         </NavItem>
     </Nav>
 </Collapse>
</Navbar>
);
export default Navigation;

