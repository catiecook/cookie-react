import React from 'react';
import { Link } from 'react-router-dom';

//components
import { Nav } from '../../components/Nav';

//styles
import '../../App.css';
import './style.css';

// Media import
import Pineapple from '../../images/pineapple.jpg';

class ExplainedPost extends React.Component {
  render() {
    return (
      <div className="blog__container">
        <Nav />
        <div className="title">
          Bash script for generating random words
        </div>
        <div className="title__text">
          <p className="regular__italic">Have you ever needed to run a bunch of CLI commands at once and didn't feel like typing them over and over again? Me too.</p>
        </div>
        <div className="img__container">
          <img src={Pineapple} alt="pineapple"/>
        </div>
        <section className="caption">Random Pineapple picture by Pineapple Supply Co. via Unsplash</section>
        <div className="post__body">
          <p>
            Recently I came across an instance where I needed to create over 200 Simple Notification Service topics. That is a lot of topics. And I'm not about to click through the console 200 times just to set up my environment to proceed with my test. So, it was necessisary to make a script to generate as mayn SNS topics as I want with one click.
          </p>
          <p>
            I also saw this as a fun incentive to learn a bit more about bash, and how to create a sort of loop of CLI commands. AKA some more black magic.
          </p>
          <p>
            So, before it dissapears from my brain like a highschool student that just finished a biology exam she crammed for, I figured it would be neat to recount how I made this script.
          </p>
          <p>
            Here's the final script. Short and sweet.
            <br />
            If you're reading this an you're like: "...This can be done in one line", I know - and I realized that after I finished this one. I still think this is handy, and can be reused for other tasks pretty easily.
          </p>
          <p>
            <script src="https://gist.github.com/AirDisa/8124295.js"></script>
          </p>
        </div>
        <div className="right">
          <span className="emphesized__link title__text " type="submit">
            <Link to="/explained/">
              Back
            </Link>
          </span>
        </div>
      </div>
    );
  };
}

export default ExplainedPost;
