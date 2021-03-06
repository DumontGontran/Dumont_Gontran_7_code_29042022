const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const schema = require('../schemas/user');
const bodyValidation = require('../middleware/bodyValidation');
const auth = require('../middleware/auth');

router.post('/register', bodyValidation(schema.register), userCtrl.register);
router.post('/login', bodyValidation(schema.login), userCtrl.login);

router.get('/profil/:id', auth, userCtrl.getOneProfilUser);

router.patch('/profil/:id', auth, bodyValidation(schema.profil), userCtrl.updateOneProfilUser);
router.patch('/profil/password/:id', auth, bodyValidation(schema.password), userCtrl.updateOnePasswordUser);

router.delete('/profil/:id', auth, userCtrl.deleteOneUser);

module.exports = router;