import React from 'react';
import PropTypes from 'prop-types';

const BlogPost = ({
  post: {
    html,
    frontmatter: { title, date }
  }
}) => (
  <article className="6u 12u$(xsmall) work-item">
    <h3>
      <strong>
        {title} - {date}
      </strong>
    </h3>
    {html}
  </article>
);

BlogPost.propTypes = {
  post: PropTypes.object
};

export default BlogPost;
