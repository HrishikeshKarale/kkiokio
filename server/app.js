/* eslint-disable @typescript-eslint/no-var-requires */
// defined the database, and created an Express server and router
const express = require("express");
const cors = require('cors');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const DB = require("./database/db");
const config = require("./config");

const db = new DB("sqlitedb");
const app = express();
app.use(cors());
const router = express.Router();

router.use(
  bodyParser.urlencoded({
    extended: false
  })
);
router.use(bodyParser.json());


router.get("/", (req, res) => {
  return res.status(200).send("Server is working");
});
router.get("/api", (req, res) => {
  return res.status(200).send("api is working");
});

// defining router for registering a new user
router.post("/register", (req, res) => {
  //console.log("pretneder");
  const name = req.body.name;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  db.insert([name, email, username, bcrypt.hashSync(password, 8), 0], err => {
    if (err) {
      // console.error("register user", err);
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
router.post("/loginUser", (req, res) => {
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

// use the Express server to make our application accessible
app.use(router);

const port = process.env.PORT || 8001;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const server = app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
