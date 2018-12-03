import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';
import { DeckLink } from './Deck';





const LinkToDeck = ({ history }) =>
<div>
  <DeckLink/>
</div>



class Dashboard extends Component {
  
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}

export default withRouter(LinkToDeck);
export {Dashboard};

