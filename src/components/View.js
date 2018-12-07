import React, { Component } from 'react';
import { Link, withRouter, } from 'react-router-dom';
import * as routes from '../constants/routes';


const ViewLink = () =>
  <p>
    <Link to={routes.VIEW}>View</Link>
  </p>



export {ViewLink};


