
const fs = require('fs')

module.exports = {
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8085, // CHANGE YOUR PORT HERE!
    // https: true,
    hotOnly: false,
    https: {
      key: fs.readFileSync('./server/ssl/cert.key'),
      cert: fs.readFileSync('./server/ssl/cert.pem'),
    },
    public: 'https://localhost:8080/'

  },
}