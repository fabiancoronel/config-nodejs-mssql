const conexion = require('../database/db');

const model = {};

model.listar = async () => {
	try {
		const sql = 'SELECT cedula FROM consumidores';
		const resultados = await conexion.query(sql);
		return resultados;
	} catch (error) {
		console.log(error);
	}
};

model.obtenerCedula = async (cedula) => {
	try {
		const sql = `SELECT cedula FROM consumidores WHERE cedula = ${cedula}`;
		const resultados = await conexion.query(sql);
		return resultados && resultados.length ? resultados[0] : null; // Validar que exista un array que esta lleno y si esta lleno devuelva el primer elemento del array
	} catch (error) {
		console.log(error);
	}
};

module.exports = model;
