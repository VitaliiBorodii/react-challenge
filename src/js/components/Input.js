import React, { Component } from 'react';
import TextField from 'material-ui/lib/text-field';

const style = {
  width: '100%'
};

class Input extends Component {
  render() {
    return (
      <TextField
        style={style}
        ref="input"
        hintText="Paste url here"
      />
    )
  }
}

export default Input;

