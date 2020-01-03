import React from 'react';

import { StaticQuery, graphql } from 'gatsby';
import BlogPost from './BlogPost';

// eslint-disable-next-line react/prop-types
const BlogPosts = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              html
              frontmatter {
                path
                title
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark: { edges: data } }) => (
      <>
        {data.map(item => (
          <BlogPost post={item.node} />
        ))}
      </>
    )}
  />
);

export default BlogPosts;
