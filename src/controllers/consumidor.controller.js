const model = require('../models/consumidor.model');
const controller = {};

controller.listar = async (req, res) => {
	try {
		const resultados = await model.listar();
		res.json({
			datos: resultados,
		});
	} catch (error) {
		res.json({
			mensaje: 'Lo sentimos este usuario no se encuentra',
			error: true,
		});
	}
};

controller.obtenerCedula = async (req, res) => {
	try {
		const resultados = await model.obtenerCedula(req.params.cedula);
		res.json({
			datos: resultados,
		});
	} catch (error) {
		res.json({
			mensaje:
				'Lo sentimos, este usuario no se encuentra en nuestra base de datos',
			error: true,
		});
	}
};

module.exports = controller;
