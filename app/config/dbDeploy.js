const { Sequelize } = require('sequelize');
const env = process.env.NODE_ENV || 'production';
const config = require(__dirname + './database.js')[env];

const db = new Sequelize(new Sequelize(process.env[config.use_env_variable], config))

module.exports = db