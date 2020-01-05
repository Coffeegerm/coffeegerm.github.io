import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import BlogPost from '../components/BlogPost';

const BlogIndex = props => {
  const {
    data: {
      allMarkdownRemark: { edges: posts }
    },
    location
  } = props;

  return (
    <Layout location={location} title="Blog">
      {posts.map(({ node: post }) => (
        <BlogPost post={post} />
      ))}
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;

export default BlogIndex;
