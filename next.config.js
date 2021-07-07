/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const TerserPlugin = require("terser-webpack-plugin");

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,

  webpack: (
    /** @type {{ plugins: any[]; optimization: { minimize: boolean; minimizer: any[]; }; }} */ config,
    /** @type {{ buildId: any; dev: any; isServer: any; defaultLoaders: any; webpack: any; }} */ options
  ) => {
    let { buildId, dev, isServer, defaultLoaders, webpack } = options;
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));

    config.resolve.alias["@src"] = path.join(__dirname, "src");
    config.resolve.alias["@styles"] = path.join(__dirname, "styles");
    config.resolve.alias["@public"] = path.join(__dirname, "public");
    config.resolve.alias["@utils"] = path.join(__dirname, "utils");
    config.resolve.alias["@components"] = path.join(__dirname, "components");
    config.resolve.alias["@pages"] = path.join(__dirname, "pages");

    if (isServer && !dev && process.env.NEXT_MINIMIZE === "true") {
      config.optimization = {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            parallel: true,
            cache: true,
            terserOptions: {
              output: { comments: false },
              mangle: true,
              compress: true,
            },
            extractComments: false,
          }),
        ],
      };
    }

    // Important: return the modified config
    return config;
  },
};

module.exports = withPlugins([nextConfig, withImages]);
