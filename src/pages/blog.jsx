import React from 'react';
import Helmet from 'react-helmet';

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
          <h1>Under construction</h1>
          <p>Coming Soon</p>
        </div>
      </Layout>
    );
  }
}
