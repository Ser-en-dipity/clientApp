const { createProxyMiddleware } = require('http-proxy-middleware');
const { env } = require('process');

const target = 'http://192.168.12.41:5243/';

const context =  [
  "/Inspector/statistics",
];

module.exports = function(app) {
  const appProxy = createProxyMiddleware(context, {
    target: target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    }
  });

  app.use(appProxy);
};
