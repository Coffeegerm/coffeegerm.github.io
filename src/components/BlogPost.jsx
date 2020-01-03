import React from 'react';
import PropTypes from 'prop-types';

const BlogPost = props => {
  const { title } = props;
  return (
    <article className="6u 12u$(xsmall) work-item">
      <h2>
        <strong>{title}</strong>
      </h2>
    </article>
  );
};

BlogPost.propTypes = {
  title: PropTypes.string.isRequired
};

export default BlogPost;
