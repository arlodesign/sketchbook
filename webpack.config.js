const { resolve, join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const makeDateArray = require("./scripts/make-date-array");

let sketches = require("./scripts/get-sketches");

module.exports = (env, { mode }) => {
  const PROD = mode === "production";
  const latestSketch = sketches[sketches.length - 1];

  if (PROD) {
    const today = makeDateArray(new Date()).join("-");
    sketches = sketches.filter(({ title }) => title <= today);
  }

  let entry = sketches.reduce(
    (acc, sketch) => Object.assign(acc, { [sketch.title]: sketch.entry }),
    {}
  );
  entry.index = resolve(__dirname, "src/index.js");
  entry.indexStyles = resolve(__dirname, "src/styles/index.css");
  entry.sketchStyles = resolve(__dirname, "src/styles/sketch.css");

  const domain = PROD ? "https://sketchbook.arlo.me" : "http://localhost:8080";

  let plugins = [];
  let patterns = [{ from: "./CNAME", to: "." }];
  sketches.forEach((sketch, i) => {
    plugins.push(
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
    patterns.push({
      from: resolve(__dirname, "src", sketch.image),
      to: join(resolve(__dirname, "dist"), sketch.url, "thumb.png"),
    });
  });
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
        prod: PROD,
      },
    }),
    new CopyPlugin({ patterns }),
    new FaviconsWebpackPlugin({
      logo: resolve(__dirname, "src", latestSketch.image),
      cache: {
        type: "filesystem",
        buildDependencies: {
          config: [__filename],
        },
      },
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
  ]);

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
    cache: true,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: [
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
          test: /\.(svg|png|jpg|gif|ttf|otf)$/,
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
          use: [
            "raw-loader",
            {
              loader: "glslify-loader",
              options: { basedir: resolve(__dirname, "src/util") },
            },
          ],
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
      filename: "assets/[name].[contenthash:8].js",
    },
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        chunks: "all",
      },
    },
    stats: PROD ? "normal" : "errors-warnings",
    devServer: {
      open: [latestSketch.url],
      port: 8080,
      hot: true,
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
        reconnect: true,
      },
    },
    performance: {
      hints: PROD && "warning",
      maxEntrypointSize: 6000000,
      maxAssetSize: 2000000,
    },
  };
};
