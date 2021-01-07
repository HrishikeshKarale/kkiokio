/* eslint-disable @typescript-eslint/no-var-requires */
// defined the database, and created an Express server and router
//use JOI for validation of JSON object schema

const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const DB = require("./db");
const config = require("./config");
const https = require("https");
const fs = require("fs");
const contentSecurityPolicy = require("helmet-csp");
// const cspMiddleware = require("./cspMiddleware");

const db = new DB("sqlitedb");
const app = express();
const router = express.Router();
// app.use(express.static('routes');

// app.use(cspMiddleware);

app.use(
  contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'", "default.example"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: []
    },
    reportOnly: false
  })
);

// app.use(contentSecurityPolicy.getDefaultDirectives());
// app.use(express.static(__dirname + '/'));

// app.use(function(request, response, next) {
//     response.setHeader("Content-Security-Policy", "script-src 'self' https://apis.google.com");
//     return next();
// });

router.use(
  bodyParser.urlencoded({
    extended: false
  })
);
router.use(bodyParser.json());

// /define CORS middleware to ensure we do not run into any cross origin resource errors
// CORS middleware
const allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
};

app.use(allowCrossDomain);

// defining router for registering a new user
router.post("/register", (req, res) => {
  //console.log("pretneder");
  const name = req.body.name;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  db.insert([name, email, username, bcrypt.hashSync(password, 8), 0], err => {
    if (err) {
      console.error("register user", err);
      return res.status(500).send("There was a problem registering the user.");
    }
    db.selectByEmail(email, (err, user) => {
      if (err) return res.status(500).send("There was a problem getting user");
      const token = jwt.sign(
        {
          id: user.id
        },
        config.secret,
        {
          expiresIn: 86400 // expires in 24 hours
        }
      );
      res.status(200).send({
        auth: true,
        token,
        user
      });
    });
  });
});

// define the route for registering an administrator
router.post("/register-admin", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  db.insertAdmin(
    [name, email, username, bcrypt.hashSync(password, 8), 1],
    err => {
      if (err)
        return res
          .status(500)
          .send("There was a problem registering the user.");
      db.selectByEmail(email, (err, user) => {
        if (err)
          return res.status(500).send("There was a problem getting user");
        const token = jwt.sign(
          {
            id: user.id
          },
          config.secret,
          {
            expiresIn: 86400 // expires in 24 hours
          }
        );
        res.status(200).send({
          auth: true,
          token,
          user
        });
      });
    }
  );
});

// define the route for logging in an administrator
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  db.selectByEmail(email, (err, user) => {
    if (err) return res.status(500).send("Error on the server.");
    if (!user) return res.status(404).send("No user found.");
    const passwordIsValid = bcrypt.compareSync(password, user.user_pass);
    if (!passwordIsValid) {
      return res.status(401).send({
        auth: false,
        token: null
      });
    }
    const token = jwt.sign(
      {
        id: user.id
      },
      config.secret,
      {
        expiresIn: 86400 // expires in 24 hours
      }
    );
    res.status(200).send({
      auth: true,
      token,
      user
    });
  });
});


// define the route for logging in an administrator
router.get("/", (req, res) => {
  res.status(200).send("Welcome to our API");
});

// use the Express server to make our application accessible
app.use(router);

const port = process.env.PORT || 8001;

const httpsOptions = {
  key: fs.readFileSync("@/../server/ssl/cert.key"),
  cert: fs.readFileSync("@/../server/ssl/cert.pem")
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const server = https.createServer(httpsOptions, app).listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
