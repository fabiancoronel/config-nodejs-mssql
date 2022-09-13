import sql from 'mssql';

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

async function getConnection() {
	try {
		const pool = await sql.connect(dbSettings);
		return pool;
	} catch (error) {
		console.log('Error al conectar con la base de datos', error);
	}
}

getConnection();
