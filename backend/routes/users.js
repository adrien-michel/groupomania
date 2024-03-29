var express = require('express');
var router = express.Router();
const db = require('../models');
router.get('/', function(req, res, next) {
	db.api.findAll({ limit: 10 }).then(function(rows) {
		res.render('user', { rows: rows });
	});
});
const userCtrl = require('../controllers/users');
// signup function 
router.post('/signup', userCtrl.signup);
//signin function
router.post('/login', userCtrl.login);
// affichage de profile
router.get('/profile/:id', userCtrl.showProfile);
//supprimer le profile
router.delete('/profile/:id', userCtrl.deleteProfile);
module.exports = router;