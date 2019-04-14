import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { css } from "@emotion/core";
import Layout from "~components/layout";
import SEO from "~components/seo";
import Header from "~components/header";
import Icon from "~components/icon";
import Sketch from "~components/sketch";
import SketchNav from "~components/sketch-nav";
import SketchTitle from "~components/sketch-title";
import sketchTitle from "~util/sketch-title";

export default ({ sketch, path, description }) => (
  <StaticQuery
    query={seoImagesQuery}
    render={data => {
      const image = data.allFile.edges.find(edge =>
        edge.node.relativePath.includes(
          path.replace("/sketch/", "").replace(/\/$/, "")
        )
      );

      return (
        <Layout>
          {image && (
            <SEO
              title={sketchTitle(path)}
              ogImage={image.node.childImageSharp.og.src}
              twitterImage={image.node.childImageSharp.twitter.src}
            />
          )}

          <Header>
            <Icon
              to={`/#sketch-${sketchTitle(path)}`}
              label="Back to Index"
              icon="up"
              css={css`
                order: -1;
              `}
            />
            <h1>
              <SketchTitle path={path} />
            </h1>
          </Header>

          <Sketch sketch={sketch} />

          <div
            css={css`
              display: flex;
              padding: var(--spacing);
              justify-content: space-between;
            `}
          >
            {description ? (
              <p
                css={css`
                  padding-right: var(--spacing);
                `}
              >
                {description}
              </p>
            ) : (
              <span />
            )}
            <SketchNav path={path} />
          </div>
        </Layout>
      );
    }}
  />
);

const seoImagesQuery = graphql`
  query SEOImages {
    allFile(
      filter: { relativePath: { regex: "/[0-9]{4}/" }, ext: { nin: [".js"] } }
      sort: { fields: relativePath, order: DESC }
    ) {
      edges {
        node {
          relativePath
          extension
          childImageSharp {
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
