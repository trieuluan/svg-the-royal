const CracoAlias = require("craco-alias");
const imageOptimizer = require("craco-image-optimizer-plugin");
const path = require("path");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        /* tsConfigPath should point to the file where "paths" are specified */
        tsConfigPath: "./tsconfig.paths.json",
      },
    },
    {
      plugin: imageOptimizer,
      // image-webpack-plugin options
      options: {
        mozjpeg: {
          progressive: true,
          quality: 65,
        },
        // optipng.enabled: false will disable optipng
        optipng: {
          enabled: false,
        },
        pngquant: {
          quality: [0.65, 0.9],
          speed: 4,
        },
        gifsicle: {
          interlaced: false,
        },
        // the webp option will enable WEBP
        webp: {
          quality: 75,
        },
      },
    },
  ],
  webpack: {
    alias: {
      "@mui/styled-engine": "@mui/styled-engine-sc",
    },
    configure: (webpackConfig, { paths }) => {
      webpackConfig.output.publicPath =
        "/wp-content/plugins/svg-map-animations/build/";
      paths.appBuild = webpackConfig.output.path = path.resolve(
        "svg-map-animations/build"
      );
      webpackConfig.module.rules.push({
        type: "javascript/auto",
        test: /\.mjs$/,
        include: /node_modules/,
      });
      return webpackConfig; // Important: return the modified config
    },
    // configure: {
    //   output: {
    //     path: path.resolve("svg-map-animations/build"),
    //   },
    //   module: {
    //     rules: [
    //       {
    //         type: "javascript/auto",
    //         test: /\.mjs$/,
    //         include: /node_modules/,
    //       },
    //     ],
    //   },
    // },
  },
};
