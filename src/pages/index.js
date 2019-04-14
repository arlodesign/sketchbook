import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { css } from "@emotion/core";
import Layout from "~components/layout";
import SEO from "~components/seo";
import Header from "~components/header";
import Link from "~components/link";
import Grid from "~components/grid";
import SR from "~components/sr";
import sketchTitle from "~util/sketch-title";

export default ({ data, pageContext }) => {
  const sketches = data.sketches.edges;
  const images = data.images.edges;
  const { older, newer, current, total } = pageContext;

  return (
    <Layout>
      <SEO
        title={`Index`}
        ogImage={images[0].node.childImageSharp.og.src}
        twitterImage={images[0].node.childImageSharp.twitter.src}
      />

      <Header>
        <h1>
          <Link href="#main">{data.site.siteMetadata.title}</Link>
        </h1>
      </Header>

      <SR>
        <h2>Index</h2>
      </SR>
      <Grid sketches={sketches} images={images} />
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    sketches: allSitePage(
      filter: { path: { regex: "/sketch/" } }
      sort: { fields: path, order: DESC }
    ) {
      edges {
        node {
          path
        }
      }
    }
    images: allFile(
      filter: { relativePath: { regex: "/[0-9]{4}/" }, ext: { nin: [".js"] } }
      sort: { fields: relativePath, order: DESC }
    ) {
      edges {
        node {
          relativePath
          extension
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
            twitter: resize(width: 1024) {
              src
            }
            og: resize(width: 1200, height: 630, cropFocus: CENTER) {
              src
            }
          }
        }
      }
    }
  }
`;
