const express = require('express');

const controller = require('../controllers/littles_ctrl');
const router = express.Router();

//authenticates a user
router.get('/littles/find', controller.find)
router.post('/littles/add', controller.add)

module.exports = router