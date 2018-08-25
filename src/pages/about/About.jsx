import React from 'react';

//styles
import '../../App.css';
import './style.css';

//coponents
import { Nav } from '../../components/Nav';

//media imprts
import Me from '../../images/self-portrait.jpg';

class About extends React.Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <div className="row">
          <div className="col">
            <div className="img__container__about">
              <img src={Me} alt="An illustration I drew of myself"/>
            </div>
          </div>
          <div className="col top__margin">
            <div className="title__text">
              Hey I'm Catie!
            </div>
            <div className="regular__text">
              Currently I live in Seattle, WA. Before this, I lived in Colorado between the mountains and Denver for about 9 years –– and before that I grew up in Maine!
              <br />
              <br />
              I'm a former graphic designer gone software engineer. I also worked in the coffee industry for 5 years, so I'm pretty passionate about connecting with people and the community around me.
              <br />
              <br />
              My favorite things to work on are frontend projects. Lately, I've been teaching myself Adobe After Effects so I can integrate some animations into my front end projects.
              <br />
              <br />
              When I'm not at work (or on my computer) I try to get outside whether it's by riding my motorcycle, camping, or doing something in the mountains. Seasons usually decide the activity for me.
              <br />
              <br />
              If you want to work with me, <a href="mailto:hello@catiecook.com" id="turquoise">email me</a>. Or visit one of my below media outlets and get in touch.
              <br />
              <br />
              <hr />
              <br />
              <section className="spread">
                <a href="https://www.linkedin.com/in/catiecook" target="blank" id="turquoise">Linkedin</a>
                <a href="https://www.instagram.com/catiecook" target="blank" id="turquoise">Instagram</a>
                <a href="https://www.instagram.com/tiny.daggers" target="blank" id="turquoise">My Other Instagram</a>
              </section>
            </div>
          </div>
        </div>
      </div>

    );
  };
}

export default About;
