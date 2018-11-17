module.exports = {
  "development": {
    "username": "root",
    "password": "testtest",
    "database": "testdb",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "production": {
    "url": process.env.JAWSDB_URL,
    "dialect": "mysql"
  }
}
  