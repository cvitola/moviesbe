const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.get('/', userController.getUsers)
router.post('/', userController.registerUser);
router.put('/', userController.updateUser);
router.delete('/:mail', userController.deleteUser);

module.exports = router;