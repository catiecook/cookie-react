import React from 'react';
import { Link } from 'react-router-dom';

//components
import { Nav } from '../../components/Nav';

//styles
import '../../App.css';
import './style.css';

// Media import
import Lazy from '../../images/lazy.jpg';

class LazyLoading extends React.Component {
  render() {
    return (
      <div className="blog__container">
        <Nav />
        <div className="title">
          Lazy Loading
        </div>
        <div className="title__text">
          <p className="regular__italic">I realized while building  component at work that I don't really understand what lazy loading is. So I dialed it back and figured it out. Here is what I've learned</p>
        </div>
        <div className="img__container">
          <img src={Lazy} alt="pineapple"/>
        </div>
        <section className="caption">Random Pineapple picture by Ruby Schmank via Unsplash</section>
        <p className="post__body">
          Def: Lazy evaluation: aka call-by-need is an evaluation strategy that delays the evaluation of an expression until that avlue is needed. This also comes with the benefit of avoiding repeated evaluations. <br /> <br />
          So what? Basically, the runtime of functions could be cut down, the use of a smaller memory footprint, and you then gain the ability to define infinate data structures.
        </p>
        <p className="post__body">
          
        </p>
        <Link to="/explained/">
        <div className="right">
          <span className="emphesized__link title__text " type="submit">Back</span>
        </div>
        </Link>
      </div>
    );
  };
}

export default LazyLoading;
