const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/auth",
    createProxyMiddleware("/auth", {
      target: "http://localhost:4000",
      changeOrigin: true,
    }),
    (req, res, next) => {
      res.json({ name: "Hello" });
    }
  );
};
