const sql = require('mssql')

// Configuración de la base de datos
const dbSettings = {
	host: 'gestionsolicitudes.database.windows.net',
	user: 'jovenesmvm',
	password: '0^618Bjt37y@',
	database: 'gestionsolicitudes',
	options: {
		encrypt: true,
		trustServerCertificate: true,
	},
};
const sqlConfig = {
  user: 'jovenesmvm',
  password: '0^618Bjt37y@',
  database: 'gestionsolicitudes',
  server: 'gestionsolicitudes.database.windows.net',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}

async function getConnection() {
	try {
		const pool = await sql.connect(sqlConfig);
		const result = await sql.query`select * from Responsable`
		console.dir(result)
		return pool;
	} catch (error) {
		console.log('Error al conectar con la base de datos', error);
	}
}

getConnection();
