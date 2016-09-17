import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';
import { getShortenUrl } from '../services/api';

class Header extends Component {

  onSubmit = (e) => {
    e.preventDefault();
    const url = this.refs.input.refs.input.getValue();
    this.props.dispatch(getShortenUrl(url));
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className='form'>
        <div  className='form-input'>
          <Input ref="input" />
        </div>
        <div  className='form-button'>
          <Button onClick={this.onSubmit} />
        </div>
      </form>
    );
  }
}

export default connect()(Header);
