import React from 'react';
import '../assets/scss/main.scss';
import PropTypes from 'prop-types';
import Header from './Header';

const Template = props => {
  const { children } = props;

  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

Template.propTypes = {
  children: PropTypes.element
};

export default Template;
