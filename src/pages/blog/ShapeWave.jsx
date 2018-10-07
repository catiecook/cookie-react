import React from 'react';
import { Link } from 'react-router-dom';
import Gist from 'react-gist';

//componets
import { Nav } from '../../components/Nav';
import ShapeWave from '../../components/ShapeWave';

//styles
import '../../App.css';
import './style.css';

// Media import
import Code from '../../images/code.jpg';

class ExplainedPost extends React.Component {
  render() {
    return (
      <div className="blog__container">
        <Nav />
        <div className="sub__title">
          Shape Wave
        </div>
        <div className="title__text">
          <p className="regular__italic">I learned about the tool Bodymovin' a while back when I was working on a final project in school. Recently, I revisited it when I was playing around in Adobe After Effects.</p>
        </div>
        <div className="animation post__body">
          <ShapeWave />
        </div>

        <div className="post__body">
          <div>
            <span className="regular__italic emph">
              What's Bodymovin?
            </span>
          </div>
          <div>
            Basically, its a plugin for After Effects that allows you to take animations, and export it is a JSON file that can be renderd in your project!
            <br />
            If you're interested, here is the <a id="turquoise" href="http://aescripts.com/bodymovin/">link</a> for that extension.
          </div>
          <div>
            This site is made with React, so I also had to install a plugin for React and Bodymovin specifically, rather than impletment it in the vanilla JS  way I previously learned. So, the first step on the coding side was to install the plugin.
          </div>
          <code className="code__snippet">
            npm install --save react-bodymovin
          </code>
          <div>
            Then, in your project create a new file named <pre>Bodymovin.js</pre> and place the following code inside. You'll notice I have a class called "Animation" in there. It's just some of my own styles for the animation and its positioning on this page, do what you would like with that part!
            <Gist id='75e9ba11974341cd373f5b2a469a113c' />
          </div>
          <div>
            This file is importing the animation that has been exported from After Effects with the Bodymovin plugin, setting some options for the animation, and then returning the component.
          </div>
          <div>
            Its really simple and fun! The harder part is figuring out how to make an animation in the first place. But I'm working on it...
          </div>
        </div>

        <div className="right">
          <span className="emphesized__link title__text" type="submit">
            <Link to="/blog/">
              Back
            </Link>
          </span>
        </div>
      </div>
    );
  };
}

export default ExplainedPost;
