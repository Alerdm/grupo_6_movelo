const fs = require('fs');
const path = require('path');
const db = require('../../database/models');
const Services = require('../../database/models/Services');
const Op = db.Sequelize.Op

const productosController = {

	listar: async (req, res) => {
        const servicios = await db.Services.findAll({ attributes: ['id_service', 'id_user', 'origen', 'destination', 'description'], include: [{association: "usuarios"}]})   
        const categoriaEnvio = await db.CategoriaEnvio.findAll()
        const serviciosLocales = await db.Services.findAll({where: { id_shipment_category: 1}, atributes: ['id_service', 'origen', 'destination']})
        const serviciosInternacionales = await db.Services.findAll({where: { id_shipment_category: 2}, atributes: ['id_service', 'origen', 'destination']})
        const frecuenciaDiaria = await db.Services.findAll({where: { id_frequency: 1}, atributes: ['id_service', 'origen', 'destination']})
        const frecuenciaSemanal = await db.Services.findAll({where: { id_frequency: 2}, atributes: ['id_service', 'origen', 'destination']})
        const frecuenciaMensual = await db.Services.findAll({where: { id_frequency: 3}, atributes: ['id_service', 'origen', 'destination']})


        for (let i=0; i < servicios.length; i++){
            servicios[i].dataValues.tipo_de_envio = categoriaEnvio
            servicios[i].dataValues.detail = 'http://localhost:3001/api/servicios/'+servicios[i].id_service
            servicios[i].dataValues.usuarios.image = 'http://localhost:3001/images/avatars/'+servicios[i].dataValues.usuarios.image
        }
        res.status(200).json({
            total: servicios.length,
            countByCategory: { serviciosLocales: serviciosLocales.length, serviciosLocalesDetalle: serviciosLocales, serviciosInternacionales: serviciosInternacionales.length, serviciosInternacionalesDetalle: serviciosInternacionales},
            countByFrequency: { frecuenciaDiaria: frecuenciaDiaria.length, serviciosFrecuenciaDiaria: frecuenciaDiaria, frecuenciaSemanal: frecuenciaSemanal.length, serviciosFrecuenciaSemanal: frecuenciaSemanal, frecuenciaMensual: frecuenciaMensual.length, serviciosFrecuenciaMensual: frecuenciaMensual},
            data: servicios,
            status: 200
        })
	},

	detalle: async (req, res) => {
		const servicio = await db.Services.findByPk(req.params.id, {include: [{association: "usuarios"}]})
        const categoriaEnvio = await db.CategoriaEnvio.findAll()
        const frecuenciaEnvio = await db.CategoriaEnvio.findAll() 
        image = 'http://localhost:3001/images/avatars/'+servicio.dataValues.usuarios.image
		res.status(200).json({ 
                id: servicio.id_service,
                id_user: servicio.id_user,
                origen: servicio.origen,
                destination: servicio.destination,
                id_shipment_category: categoriaEnvio,
                id_frequency: frecuenciaEnvio,
                weight: servicio.weight,
                height: servicio.height,
                width: servicio.width,
                price: servicio.price,
                description: servicio.description,
                image: image,
                url_imagen: {}, 
        })
	},
	
}

module.exports = productosController;