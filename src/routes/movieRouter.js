const express = require("express");
const movieController = require("../controllers/movieController");
const router = express.Router();

router.post('/', movieController.);
router.put('/', movieController.);
router.delete('/:mail', movieController.);

module.exports = router;