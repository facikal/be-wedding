const { Sequelize } = require('sequelize');

const db = new Sequelize('invitation_wedding', 'xvpccpjpuokmhc', '952a533efea8f4138f855baa3f925fc70f23308f1f0b173ab4485a34ec02a092', {
  database:"dfjnfmq1oik2l1",
  username:"xvpccpjpuokmhc",
  password:"952a533efea8f4138f855baa3f925fc70f23308f1f0b173ab4485a34ec02a092",
  port:"5432",
  host: "ec2-52-70-45-163.compute-1.amazonaws.com",
  dialect: "postgres",
  dialectOptions: {
    ssl: {rejectUnauthorized: false},
  },
})

module.exports = db