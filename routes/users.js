var express = require('express');
var router = express.Router();
const {getUsers, getUser, createUser, deleteUser, updateUser, getUserPokemon} = require("../controllers/userController.js");

router.get('/', getUsers);
router.get('/:id', getUser);
router.get('/:id/pokemon', getUserPokemon);
router.post('/', createUser);
router.delete('/:id', deleteUser);
router.patch('/:id', updateUser);


module.exports = router;
