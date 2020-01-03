import React from 'react';
import Layout from '../components/layout';
import BlogPosts from '../components/BlogPosts';

const Blog = () => (
  <Layout title="Blog">
    <h1>The Coffeegerms Blog</h1>
    <p>The musings of a coffee and code loving nerd.</p>
    <BlogPosts />
  </Layout>
);

export default Blog;
