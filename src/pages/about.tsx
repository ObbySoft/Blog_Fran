import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/Layout";
// import Bio from "../components/About/Bio";

import { IAboutPageQuery } from "../../graphql-types";
// import BuyMeCoffee from "../components/BuyMeCoffee";
// import Patreon from "../components/Patreon";
// import PaperContainer from "../components/PaperContainer";

export interface IProps extends PageProps<IAboutPageQuery> {}

export default function AboutPage(props: IProps) {
  // const { allAuthorYaml } = props.data;
  // const franleplant = allAuthorYaml.nodes.find(
  //   (author) => author.id === "franleplant"
  // );

  return (
    <Layout location={props.location} title="About">
      {/* <PaperContainer className="space-y-5"></PaperContainer> */}
    </Layout>
  );
}

export const pageQuery = graphql`
  query AboutPage {
    site {
      siteMetadata {
        title
      }
    }
    allAuthorYaml {
      nodes {
        bio
        id
        twitter
        github
        profilepicture {
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;
