const env = {
  SQLdatabase: 'testdb',
  SQLusername: 'root',
  SQLpassword: 'testtest',
  SQLhost: 'localhost',
  SQLdialect: 'mysql',
  SQLpool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};

module.exports = env;