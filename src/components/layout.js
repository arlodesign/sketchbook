import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql, withPrefix } from "gatsby";
import Link from "~components/link";
import NavButton from "~components/nav-button";
import styles from "./layout.module.css";

const Layout = ({ children, navigation, isSketch }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      let layoutClasses = [styles.layout];
      if (isSketch) layoutClasses.push(styles.isSketch);

      return (
        <>
          <Helmet>
            <link
              rel="alternate"
              type="application/rss+xml"
              title="RSS Feed"
              href={withPrefix("feed.rss")}
            />
          </Helmet>
          <div className={layoutClasses.join(" ")} id="main">
            <header className={styles.header}>
              {!isSketch ? (
                <h1 className={styles.title}>{data.site.siteMetadata.title}</h1>
              ) : (
                <Link className={styles.title} to="/">
                  {data.site.siteMetadata.title}
                </Link>
              )}
            </header>
            <main className={styles.main}>{children}</main>
            <div className={styles.navigation}>{navigation}</div>
            <div className={styles.footer}>
              <NavButton href="#about" label="About this Site" icon="info" />
            </div>
          </div>
          <footer className={styles.footer}>
            <div id="about" className={styles.about}>
              <div className={styles.aboutContent}>
                <div className={styles.aboutHeadline}>
                  <h2>About</h2>
                  <NavButton
                    href="#main"
                    label="Return to Sketchbook"
                    icon="close"
                  />
                </div>
                <p>
                  This site presents semi-daily explorations of generative and
                  procedural art. The code is all available on{" "}
                  <Link href="https://github.com/arlodesign/sketchbook/">
                    GitHub
                  </Link>
                  .
                </p>
                <p>
                  <Link href="https://arlo.me/">Arlo Bryan Guthrie</Link> often
                  uses this work to produce screenprints and other printed
                  artwork. He might even start selling it some day. He’s on{" "}
                  <Link href="https://www.instagram.com/arlodesign/">
                    Instagram
                  </Link>
                  .
                </p>
              </div>
            </div>
          </footer>
        </>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isIndex: PropTypes.bool,
};

export default Layout;
