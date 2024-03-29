const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const Op = db.Sequelize.Op

const Product = require('../models/Product')


const productosController = {

	listar: async (req, res) => {
		const servicios = await db.Services.findAll()
		res.render("servicios/servicios", {servicios, user: req.session.userLogged})

	},

	search: async (req, res) => {
		const servicios = await db.Services.findAll({ where: {
			origen: {[Op.like]: '%'+req.body.origen+'%' }, destination: {[Op.like]: '%'+req.body.destination+'%'}
		}})
			res.render('servicios/servicios', {servicios, user: req.session.userLogged, origen:req.body.origen, destination:req.body.destination })
	},

	detalle: async (req, res) => {
		const servicio = await db.Services.findByPk(req.params.id)
		res.render('servicios/detalle', {servicio, user: req.session.userLogged })
	},

	perfil: async (req, res) => {
		const servicios = await db.Services.findAll()
		res.render('servicios/perfil-publico', {servicios, user: req.session.userLogged })
	},

    carrito: (req, res) => {
        const productsFilePath = path.join(__dirname, '../data/productosDataBase.json');
        const listadoDeProductos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render("productos/carrito", { articulos: listadoDeProductos, user: req.session.userLogged });
    },


    // detalle: (req, res) => {
    //     const productsFilePath = path.join(__dirname, '../data/productosDataBase.json');
    //     const listadoDeProductos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    //     let id = req.params.id;
    //     let artitucloId = listadoDeProductos.find(articulo => id == articulo.id);
    //     res.render("productos/detalle", { articulo: artitucloId, user: req.session.userLogged });
    // },


    adminCrearPOST: (req, res) => {
        const productsFilePath = path.join(__dirname, '../data/productosDataBase.json');
        const listadoDeProductos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        
        let nuevoServicio = {
			id: Number((listadoDeProductos.length + 1)),
            verificado: Boolean(req.body.verificado),
            mensajero: "Admin",
			origen: req.body.origen,
			destino: req.body.destino,
  			tipoEnvio: req.body.tipoEnvio,
            distancia: "???",
            peso: Number(req.body.peso),
            precio: Number(req.body.precio),
            imagen: req.body.imagen,
            descripcion: req.body.descripcion,
		};
        
		listadoDeProductos.push(nuevoServicio);
		fs.writeFileSync(productsFilePath,JSON.stringify(listadoDeProductos, null , ' '));
        res.render("productos/servicios", { articulos: listadoDeProductos, user: req.session.userLogged });
    },


    edit: (req, res) => {
		//  ---- Requerimiento de JSON  ---- //
		const productsFilePath = path.join(__dirname, '../data/productosDataBase.json');
        const listadoDeProductos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		//  ---- Ubicacion del producto para devolverlo a la vista  ---- //
		let producToEdit = listadoDeProductos.find(producto => producto.id == req.params.id);
		res.render('users/admin-editar', {productToEdit: producToEdit, user: req.session.userLogged});
	},


    // Update - Method to update
	update: (req, res) => {
		//  ---- Requerimiento de JSON  ---- //
		const productsFilePath = path.join(__dirname, '../data/productosDataBase.json');
        const listadoDeProductos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		
		//  ---- Identificar producto  ---- //
		let index = listadoDeProductos.findIndex(producto => producto.id == req.params.id);
		
		//  ---- Cambio de valores de los atributos  ---- //
		listadoDeProductos[index].verificado = Boolean(req.body.verificado)
		listadoDeProductos[index].origen = req.body.origen
		listadoDeProductos[index].destino = req.body.destino
		listadoDeProductos[index].tipoEnvio = req.body.tipoEnvio
		listadoDeProductos[index].peso = Number(req.body.peso)
        listadoDeProductos[index].precio = Number(req.body.precio)
        listadoDeProductos[index].imagen = req.body.imagen
        listadoDeProductos[index].descripcion = req.body.descripcion
	
		//  ---- Reescritura de JSON  ---- //
		fs.writeFileSync(productsFilePath,JSON.stringify(listadoDeProductos, null , ' '));
		res.redirect('/productos');
	},


    // Delete - Delete one product from DB
	destroy : (req, res) => {
		//  ---- Requerimiento de JSON  ---- //
		const productsFilePath = path.join(__dirname, '../data/productosDataBase.json');
        const listadoDeProductos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		//  ---- Identificar producto, quitarlo y reordenar IDs en base a su índice  ---- //
		let idAEliminar =  req.params.id;
		let productosFiltrados = listadoDeProductos.filter(product => product.id != idAEliminar);
		for (let i = 0; i < productosFiltrados.length; i++) {
			productosFiltrados[i].id = i + 1;
		};
	
		//  ---- Reescritura de JSON  ---- //
		fs.writeFileSync(productsFilePath,JSON.stringify(productosFiltrados, null , ' '));
		res.redirect('/productos');
	},
}

module.exports = productosController;