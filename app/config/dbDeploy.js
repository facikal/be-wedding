const { Sequelize } = require('sequelize');
const env = process.env.NODE_ENV || 'production';
const config = require(__dirname + './database')[env];


// const db = new Sequelize('dfjnfmq1oik2l1', 'xvpccpjpuokmhc', '952a533efea8f4138f855baa3f925fc70f23308f1f0b173ab4485a34ec02a092', {
//   "port":"5432",
//   "host": "ec2-52-70-45-163.compute-1.amazonaws.com",
//   "dialect": "postgres",
//   "dialectOptions": {
//     "ssl": {"rejectUnauthorized": false},
//   },
// })
const db = new Sequelize(process.env[config.use_env_variable], config)

module.exports = db