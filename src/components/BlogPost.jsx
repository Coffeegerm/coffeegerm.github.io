import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const BlogPost = ({
  post: {
    frontmatter: { title, date, description, excerpt },
    fields: { slug }
  }
}) => (
  <article key={slug}>
    <header>
      <h3>
        <Link style={{ boxShadow: `none` }} to={slug}>
          {title || slug}
        </Link>
      </h3>
      <small>{date}</small>
    </header>
    <section>
      <p
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: description || excerpt
        }}
      />
    </section>
  </article>
);

BlogPost.propTypes = {
  post: PropTypes.object
};

export default BlogPost;
