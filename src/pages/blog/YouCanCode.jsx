import React from 'react';
import { Link } from 'react-router-dom';

//components
import { Nav } from '../../components/Nav';

//styles
import '../../App.css';
import './style.css';

// Media import
import Code from '../../images/code.jpg';

class YouCanCode extends React.Component {
  render() {
    return (
      <div className="blog__container">
        <Nav />
        <div className="title">
          You can code.
        </div>
        <div className="title__text">
          <p className="regular__italic">Here's the thing you guys. I'm a college dropout, sort of. If I can learn to code, so can you.</p>
        </div>
        <div className="img__container">
          <img src={Code} alt="computer with code on screen" />
        </div>
        <p className="post__body">
          I figured that it may be appropriate to do a little post here about the path I have gone down to get where I am now. Hopefully someone reading this will find it interesting, or maybe motivational to try something new. Maybe you're feeling like, "Nah, Catie I'm good, I don't want to code." That's fine! I still think the idea that someone can learn something new with the right amount of motivation is a very relavent thing and we should talk about the how more often.
        </p>
        <blockquote>
          Let's be honest: diving into something new gets more and more intimidating as you get older.
        </blockquote>
        <p className="post__body">
          Okay - so rewind about three years ago. I was a freelance graphic design that was more interested in designing fun things for my friends, than I was gaining real work (sorry, guys) and thus, wasn't making much money. So, to make ends meet I became a barista. Working in the coffee industry really opened my eyes to how cool human interaction is, and I slowly started to realize that I wanted to learn how to use technology as a tool to connect and communicate. After about five years of working in coffee, I decided to go back to school - for Computer Science.
        </p>
        <p className="post__body">
          Being a graphic designer had given me a little exposure to what couldbe done with technology. But basically I had no idea what I was getting myself into. This second round of college lasted exactly a year.... I took all the coding classes available, and then when math and physics was basically all I had left (3 years worth of it o.0) I chose to just not go back. What I did learn learn was that what I wanted to do was work with full stack, and more specifically, front end development. So, I googled for half a second, found a coding bootcamp (yep), and applied.
        </p>
        <p className="post__body">
          After speeding through a JS codeacademy course, and a couple of interviews, I got in.
          <br />
          Skipping forward past the six months of late nights, early mornings, and missed social eventsd - I was now about two years out from when I decided, as non-technologically inclined person, that I would persue a full-on career in tech and I was getting a coupe of job offers right out of the gate.
          <br />
          <br />
          <strong>
            How did this happen?
          </strong>
        </p>
        <p className="post__body">
          I worked my ass off. I studied, I built shitty apps, I built some okay apps, I learned new technologies. I participated in hackathons and I went to meet ups. I really wanted it.
        </p>
        <blockquote>
          I didn't do anything special to get where I am today that someone else couldn't replicate exactly. I just kept at it.
        </blockquote>
        <p className="post__body">
          Now, just about three years out from that decision, I'm in a completely different career, working in the industry I strived for and I'm able to make my ideas come to life.
        </p>
        <Link to="/blog/:id">
        <div className="right">
          <span className="emphesized__link title__text " type="submit">Next</span>
        </div>
        </Link>
      </div>
    );
  };
}

export default YouCanCode;
