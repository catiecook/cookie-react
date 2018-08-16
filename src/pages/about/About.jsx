import React from 'react';
import RouteWithSubRoutes from '../../routes';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import '../../App.css';
import './style.css';

import Me from '../../images/self-portrait.jpg';

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
              {/* Hey I'm Catie!. */}
            </div>
            <div className="img__container__about">
              <img src={Me} />
            </div>
          </div>
          <div className="col top__margin">
            {!this.state.resumeIsHidden && <Resume />}
            <div className="title__text">
              Hey I'm Catie!
            </div>
            <div className="regular__text">
              Currently I live in Seattle, WA. Before this, I lived in Colorado between the mountains and Denver for about 9 years –– and before that I grew up in Maine!
              <br />
              <br />
              I'm a former graphic designer gone software engineer. I also worked in the coffee industry for 5 years, so I'm rpetty passionate about connecting with people and community around me.
              <br />
              <br />
              Right now, my favorite things to work on are front end projects. Lately, I've been teaching myself Adobe After Effects so I can integrate some animations into my front end projects.
              <br />
              <br />
              When I'm not at work (or on my computer) I try to get outside whether it's by riding my motorcycle, camping, or doing something in the mountains. Seasons usually decide the activity for me.
              <br />
              <br />
              If you want to work with me, <a href="/contact/" id="turquoise">email me</a>. Or visit one of my below media outlets and get in touch.
              <br />
              <br />
              <hr />
              <br />
              <section className="spread">
                <a href="https://www.linkedin.com/in/catiecook" target="blank" id="turquoise">Linkedin</a>
                <a href="https://www.instagram.com/catiecook" target="blank" id="turquoise">Instagram</a>
              </section>
            </div>
          </div>
        </div>
      </div>

    );
  };
}

export default About;
