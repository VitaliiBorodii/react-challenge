import React, { Component } from 'react';
import { connect } from 'react-redux';
import Content from '../components/Content';


const Body = (props) => {
  return (
    <div className=''>
      <Content {...props} />
    </div>
  );
};

function mapStateToProps(state) {
  return {...state.tubity};
}

export default connect(mapStateToProps)(Body);
