import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import bindActions from 'redux';

import * as contactActions from '../actions/contactActions';
import Contact from '../pages/contact/Contact.jsx';

class ContactContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Contact contact={this.props.contact} action={this.props.actions} />
    )
  }
}

ContactMeContainer.propTypes = {
  contact: PropTypes.object,
  actions: PropTypes.object
};

const mapStateToProps = state => {
  return {
    contact: state.contact
  }
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(Object.assign(contactActions), dispatch)}
};

export default connect(mapStateToProps, mapDispatchToProps) (ContactContainer);
