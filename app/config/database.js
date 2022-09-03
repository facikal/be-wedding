module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "invitation_wedding",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  production: {
    username: "xvpccpjpuokmhc",
    password: "952a533efea8f4138f855baa3f925fc70f23308f1f0b173ab4485a34ec02a092",
    database: "dfjnfmq1oik2l1",
    port: 5432,
    host: "ec2-52-70-45-163.compute-1.amazonaws.com",
    dialect: "postgres",
    "dialectOptions": {
      "ssl": {
        "rejectUnauthorized": false
      }
    }
  }
}
