const isProd = process.env.NODE_ENV === "production";

module.exports = {
  "process.env.BACKEND_URL": isProd ? "https://litemera.github.io/" : "",
};
