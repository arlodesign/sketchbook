/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");
const rss = require("rss");
const fs = require("fs");
const { promisify } = require("util");

const writeFile = promisify(fs.writeFile);

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~components": path.resolve(__dirname, "src/components"),
        "~images": path.resolve(__dirname, "src/images"),
        "~lib": path.resolve(__dirname, "src/lib"),
        "~util": path.resolve(__dirname, "src/util"),
      },
    },
  });
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /p5/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  return graphql(`
    {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          sketchesPerIndexPage
        }
      }
      sketches: allFile(
        sort: { fields: relativePath, order: DESC }
        filter: { ext: { eq: ".js" } }
      ) {
        edges {
          node {
            relativePath
            extension
          }
        }
      }
      images: allFile(
        filter: { relativePath: { regex: "/[0-9]{4}/" }, ext: { eq: ".png" } }
        sort: { fields: relativePath, order: DESC }
      ) {
        edges {
          node {
            relativePath
            extension
            childImageSharp {
              resize(width: 660) {
                src
              }
            }
          }
        }
      }
    }
  `).then(async result => {
    const sketches = result.data.sketches.edges;
    const images = result.data.images.edges;
    const {
      title,
      description,
      author,
      siteUrl,
      sketchesPerIndexPage,
    } = result.data.site.siteMetadata;

    // redirects
    sketches.forEach(({ node }) => {
      const sketchTitle = node.relativePath
        .replace(`.${node.extension}`, "")
        .replace(/\//g, "-");

      createRedirect({
        fromPath: `/sketch/${sketchTitle}`,
        toPath: `/sketch/${node.relativePath.replace(
          `.${node.extension}`,
          ""
        )}/`,
        isPermanent: true,
      });
    });

    if (process.env.NODE_ENV === "production") {
      // rss
      const feed = new rss({
        title,
        description,
        feed_url: `${siteUrl}/feed.rss`,
        site_url: siteUrl,
      });
      images.slice(0, 12).forEach(({ node }) => {
        const sketchTitle = node.relativePath
          .replace(`.${node.extension}`, "")
          .replace(/\//g, "-");

        feed.item({
          title: sketchTitle,
          url: `${siteUrl}/sketch/${node.relativePath.replace(
            `.${node.extension}`,
            "/"
          )}`,
          date: sketchTitle,
          enclosure: {
            url: `${siteUrl}${node.childImageSharp.resize.src}`,
            file: `./public${node.childImageSharp.resize.src}`,
          },
        });
      });
      await writeFile("./public/feed.rss", feed.xml(), "utf8");
    }
  });
};
