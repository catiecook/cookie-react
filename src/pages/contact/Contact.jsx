import React from 'react';
import { Nav } from '../../components/Nav';

import './style.css';

class Contact extends React.Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <div className="title">
          Contact.
        </div>
        <p className="title__text">
          Want to chat about something?
          <br />
          Ramble below!
        </p>

        <form id="form" className="topBefore">

    		  <input id="name" type="text" placeholder="Name" />
    		  <input id="email" type="text" placeholder="Email" />
    		  <textarea id="message" type="text" placeholder="Message"></textarea>

        </form>

        <div className="emphesized__link title__text" type="submit">Send it!</div>
      </div>
    );
  };
}

export default Contact;
