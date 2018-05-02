const devConfig = {
	client: 'mysql',
	connection: {
		hots: '127.0.0.1',
		port: '3306',
		user: 'root',
		password: 'root',
		database: 'jobs_dev'
	},
	migrations:{
		directory: './src/database/migrations'
	},
	seeds:{
		directory: './src/database/seeds'
	}
};

module.exports = {
	development: devConfig,
	production: {}
};