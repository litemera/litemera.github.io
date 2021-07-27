const env = require("./env-config");

module.exports = {
  presets: ["next/babel"],
  plugins: [
    ["transform-define", env],
    [
      "styled-components",
      {
        ssr: true,
        fileName: false,
        displayName: false,
        preprocess: false,
        pure: true,
      },
    ],
  ],
};
