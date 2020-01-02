import React from 'react';
import '../assets/scss/main.scss';

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

export default Template;
