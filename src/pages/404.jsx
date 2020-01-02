import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';

import Layout from '../components/layout';

import Meta from '../components/Meta';

const NotFoundPage = () => {
  return (
    <Layout>
      <Meta title="404" />

      <div id="main">
        <h1>404</h1>
        <p>Somehow you ended here</p>
        <Link to="/" className="button">
          Let&apos;s go back
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
