require('dotenv').config();

module.exports = {
  HOST: process.env.DB_HOST_DEV,
  USER: process.env.DB_USERNAME_DEV,
  PASSWORD: process.env.DB_PASSWORD_DEV,
  DB: process.env.DB_DATABASE_DEV,
  dialect: 'postgres',
  pool: {
    max: 7,
    min: 0,
    acquire: 50000,
    idle: 20000,
  },
};
