const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const HtmlWebpackInlineSVGPlugin = require("html-webpack-inline-svg-plugin");

module.exports = (env, { mode }) => {
  const PROD = mode === "production";
  const DEV = mode === "development";

  let sketches = require("./scripts/getSketches");
  const latestSketch = sketches[sketches.length - 1];

  if (DEV) {
    sketches = sketches.slice(-14);
  }

  let entry = sketches.reduce(
    (acc, sketch) => Object.assign(acc, { [sketch.title]: sketch.entry }),
    {}
  );
  entry.index = resolve(__dirname, "src/index.js");
  entry.indexStyles = resolve(__dirname, "src/styles/index.css");
  entry.sketchStyles = resolve(__dirname, "src/styles/sketch.css");

  const domain = PROD ? "https://sketchbook.arlo.me" : "http://localhost:8080";

  let plugins = sketches.map(
    (sketch, i) =>
      new HtmlWebpackPlugin({
        inject: true,
        chunks: ["sketchStyles", sketch.title],
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
      chunks: ["indexStyles", "index"],
      filename: "index.html",
      template: "src/templates/index.ejs",
      templateParameters: {
        siteName: "sketchbook.arlo.me",
        sketches: sketches.reverse(),
        latestSketch,
        domain,
      },
    }),
    new FaviconsWebpackPlugin({
      logo: resolve(__dirname, "src", latestSketch.image),
      cache: true,
      favicons: {
        appName: "sketchbook.arlo.me",
        appDescription: "sketchbook.arlo.me",
        developerName: "Arlo Bryan Guthrie",
        developerURL: "sketchbook.arlo.me",
        background: "#111",
        theme_color: "#eee",
        icons: {
          coast: false,
          yandex: false,
          appleStartup: false,
        },
      },
    }),
    new ImageminPlugin({
      disable: !PROD,
      cacheFolder: resolve(__dirname, ".cache"),
    }),
    new HtmlWebpackInlineSVGPlugin({
      runPreEmit: true,
    }),
  ]);

  let pngRule = [
    {
      loader: "file-loader",
      options: {
        name: "[name].[contenthash:8].[ext]",
        outputPath: "assets",
        publicPath: "/assets",
      },
    },
  ];

  if (PROD) {
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
          test: /\.worker\.js$/i,
          use: [
            {
              loader: "worker-loader",
              options: { inline: "fallback" },
            },
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
            {
              loader: "file-loader",
              options: {
                name: "[name].[contenthash:8].[ext]",
                outputPath: "assets",
                publicPath: "/assets",
              },
            },
          ],
        },
        {
          test: /\.(frag|vert|glsl)$/,
          use: ["raw-loader", "glslify-loader"],
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
              },
            },
            "postcss-loader",
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
      filename: "[name].[contenthash:8].js",
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
    stats: PROD ? "normal" : "errors-warnings",
    devServer: {
      open: true,
      openPage: latestSketch.url,
    },
    performance: {
      hints: PROD && "warning",
      maxEntrypointSize: 6000000,
      maxAssetSize: 2000000,
    },
  };
};
