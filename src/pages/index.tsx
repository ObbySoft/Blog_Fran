import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import LatestPost from "../components/LatestPost";

import { IBlogIndexQuery } from "../../graphql-types";
import PostCard from "../components/PostCard";

export interface IProps extends PageProps<IBlogIndexQuery> {}

export default function BlogIndex(props: IProps) {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={props.location} title={siteTitle}>
      <div className="space-y-3 p-3 !pt-0 sm:!pt-5 lg:p-20">
        <SEO title="Randomleplants" />
        {/* hidden */}
        <div className="hidden">
          <p className="sm:w-3/4 pl-2 mx-auto font-mono text-xl text-secondary">
            Latest:
          </p>
          <div className="sm:w-5/6 bg-latestPostContainerBg mx-auto flex flex-col lg:flex-row px-3 py-6 lg:space-x-2 space-y-5 lg:space-y-0 rounded-lg shadow-md mt-4">
            {posts.slice(0, 3).map(({ node }) => {
              const slug = node.fields.slug;
              const title = node.frontmatter.title || slug;
              const content = node.frontmatter.description || node.excerpt;
              const tags = node.frontmatter.tags;

              return (
                <LatestPost
                  key={slug}
                  slug={slug}
                  title={title}
                  content={content}
                  date={node.frontmatter.date}
                  readingTime={node.fields.readingTime.text}
                  authorId={node.frontmatter.author.id}
                  tags={tags}
                />
              );
            })}
          </div>
          <p className="sm:w-3/4 pl-2 !mt-10 sm:!mt-14 !mb-4 mx-auto font-mono text-xl text-secondary">
            All Posts:
          </p>
        </div>

        {/* main */}
        <div className="flex flex-col items-center max-w-screen-xl mx-auto space-y-2">
          {posts.map(({ node }) => {
            const slug = node.fields.slug;
            const title = node.frontmatter.title || slug;
            const content = node.frontmatter.description || node.excerpt;
            const tags = node.frontmatter.tags;

            return (
              <PostCard
                key={slug}
                slug={slug}
                title={title}
                content={content}
                date={node.frontmatter.date}
                readingTime={node.fields.readingTime.text}
                authorId={node.frontmatter.author.id}
                tags={tags}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogIndex {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
            author {
              id
            }
          }
        }
      }
    }
    allAuthorYaml {
      nodes {
        bio
        id
        twitter
        github
      }
    }
  }
`;
