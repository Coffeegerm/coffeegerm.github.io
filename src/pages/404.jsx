import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout title="404">
    <h1>404</h1>
    <p>Somehow you ended here</p>
    <Link to="/" className="button">
      Let&apos;s go back
    </Link>
  </Layout>
);

export default NotFoundPage;
