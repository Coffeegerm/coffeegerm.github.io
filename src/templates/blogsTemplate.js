/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';

// data is injected via the graphql query below
const BlogsTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { title, date } = frontmatter;
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{title}</h1>
        <h2>{date}</h2>
        <div
          className="blog-post-content"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
};

export const blogsQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            path
            title
            date
          }
        }
      }
    }
  }
`;

export default BlogsTemplate;
