import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/core";
import Helmet from "react-helmet";
import { StaticQuery, graphql, withPrefix } from "gatsby";
import Footer from "~components/footer";

const Layout = ({ children, navigation, isSketch }) => (
  <>
    <Helmet>
      <link
        rel="alternate"
        type="application/rss+xml"
        title="RSS Feed"
        href={withPrefix("feed.rss")}
      />
    </Helmet>
    <div
      id="main"
      css={css`
        padding-bottom: var(--spacing);
      `}
    >
      {children}
    </div>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isIndex: PropTypes.bool,
};

export default Layout;
