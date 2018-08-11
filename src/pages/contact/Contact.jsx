import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Nav } from '../../components/Nav';
import { renderField } from './renderField';

import './style.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.handleContact = this.handleContact.bind(this);
  }

  handleContact(data) {
    this.props.action.sendMail(data);
  }

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

        <form id="form" className="topBefore" onSubmit={ this.handleContact }>
          <Field name="fullName" component={ renderField } label="Your Name"/>
          <Field name="email" component={ renderField } label="Your Email"/>
          <Field name="subject" component={ renderField } label="Subject"/>
          <Field name="message" component={ renderField } label="Your Message" multiLine={ true } />
    		  {/* <input id="name" type="text" placeholder="Name" />
    		  <input id="email" type="text" placeholder="Email" />
    		  <textarea id="message" type="text" placeholder="Message"></textarea> */}

        </form>

        <div className="emphesized__link title__text" type="submit">
          Send it!
        </div>
      </div>
    );
  };
}

export default reduxForm({
  form: 'contactForm',  // a unique identifier for this form
})(Contact);
