import React, { Component } from 'react';
import { connect } from 'react-redux';
import Content from '../components/Content';


const Body = (props) => {
  console.log(props);
  return (
    <div className='response'>
      <Content {...props} />
    </div>
  );
};

function mapStateToProps(state) {
  return {...state.api};
}

export default connect(mapStateToProps)(Body);
