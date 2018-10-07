import React from 'react';
import {Link} from 'react-router-dom';

import './style.css';
import '../../App.css';

class Landing extends React.Component {
  render() {
    return (
      <div className="landing__container">
        <div className="row">
          <div className="col">
            <div className="title">
              Hello!
            </div>
            <div className="title__text">
              Welcome to my website.
            </div>
            <br />
            <div className="title__text">
              I'm Catie, a human who works in software engineering and graphic design.
            </div>
            <br />
            <div className="title__text">
              It's neat you've made your way here.
              <br />
              Thanks for checking in.
            </div>
            <Link to="/about/">
              <button className="button">Click this thing</button>
            </Link>
          </div>
          <div className="col">

          </div>

        </div>
      </div>
    );
  };
}

export default Landing;
