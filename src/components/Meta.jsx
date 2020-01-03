import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const Meta = props => {
  const { title } = props;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content="The Coffeegerm" />
    </Helmet>
  );
};

Meta.propTypes = {
  title: PropTypes.string.isRequired
};

export default Meta;
