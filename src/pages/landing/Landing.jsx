import React from 'react';
import {Link} from 'react-router-dom';

import './style.css';
import '../../App.css';

class Landing extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="title">
          Hello.
        </div>
        <div className="title__text">
          Something will go here. <br />
          Another thing will go here.
        </div>

        <Link to="/about">
          <div className="button">Ok!</div>
        </Link>

      </div>
    );
  };
}

export default Landing;
