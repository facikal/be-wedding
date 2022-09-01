const { Sequelize } = require('sequelize');

const db = new Sequelize('invitation_wedding', 'root', '', {
  host: "localhost",
  dialect: "mysql"
})

module.exports = db