import React from 'react';
import RouteWithSubRoutes from '../../routes';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import '../../App.css';
import './style.css';

import { Nav } from '../../components/Nav';

const Resume = () => (
  <div className="container">
    <div className="sub__title">
      Resume.
    </div>
    <div className="small__caps bold__text smaller__sub__title">
      work
    </div>
    <section className="regular__text">
      <div>
        Amazon Web Services.
      </div>
      <p className="small__italic">
        April 2017 - Current
      </p>
      <p>
        Systems Development Engineer
      </p>
      <p>
        Maintain and imporve internal systems with Automation, deployment best practices and other things I will write about here.
      </p>
      <p className="small__italic">
        Notable Projects
      </p>
      <p>
        Stuff about region build here. <br />
        Something about SNS automation project <br />
        Another thing about Console redesign project (can I list this?)
      </p>
    </section>
  </div>
);

class About extends React.Component {
  constructor () {
    super()
    this.state = {
      resumeIsHidden: true
    }
  }

  toggleResumeHidden () {
    this.setState({
      resumeIsHidden: !this.state.resumeIsHidden
    })
  }

  render() {
    return (
      <div className="container">
        <Nav />
        <div className="row">
          <div className="col">
            <div className="title">
              About Me.
            </div>
            <div className="title__text">
              Hey I'm Catie! <br />
              Right now, I live in Seattle, WA<br />
            </div>
              <section className="regular__text">
                I'm a former graphic designer gone software engineer! My favorite stuff is
                <br />
                Right now, my favorite things to work on are front end projects.
                <br />
                I've also got a few side projects going, and they pretty much all have to do with learning how to integrate animation with coding.
              </section>
              <section
                onClick={this.toggleResumeHidden.bind(this)}
                className="emphesized__link">Check out my resume.
              </section>
            </div>
            <div className="col">
              {!this.state.resumeIsHidden && <Resume />}
            </div>
        </div>
      </div>

    );
  };
}

export default About;
