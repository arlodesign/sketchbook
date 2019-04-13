import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import sketchTitle from "~util/sketch-title";
import NavButton, { NavButtonBar } from "~components/nav-button";

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
        <NavButtonBar label="Sketch Navigation">
          <NavButton to={next && next.path} icon="left" />
          <NavButton to={previous && previous.path} icon="right" />
          <NavButton
            to={`/#sketch-${sketchTitle(path)}`}
            label="Back to Index"
            icon="up"
          />
        </NavButtonBar>
      );
    }}
  />
);
