import React, { PropTypes } from 'react';
import {Card, CardTitle, CardText} from 'material-ui/lib/card';

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
        {body ? (
          <div>
            {body.url} => <a href={body.shorten_url} target="_blank" className="response-text">
              {body.shorten_url}
            </a>
          </div>
          ) :
          error}
      </CardText>
    </Card>
  )
};

Content.propTypes = {
  body: PropTypes.object,
  error: PropTypes.string,
}

export default Content;


