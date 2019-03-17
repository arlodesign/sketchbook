import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "~components/layout";
import SEO from "~components/seo";
import IndexGrid from "~components/index-grid";
import SR from "~components/sr";
import NavButton, { NavButtonBar } from "~components/nav-button";
import sketchTitle from "~util/sketch-title";

export default ({ data, pageContext }) => {
  const sketches = data.sketches.edges;
  const images = data.images.edges;
  const { older, newer, current, total } = pageContext;

  const navigation = (
    <NavButtonBar label="indexes">
      <NavButton
        to={older !== current && `/index/${older}`}
        label={`Older Sketches, ${older} of ${total}`}
        icon="left"
      />
      <NavButton
        to={newer !== current && (newer === 1 ? "/" : `/index/${newer}`)}
        label={`Newer Sketches, ${newer} of ${total}`}
        icon="right"
      />
      <NavButton to={current !== 1 && "/"} label="Latest Sketches" icon="up" />
    </NavButtonBar>
  );

  return (
    <Layout isIndex navigation={navigation}>
      <SEO
        title="Index"
        ogImage={images[0].node.childImageSharp.og.src}
        twitterImage={images[0].node.childImageSharp.twitter.src}
      />
      <SR>
        <h2>
          Index{" "}
          <small>
            {current} of {total}
          </small>
        </h2>
      </SR>
      <IndexGrid sketches={sketches} images={images} />
    </Layout>
  );
};

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    sketches: allSitePage(
      filter: { path: { regex: "/sketch/" } }
      sort: { fields: path, order: DESC }
      limit: $limit
      skip: $skip
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
      limit: $limit
      skip: $skip
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
