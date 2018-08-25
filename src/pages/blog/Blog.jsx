import React from 'react';
import { Link } from 'react-router-dom';

//components
import { Nav } from '../../components/Nav';
import ShapeWave from '../../components/ShapeWave';

//styles
import './style.css';

import Pattern from '../../images/pattern.jpg';
import Study from '../../images/study.jpg';

class Blog extends React.Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <div className="row">
          <div className="col-2">
            <div className="sub__title space__after">
              This is my blog.
            </div>
            <div className="title__text">
              Here is where I bascially recount things I've figured out due to problems I've run into.
            </div>
          </div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col-3">
            <Link to="/blog/randomizer">
              <div className="post__title">
                Randomizer
                <br />
                <img className="small__img__container" src={Pattern} />
              </div>
            </Link>
            <div className="regular__text">
              A bash script I made to make 25 random SNS topics. However, it can be used to make other random things. Useless and useful. Depends how you look at it.
            </div>
          </div>
          <div className="col-3">
            <Link to="/blog/howigothere">
              <div className="post__title">
                How did I get here?
                <br />
                <img className="small__img__container" src={Study} />
              </div>
            </Link>
            <div className="regular__text">
              Here's the thing you guys. I'm a college dropout, sort of. If I can learn to code, so can you. Here's quick post to recount how I went from a leasurely practicing graphic designer / mostly barista, to a software engineer.
            </div>
          </div>
          <div className="col-3">
            <Link to="/blog/shape-wave">
              <div className="post__title">
                Animation: shape wave
                <br />
                <ShapeWave />
              </div>
            </Link>
            <div className="regular__text">
              This one time...I made this placeholder animation for my website with an AE plugin called Bodymovin. Great name.
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default Blog;
