import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

const Button = ({ onClick }) => (
  <RaisedButton
    onClick={onClick}
    backgroundColor="#00BCD4"
    label="Send"
    primary={true}
  />
);

Button.propTypes = {
  onclick: PropTypes.func,
}

export default Button;
