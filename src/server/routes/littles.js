const express = require('express');

const controller = require('../controllers/littes_ctrl');
const router = express.Router();

//authenticates a user
router.get('/littles/findAll', controller.findAll);
router.get('/littles/findById', controller.findById);

module.exports = router;