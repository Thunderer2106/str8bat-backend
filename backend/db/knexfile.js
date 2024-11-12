require("dotenv").config();
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      port: 6543,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: {
      directory: "./migrations",
    },
  },
  production: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      port: 6543,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: {
      directory: "./migrations",
    },
  },
};
