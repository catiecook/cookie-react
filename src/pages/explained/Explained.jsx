import React from 'react';
import { Link } from 'react-router-dom';

//components
import { Nav } from '../../components/Nav';

//styles
import './style.css';

class Explained extends React.Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <div className="row">
          <div className="col-2">
            <div className="title">
              Figured it out.
            </div>
            <div className="title__text">
              Here is where I bascially recount all the problems I've run into and how I fixed it.
            </div>
          </div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col-3">
            <Link to="/explained/post/randomizer">
              <div className="sub__title">
                Randomizer
              </div>
            </Link>
            <div className="regular__text">
              A bash script I made to make 25 random SNS topics. However, it can be used to make other random things. Useless and useful. <br />
              Depends how you look at it.
            </div>
          </div>
          <div className="col-3">
            <Link to="/explained/post/:id">
              <div className="sub__title">
                Common React Errors
              </div>
            </Link>
            <div className="regular__text">
              While learning (always) React, I came across some common errors, and instad of figuring them out and moving on, I've deicded to write the errors down with their solutions. Maybe it'll be helpful to someone else.
            </div>
          </div>
          <div className="col-3">
            <Link to="/explained/post/:id">
              <div className="sub__title">
                Explained.
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

export default Explained;
