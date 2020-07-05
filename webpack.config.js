const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackInlineSVGPlugin = require("html-webpack-inline-svg-plugin");

const sketches = require("./lib/getSketches");
const latestSketch = sketches[sketches.length - 1];

let entry = sketches.reduce(
  (acc, sketch) => Object.assign(acc, { [sketch.title]: sketch.entry }),
  {}
);
entry.index = resolve(__dirname, "src/index.js");
entry.indexStyles = resolve(__dirname, "src/styles/index.css");
entry.sketchStyles = resolve(__dirname, "src/styles/sketch.css");

module.exports = (env, { mode }) => {
  const PRODUCTION = mode === "production";

  const domain = PRODUCTION
    ? "https://sketchbook.arlo.me"
    : "http://localhost:8080";

  let plugins = sketches.map(
    (sketch, i) =>
      new HtmlWebpackPlugin({
        inject: true,
        chunks: [sketch.title, "sketchStyles"],
        filename: sketch.url + "index.html",
        template: "src/templates/sketch.ejs",
        title: sketch.title,
        templateParameters: {
          siteName: "sketchbook.arlo.me",
          sketch,
          prevSketch: sketches[i - 1] || false,
          nextSketch: sketches[i + 1] || false,
          domain,
        },
      })
  );
  plugins = plugins.concat([
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ["index", "indexStyles"],
      filename: "index.html",
      template: "src/templates/index.ejs",
      templateParameters: {
        siteName: "sketchbook.arlo.me",
        sketches: sketches.reverse(),
        latestSketch,
        domain,
      },
    }),
    new FaviconsWebpackPlugin(resolve(__dirname, "src", latestSketch.image)),
    new ImageminPlugin({
      disable: !PRODUCTION,
      cacheFolder: resolve(__dirname, ".cache"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new HtmlWebpackInlineSVGPlugin({
      runPreEmit: true,
    }),
  ]);

  let pngRule = [
    {
      loader: "file-loader",
      options: {
        name: "[name].[contenthash].[ext]",
        outputPath: "assets",
        publicPath: "/assets",
      },
    },
  ];

  if (PRODUCTION) {
    pngRule.unshift({ loader: "cache-loader" });
    pngRule.push({
      loader: "image-process-loader",
      options: {
        presets: {
          twitter: { resize: 440 },
          facebook: {
            resize: [843, 504],
          },
          thumbnail: { resize: { height: 170 } },
          thumbnail2x: { resize: { height: 170 * 2 } },
        },
      },
    });
  }

  return {
    resolve: {
      alias: {
        util: resolve(__dirname, "src/util/"),
        assets: resolve(__dirname, "src/assets/"),
        thumbnails: resolve(__dirname, "src/thumbnails/"),
        icons: resolve(__dirname, "src/icons/"),
      },
    },
    entry,
    plugins,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: [
            { loader: "cache-loader" },
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"],
              },
            },
          ],
        },
        {
          test: /\.png$/,
          use: pngRule,
        },
        {
          test: /\.(svg|jpg|gif|ttf|otf)$/,
          use: [
            { loader: "cache-loader" },
            {
              loader: "file-loader",
              options: {
                name: "[name].[contenthash].[ext]",
                outputPath: "assets",
                publicPath: "/assets",
              },
            },
          ],
        },
        {
          test: /\.(vert|frag)$/i,
          use: "raw-loader",
        },
        {
          test: /\.css$/,
          use: [
            // PRODUCTION ? MiniCssExtractPlugin.loader : "style-loader",
            "style-loader",
            "css-loader",
          ],
        },
        {
          test: /\.svg$/,
          use: "raw-loader",
        },
        // https://www.youtube.com/watch?v=ddPQAJSm2cQ
        {
          exclude: /\.png$/,
          resourceQuery: /preset/,
          use: "null-loader",
        },
      ],
    },
    output: {
      path: resolve(__dirname, "dist"),
      filename: "[name].[contenthash].js",
    },
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
    },
    stats: PRODUCTION ? "normal" : "errors-warnings",
    devServer: {
      open: true,
      openPage: latestSketch.url,
    },
    performance: {
      hints: PRODUCTION && "warning",
      maxEntrypointSize: 6000000,
      maxAssetSize: 2000000,
    },
  };
};
