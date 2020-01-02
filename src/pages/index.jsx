import React from 'react';
import Helmet from 'react-helmet';

import Main from '../components/Main';
import Portfolio from '../components/Portfolio';
import Employment from '../components/Employment';
import Contact from '../components/Contact';

import Layout from '../components/layout';

import Meta from '../components/Meta';

const HomeIndex = () => {
  return (
    <Layout>
      <Meta title="David Yarzebinski" />

      <div id="main">
        <Main />
        <Portfolio />
        <Employment />
        <Contact />
      </div>
    </Layout>
  );
};

export default HomeIndex;
