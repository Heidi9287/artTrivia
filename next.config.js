const withImages = require("next-images");

module.exports = withImages({
  webpack(config, options) {
    // Resolve .ts and .tsx extensions
    config.resolve.extensions.push(".ts", ".tsx");

    // Configure ts-loader
    config.module.rules.push({
      test: /\.tsx?$/,
      loader: "ts-loader",
      options: {
        // speed up compilation by disabling type checking
        transpileOnly: false,
      },
    });

    return config;
  },
});
