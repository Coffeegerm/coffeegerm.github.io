import React from 'react';

import BlogPost from './BlogPost';

const BLOGS = [];

// eslint-disable-next-line react/prop-types
const BlogPosts = () => (
  <div className="row">
    {BLOGS.map(() => (
      <BlogPost title="test" />
    ))}
  </div>
);

export default BlogPosts;
