const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({
  target: 'https://20.244.56.144',
  changeOrigin: true,
  secure: false // Disable SSL verification
}));

app.listen(3001, () => {
  console.log('Proxy server is running on http://localhost:3001');
});
