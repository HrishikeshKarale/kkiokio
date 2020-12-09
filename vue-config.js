// const fs = require("fs");

import * as fs from "fs";

module.exports = {
  devServer: {
    port: 8085, // CHANGE YOUR PORT HERE!
    hotOnly: false,
    https: {
      key: fs.readFileSync("./server/ssl/cert.key"),
      cert: fs.readFileSync("./server/ssl/cert.pem")
    },
    public: "https://localhost:8080/"
  }
};
