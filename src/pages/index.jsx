import React from 'react';
import Helmet from 'react-helmet';

import Main from '../components/Main';
import Portfolio from '../components/Portfolio';
import Employment from '../components/Employment';
import Contact from '../components/Contact';

import Layout from '../components/layout';

export default class HomeIndex extends React.PureComponent {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>David Yarzebinski</title>
          <meta name="description" content="The Coffeegerm" />
        </Helmet>

        <div id="main">
          <Main />
          <Portfolio />
          <Employment />
          <Contact />
        </div>
      </Layout>
    );
  }
}
