import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { css } from "@emotion/core";
import sketchTitle from "~util/sketch-title";
import Icon from "~components/icon";

export default ({ path }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            sketchesPerIndexPage
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
            next {
              path
            }
            previous {
              path
            }
          }
        }
      }
    `}
    render={({ site, sketches }) => {
      const sketchIndex = sketches.edges.findIndex(
        edge => edge.node.path === path
      );
      const { next, previous } = sketches.edges[sketchIndex];

      return (
        <nav
          css={css`
            white-space: nowrap;
            & > * {
              padding-left: var(--spacing);
            }
          `}
        >
          <Icon to={next && next.path} icon="left" />
          <Icon to={previous && previous.path} icon="right" />
        </nav>
      );
    }}
  />
);
