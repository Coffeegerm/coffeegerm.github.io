import React from 'react';
import Layout from '../components/layout';
import Meta from '../components/Meta';
import BlogPosts from '../components/BlogPosts';

const Blog = () => (
  <Layout>
    <Meta title="Blog" />

    <div id="main">
      <h1>The Coffeegerms Blog</h1>
      <p>The musings of a coffee and code loving nerd.</p>
      <BlogPosts />
    </div>
  </Layout>
);

export default Blog;
