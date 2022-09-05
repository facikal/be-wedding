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
    username: "gnxwhkptnqmtnq",
    password: "31322150d3d4df2fe63d4d35541a7f7de12e4cd71f440916b207f3c101273a5d",
    database: "db6hfdk26vula3",
    port: 5432,
    host: "ec2-34-234-240-121.compute-1.amazonaws.com",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
}
