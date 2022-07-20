var express = require('express');
var router = express.Router();
var multer = require('multer');
const mainController = require('../controllers/mainController');

/* GET home page. */

router.get('/', mainController.inicio);


module.exports = router;
