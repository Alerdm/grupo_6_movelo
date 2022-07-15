const fs = require('fs');
const path = require('path');
const db = require('../../database/models');
const Services = require('../../database/models/Services');
const Op = db.Sequelize.Op




const productosController = {

	listar: async (req, res) => {
        const servicios = await db.Services.findAll({ attributes: ['id_service', 'origen', 'destination', 'description', "id_shipment_category"]})                
        for (let i=0; i < servicios.length; i++){
            // servicios[i].dataValues.catego
            servicios[i].dataValues.detail = 'http://localhost:3001/api/servicios/'+servicios[i].id_service
        };
        res.status(200).json({
            total: servicios.length,
            countByCategory: {},
            data: servicios,
            status: 200
        })
	},

	detalle: async (req, res) => {
		const servicio = await db.Services.findByPk(req.params.id)
		res.status(200).json({ 
            detalle_servicio: {
                id: servicio.id_service,
                id_user: servicio.id_user,
                origen: servicio.origen,
                destination: servicio.destination,
                id_shipment_category: servicio.id_shipment_category,
                id_frequency: servicio.id_frequency,
                weight: servicio.weight,
                height: servicio.height,
                width: servicio.width,
                price: servicio.price,
                description: servicio.description
            },  
            url_imagen: {}, 
        })
	},



	
}

module.exports = productosController;