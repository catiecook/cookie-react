import React from 'react';
import RouteWithSubRoutes from '../../routes';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import '../../App.css';
import './style.css';
import {Nav} from '../../components/Nav';

// Media import
import Wave from '../../images/wave.jpg';

class Blog extends React.Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <div className="row">
          <div className="col-2">
            <div className="title">
              Blog.
            </div>
            <div className="title__text">
              Sometimes I have thoughts! And then I even write them down.
            </div>
          </div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col-4">
            <Link to="/blog/:id">
              <div className="sub__title">
                You can code. Duh.
              </div>
            </Link>
            <div className="regular__text">
              A bash script I made to make 25 random SNS topics. However, it can be used to make other random things. Useless and useful. <br />
              Depends how you look at it.
            </div>
          </div>
          <div className="col-4">
            <Link to="/blog/:id">
              <div className="sub__title">
                3 moves and 2 cars.
              </div>
            </Link>
            <div className="regular__text">
              While learning (always) React, I came across some common errors, and instad of figuring them out and moving on, I've deicded to write the errors down with their solutions. Maybe it'll be helpful to someone else.
            </div>
          </div>
          <div className="col-4">
            <Link to="/blog/:id">
              <div className="sub__title">
                Animation
              </div>
            </Link>
            <div className="regular__text">
              Here is where I bascially recount all the problems I've run in to and how I fixed it.
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default Blog;
