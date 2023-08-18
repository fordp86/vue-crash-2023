module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "https://taskapp-jsonserver-f5efffa85a40.herokuapp.com",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/api": "/" },
      },
    },
  },
};
