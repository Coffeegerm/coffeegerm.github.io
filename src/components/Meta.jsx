import React from 'react';

import Helmet from 'react-helmet';

const Meta = props => {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content="The Coffeegerm" />
    </Helmet>
  );
};

export default Meta;
