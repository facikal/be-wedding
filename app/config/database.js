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
    username: "ssyvmnsdmjinkk",
    password: "4335bdfc508cf6ee7bb5dbd7362023b868873c42129546d916f0b5e2240d7a48",
    database: "d4frf16vfp0a0j",
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
