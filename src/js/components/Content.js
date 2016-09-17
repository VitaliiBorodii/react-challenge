import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/lib/card';

const Content = ({ body, error }) => {

  let title = '';
  if (body) {
    title = 'Success'
  } else if (error) {
    title = 'Error';
  }

  return (
    <Card>
      <CardTitle title={title} />
      <CardText>
        {body || error}
      </CardText>
    </Card>
  )
};

export default Content;


