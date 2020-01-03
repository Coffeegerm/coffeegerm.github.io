import React from 'react';
import PropTypes from 'prop-types';

const BlogPost = props => {
  const { post } = props;
  const { html, frontmatter } = post;
  const { title, date } = frontmatter;
  return (
    <article className="6u 12u$(xsmall) work-item">
      {console.log(post)}
      <h3>
        <strong>
          {title} - {date}
        </strong>
      </h3>
      {html}
    </article>
  );
};

BlogPost.propTypes = {
  post: PropTypes.object
};

export default BlogPost;
