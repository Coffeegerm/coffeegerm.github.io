import React from 'react';
import '../assets/scss/main.scss';
import PropTypes from 'prop-types';
import Header from './Header';
import Meta from './Meta';

const Template = ({ children, title }) => (
  <div>
    <Meta title={title} />
    <Header />
    <div id="main">{children}</div>
  </div>
);

Template.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string.isRequired
};

export default Template;
