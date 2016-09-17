import React, { PropTypes, Component } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

const Button = ({ onClick }) => (
  <RaisedButton
    onClick={onClick}
    backgroundColor="blue"
    label="Send"
    primary={true}
  />
);

export default Button;
