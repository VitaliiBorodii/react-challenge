import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/lib/card';

const headerStyle = {
  fontWeight: 'bold',
};

const textStyle = {
  backgroundColor: '#f7f7f7',
};

const Content = ({ body, error }) => {

  let title = '';
  let color;
  if (body) {
    title = 'Success';
    color = 'green';
  } else if (error) {
    color = 'red';
    title = 'Error';
  }

  return (
    <Card>
      <CardTitle style={headerStyle} title={title} />
      <CardText style={textStyle} color={color} >
        {body || error}
      </CardText>
    </Card>
  )
};

export default Content;


