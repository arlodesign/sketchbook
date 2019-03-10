import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "~components/layout";
import SEO from "~components/seo";
import Sketch from "~components/sketch";
import SketchNav from "~components/sketch-nav";
import SketchTitle from "~components/sketch-title";
import sketchTitle from "~util/sketch-title";
import styles from "~components/sketch-layout.module.css";

export default ({ sketch, path, description }) => (
  <StaticQuery
    query={seoImagesQuery}
    render={data => {
      const { node } = data.allFile.edges.find(edge =>
        edge.node.relativePath.includes(
          path.replace("/sketch/", "").replace(/\/$/, "")
        )
      );

      return (
        <Layout navigation={<SketchNav path={path} />} isSketch>
          <SEO
            title={sketchTitle(path)}
            ogImage={node.childImageSharp.og.src}
            twitterImage={node.childImageSharp.twitter.src}
          />
          <div className={styles.sketchLayout}>
            <header className={styles.header}>
              <h1 className={styles.headline}>
                <SketchTitle path={path} />
              </h1>
              {description && (
                <p className={styles.description}>{description}</p>
              )}
            </header>
            <div className={styles.sketch}>
              <Sketch sketch={sketch} />
            </div>
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
