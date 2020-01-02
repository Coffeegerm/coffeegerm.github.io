import React from 'react';

import BlogPost from './BlogPost';

const BLOGS = [];

const BlogPosts = () => {
  return (
    <div className="row">
      {BLOGS.map(item => (
        <BlogPost title="test" />
      ))}
    </div>
  );
};

export default BlogPosts;
