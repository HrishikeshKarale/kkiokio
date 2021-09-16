const sqlite3 = require("sqlite3").verbose();

class Db {
  constructor(file) {
    this.db = new sqlite3.Database(file);
    this.createUserTable();
    this.createCommentsTable();
  }

  createUserTable() {
    const sql = `
            CREATE TABLE IF NOT EXISTS user (
              id integer,
              name text NOT NULL,
              email text NOT NULL,
              username text NOT NULL CHECK (length(username) >= 8),
              phone_number text CHECK (length(username) >= 10),
              image blob,
              user_pass text NOT NULL CHECK (length(username) >= 8),
              is_admin integer DEFAULT 0,
              PRIMARY KEY(id),
              UNIQUE(email, phone_number, username)
            )`;
    return this.db.run(sql);
  }

  createCommentsTable() {
    const sql = `
            CREATE TABLE IF NOT EXISTS comment (
              id integer,
              user_id integer NOT NULL,
              comment text NOT NULL,
              likes text,
              dislikes text,
              date integer NOT NULL,
              time integer NOT NULL,
              PRIMARY KEY(id),
              FOREIGN KEY(user_id) REFERENCES user(id)
            )`;
    return this.db.run(sql);
  }

  selectByEmail(email, callback) {
    return this.db.get(
      "SELECT * FROM user WHERE email = ?",
      [email],
      (err, row) => {
        callback(err, row);
      }
    );
  }

  selectByUsername(username, callback) {
    return this.db.get(
      "SELECT * FROM user WHERE username = ?",
      [username],
      (err, row) => {
        callback(err, row);
      }
    );
  }

  insertAdmin(user, callback) {
    return this.db.run(
      "INSERT INTO user (name, email, username, user_pass, is_admin) VALUES (?,?,?,?,?)",
      user,
      err => {
        callback(err);
      }
    );
  }

  selectAll(callback) {
    return this.db.all("SELECT * FROM user", (err, rows) => {
      callback(err, rows);
    });
  }

  insert(user, callback) {
    return this.db.run(
      "INSERT INTO user (name, email, username, user_pass, is_admin) VALUES (?,?,?,?,?)",
      user,
      err => {
        callback(err);
      }
    );
  }
}

module.exports = Db;
